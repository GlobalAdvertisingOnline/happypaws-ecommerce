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

    const email = formData.get("email")?.toString().trim() || "";
    const orderNumber = formData.get("order_number")?.toString().trim() || "";
    const reason = formData.get("reason")?.toString().trim() || "";
    const details = formData.get("details")?.toString().trim() || "";
    const honey = formData.get("_honey")?.toString() || "";

    if (honey) {
      return new Response(JSON.stringify({ success: true }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!email || !orderNumber || !reason) {
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

    console.log("CANCEL_FORM_SUBMISSION", JSON.stringify({
      timestamp: new Date().toISOString(),
      email, orderNumber, reason, details,
    }));

    const formSubmitData = new URLSearchParams();
    formSubmitData.append("email", email);
    formSubmitData.append("order_number", orderNumber);
    formSubmitData.append("reason", reason);
    if (details) formSubmitData.append("details", details);
    formSubmitData.append("_captcha", "false");
    formSubmitData.append("_template", "table");
    formSubmitData.append("_subject", "Order Cancellation Request");

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
