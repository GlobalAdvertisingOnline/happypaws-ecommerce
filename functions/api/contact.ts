interface Env {
  [key: string]: unknown;
}

interface CFContext {
  request: Request;
  env: Env;
  waitUntil: (promise: Promise<unknown>) => void;
}

export const onRequestPost: PagesFunction<Env> = async (context: CFContext) => {
  try {
    const formData = await context.request.formData();

    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const subject = formData.get("subject")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";
    const orderNumber = formData.get("order_number")?.toString().trim() || "";
    const honey = formData.get("_honey")?.toString() || "";

    if (honey) {
      return new Response(JSON.stringify({ success: true }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "All required fields must be filled." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid email address." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    console.log("CONTACT_FORM_SUBMISSION", JSON.stringify({
      timestamp: new Date().toISOString(),
      name, email, subject, orderNumber, message,
    }));

    const formSubmitData = new URLSearchParams();
    formSubmitData.append("name", name);
    formSubmitData.append("email", email);
    formSubmitData.append("subject", subject);
    formSubmitData.append("message", message);
    if (orderNumber) formSubmitData.append("order_number", orderNumber);
    formSubmitData.append("_captcha", "false");
    formSubmitData.append("_template", "table");
    formSubmitData.append("_subject", "New message from HappyPaws contact form");

    context.waitUntil(
      fetch("https://formsubmit.co/ajax/support@happypaws.shop", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formSubmitData,
      }).catch(() => {})
    );

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch {
    return new Response(
      JSON.stringify({ success: false, error: "Server error. Please try again." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
