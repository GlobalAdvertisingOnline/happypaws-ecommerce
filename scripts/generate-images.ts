import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

// ─── Config ──────────────────────────────────────────────────────────
const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error("❌ GEMINI_API_KEY environment variable is required");
  process.exit(1);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:generateContent?key=${API_KEY}`;
const SCORE_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:generateContent?key=${API_KEY}`;
const OUTPUT_DIR = path.join(__dirname, "generated-images");
const MIN_DELAY_MS = 6000; // 10 RPM = 6s between requests
const QUALITY_THRESHOLD = 8;
const MAX_RETRIES = 5;

// ─── Image Specs ─────────────────────────────────────────────────────
interface ImageSpec {
  id: string;
  filename: string;
  aspectRatio: string;
  prompt: string;
  minScore: number;
  targetWidth: number;
  targetHeight: number;
}

const BASE_STYLE =
  "Ultra-realistic, professional commercial photography, high quality, no text, no watermarks, no logos, no distorted anatomy, no blurry elements. Teal and aqua tones, warm natural light, clean and inviting feel.";

const IMAGE_SPECS: ImageSpec[] = [
  {
    id: "hero",
    filename: "hero.webp",
    aspectRatio: "16:9",
    targetWidth: 1600,
    targetHeight: 900,
    prompt: `A premium pet accessories e-commerce lifestyle photograph shot by a world-class commercial photographer. An elegant curated display of premium pet accessories — a beautiful leather dog collar with brass hardware, a cozy knit pet bed, colorful rope toys, and a grooming brush — arranged on a clean white marble surface with soft teal fabric draped in the background. A happy golden retriever puppy sitting beside the products, looking at the camera. Warm natural lighting with soft shadows. Shallow depth of field with tack-sharp focus on the products. Shot with a Phase One IQ4 150MP medium format camera. Aspirational, warm, pet-loving luxury feel. Colors: teal, aqua, warm cream, natural wood tones. The image should look like it belongs on the homepage of a premium pet brand like Wild One or Fable Pets. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },
  {
    id: "about",
    filename: "about.webp",
    aspectRatio: "4:3",
    targetWidth: 1200,
    targetHeight: 900,
    prompt: `A clean, modern pet accessories fulfillment center photographed for Architectural Digest. Neatly organized shelving with premium pet products — collars, toys, beds — in branded teal boxes. A friendly worker in a teal polo carefully packing a pet accessory into a premium shipping box. Bright natural light streaming through large windows. Warm, trustworthy atmosphere that conveys care for quality. Modern industrial space with white walls, natural wood accents, and teal brand touches. Professional editorial photography with cinematic lighting. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },
  {
    id: "avatar-sarah",
    filename: "avatar-sarah.webp",
    aspectRatio: "1:1",
    targetWidth: 400,
    targetHeight: 400,
    prompt: `Professional headshot portrait of a mid-30s woman with a warm, genuine friendly smile. Light brown hair, natural makeup. She is wearing a casual teal-colored blouse. Soft blurred neutral background with warm cream tones. Natural studio lighting with subtle rim light. Shot by a professional portrait photographer. Clean, approachable, trustworthy. Premium corporate portrait quality. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },
  {
    id: "avatar-james",
    filename: "avatar-james.webp",
    aspectRatio: "1:1",
    targetWidth: 400,
    targetHeight: 400,
    prompt: `Professional headshot portrait of an early-40s man with a confident, approachable expression and slight smile. Short dark hair, clean-shaven or neatly trimmed beard. Wearing a dark teal button-down shirt. Soft blurred neutral background with warm cream tones. Natural studio lighting with subtle rim light. Shot by a professional portrait photographer. Premium corporate portrait quality. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },
  {
    id: "avatar-emily",
    filename: "avatar-emily.webp",
    aspectRatio: "1:1",
    targetWidth: 400,
    targetHeight: 400,
    prompt: `Professional headshot portrait of a late-20s woman with a genuine happy smile showing warmth and friendliness. Dark hair, natural look. Wearing small gold hoop earrings and a warm aqua-teal colored top. Soft blurred neutral background with warm cream tones. Natural studio lighting with subtle rim light. Shot by a professional portrait photographer. Premium corporate portrait quality. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },
  {
    id: "avatar-michael",
    filename: "avatar-michael.webp",
    aspectRatio: "1:1",
    targetWidth: 400,
    targetHeight: 400,
    prompt: `Professional headshot portrait of an early-50s man with a trustworthy, warm expression and kind eyes. Salt-and-pepper hair, clean appearance. Wearing a charcoal blazer over a light teal shirt. Soft blurred neutral background with warm cream tones. Natural studio lighting with subtle rim light. Shot by a professional portrait photographer. Premium corporate portrait quality. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },
  {
    id: "tracking-hero",
    filename: "tracking-hero.webp",
    aspectRatio: "16:9",
    targetWidth: 1600,
    targetHeight: 900,
    prompt: `A premium delivery scene photographed for a luxury pet brand campaign. A neatly wrapped teal-accented kraft paper package with a small paw-print sticker, sitting on a bright front porch with a welcome mat. A curious golden retriever sniffing the package with an excited, happy expression. Golden hour warm sunlight streaming in with beautiful light rays. Feeling of care, quality, and warm joy. The package looks premium and inviting. Potted green plants on either side of the doorway. Shot with a high-end DSLR with warm cinematic color grading. Professional commercial photography. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },
  {
    id: "contact-hero",
    filename: "contact-hero.webp",
    aspectRatio: "16:9",
    targetWidth: 1600,
    targetHeight: 900,
    prompt: `A friendly female customer support representative wearing a premium professional headset, sitting at a clean modern desk with a sleek laptop. She has a warm, genuine smile and is engaged in helping a customer. A small framed photo of a dog on her desk. Bright, modern office with teal accent walls, natural wood furniture, cream decor, and soft natural lighting from large floor-to-ceiling windows. A small potted plant on the desk. Professional, approachable, warm-toned workspace. Editorial photography quality. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },
  {
    id: "og-image",
    filename: "og-image.webp",
    aspectRatio: "1200:630",
    targetWidth: 1200,
    targetHeight: 630,
    prompt: `A premium pet accessories brand still life shot for a luxury magazine advertisement. An elegant teal-colored gift box opened to reveal a beautiful leather dog collar with brass hardware, placed on a clean white marble surface. A soft knit pet toy and a small grooming brush beside it. Soft warm directional lighting from the left creating beautiful shadows. Minimalist composition with negative space. Teal fabric draped in the soft background. Aspirational, warm, premium pet accessories feel. The image should look like an advertisement for a high-end pet brand. ${BASE_STYLE}`,
    minScore: QUALITY_THRESHOLD,
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────
function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

let lastRequestTime = 0;

async function rateLimitedFetch(url: string, body: object): Promise<any> {
  const now = Date.now();
  const elapsed = now - lastRequestTime;
  if (elapsed < MIN_DELAY_MS) {
    await sleep(MIN_DELAY_MS - elapsed);
  }
  lastRequestTime = Date.now();

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`API error ${res.status}: ${err}`);
  }

  return res.json();
}

// ─── Generate Image ──────────────────────────────────────────────────
async function generateImage(spec: ImageSpec): Promise<Buffer> {
  console.log(`  🎨 Generating ${spec.id}...`);

  const json = await rateLimitedFetch(API_URL, {
    contents: [{ parts: [{ text: spec.prompt }] }],
    generationConfig: {
      responseModalities: ["TEXT", "IMAGE"],
      temperature: 1.0,
      topP: 0.95,
    },
  });

  const candidate = json.candidates?.[0];
  if (!candidate) {
    throw new Error(`No candidates in response for ${spec.id}: ${JSON.stringify(json).slice(0, 500)}`);
  }

  const imagePart = candidate.content?.parts?.find(
    (p: any) => p.inlineData?.mimeType?.startsWith("image/")
  );

  if (!imagePart) {
    throw new Error(
      `No image in response for ${spec.id}. Parts: ${JSON.stringify(candidate.content?.parts?.map((p: any) => Object.keys(p))).slice(0, 300)}`
    );
  }

  return Buffer.from(imagePart.inlineData.data, "base64");
}

// ─── Score Image ─────────────────────────────────────────────────────
async function scoreImage(
  imageBuffer: Buffer,
  spec: ImageSpec
): Promise<number> {
  console.log(`  📊 Scoring ${spec.id}...`);

  const base64 = imageBuffer.toString("base64");

  const json = await rateLimitedFetch(SCORE_URL, {
    contents: [
      {
        parts: [
          {
            inlineData: {
              mimeType: "image/png",
              data: base64,
            },
          },
          {
            text: `You are an elite commercial photography director who has worked with premium pet brands like Wild One, Fable Pets, and Bark. You have extremely high standards.

Score this image on a scale of 1-10 using these strict criteria. Be harsh — only truly exceptional images deserve 8+:

1. **Visual Quality** (2 pts): Tack-sharp focus, professional lighting with proper shadows, balanced composition following rule of thirds, accurate color reproduction. Deduct for ANY blur, noise, artifacts, or unnatural elements.
2. **Commercial Premium Feel** (2 pts): Would this image look at home on a premium pet brand's website? Does it convey quality, warmth, and trustworthiness? Deduct for anything that looks cheap, stock-photo-like, or generic.
3. **Trustworthiness & Professionalism** (2 pts): Does this inspire immediate consumer confidence? Would a discerning pet owner trust this brand based on this image? Deduct for anything that feels unnatural, AI-generated, or uncanny.
4. **Prompt Adherence** (2 pts): How precisely does it match the requested scene: "${spec.prompt.slice(0, 200)}..."
5. **Brand Cohesion** (2 pts): Teal and aqua tones with warm cream accents. Does it feel warm, inviting, and pet-friendly while remaining premium?

An 8 means "ready for a premium e-commerce launch." A 9 means "exceptional — billboard quality." A 10 means "award-winning."

Respond with ONLY a JSON object: {"score": N, "reason": "brief explanation of strengths and any flaws"}`,
          },
        ],
      },
    ],
    generationConfig: {
      temperature: 0.2,
    },
  });

  const text =
    json.candidates?.[0]?.content?.parts?.find((p: any) => p.text)?.text || "";

  const jsonMatch = text.match(/\{[^}]*"score"\s*:\s*(\d+)[^}]*\}/);
  if (jsonMatch) {
    const score = parseInt(jsonMatch[1], 10);
    const reasonMatch = text.match(/"reason"\s*:\s*"([^"]+)"/);
    console.log(
      `  📊 Score: ${score}/10 — ${reasonMatch?.[1] || "no reason"}`
    );
    return score;
  }

  const numMatch = text.match(/(\d+)\s*\/\s*10/);
  if (numMatch) {
    const score = parseInt(numMatch[1], 10);
    console.log(`  📊 Score: ${score}/10 (parsed from text)`);
    return score;
  }

  console.log(`  ⚠️ Could not parse score, assuming 5. Response: ${text.slice(0, 200)}`);
  return 5;
}

// ─── Convert & Optimize for Web ─────────────────────────────────────
async function convertToWebP(
  input: Buffer,
  outputPath: string,
  spec: ImageSpec
): Promise<void> {
  await sharp(input)
    .resize(spec.targetWidth, spec.targetHeight, { fit: "cover" })
    .webp({ quality: 82, effort: 6 })
    .toFile(outputPath);
  const stats = fs.statSync(outputPath);
  const sizeKB = Math.round(stats.size / 1024);
  console.log(`  💾 Saved ${path.basename(outputPath)} (${sizeKB}KB, ${spec.targetWidth}×${spec.targetHeight})`);
}

// ─── Main ────────────────────────────────────────────────────────────
async function main() {
  console.log("🚀 HappyPaws Image Generator");
  console.log(`📁 Output: ${OUTPUT_DIR}`);
  console.log(`🖼️  Images to generate: ${IMAGE_SPECS.length}`);
  console.log("");

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  let successCount = 0;
  let failCount = 0;

  for (const spec of IMAGE_SPECS) {
    console.log(`\n── ${spec.id} (${spec.aspectRatio}) ──`);

    // Skip if already generated
    const outputPath = path.join(OUTPUT_DIR, spec.filename);
    if (fs.existsSync(outputPath)) {
      console.log(`  ⏭️  Already exists, skipping`);
      successCount++;
      continue;
    }

    let accepted = false;

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      try {
        if (attempt > 1) {
          console.log(`  🔄 Retry ${attempt}/${MAX_RETRIES}`);
        }

        const imageBuffer = await generateImage(spec);
        const score = await scoreImage(imageBuffer, spec);

        if (score >= spec.minScore) {
          await convertToWebP(imageBuffer, outputPath, spec);
          console.log(`  ✅ Accepted (score: ${score}/${spec.minScore} min)`);
          accepted = true;
          successCount++;
          break;
        } else {
          console.log(
            `  ❌ Rejected (score: ${score}, need ≥${spec.minScore})`
          );
        }
      } catch (err) {
        console.error(
          `  💥 Error: ${err instanceof Error ? err.message : err}`
        );
      }
    }

    if (!accepted) {
      console.log(`  ⚠️ Failed after ${MAX_RETRIES} attempts, skipping ${spec.id}`);
      failCount++;
    }
  }

  console.log("\n" + "═".repeat(50));
  console.log(`✅ Generated: ${successCount}/${IMAGE_SPECS.length}`);
  if (failCount > 0) {
    console.log(`❌ Failed: ${failCount}/${IMAGE_SPECS.length}`);
  }
  console.log("═".repeat(50));
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
