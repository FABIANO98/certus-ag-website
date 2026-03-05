import fs from 'fs';
import path from 'path';

const API_KEY = 'YOUR_OPENROUTER_API_KEY';
const MODEL = 'openai/gpt-5-image-mini';
const OUTPUT_DIR = path.resolve('public/images');

if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const images = [
  {
    name: 'hero-cnc.png',
    prompt: 'Professional photograph of a modern CNC milling machine in a clean, well-lit Swiss industrial workshop. Blue steel machine with white plastic parts being manufactured. Shallow depth of field, cinematic lighting, industrial precision atmosphere. No text, no people visible. 16:9 wide format.',
  },
  {
    name: 'workshop-overview.png',
    prompt: 'Wide-angle professional photograph of a modern Swiss plastic manufacturing workshop interior. Multiple CNC machines in a clean, organized space with bright LED lighting. White and blue color tones. Industrial but clean and modern. No text, no people. 16:9 format.',
  },
  {
    name: 'cnc-fraesen.png',
    prompt: 'Close-up professional photograph of a CNC milling machine cutting a white plastic PTFE part. Metal chips visible, precision machining, shallow depth of field. Cool blue-white lighting. Industrial manufacturing detail shot. No text.',
  },
  {
    name: 'cnc-drehen.png',
    prompt: 'Close-up professional photograph of a CNC lathe turning a translucent plastic part. Precision turning operation, cool lighting, modern machine tool. White and blue color palette. Industrial detail. No text.',
  },
  {
    name: 'schweissen.png',
    prompt: 'Professional photograph of plastic welding process on a white thermoplastic sheet. Hot air welding gun with blue flame, clean workshop environment. Industrial manufacturing, Swiss quality. No text, no faces.',
  },
  {
    name: 'apparatebau.png',
    prompt: 'Professional photograph of a large custom-built plastic apparatus/container in a workshop. White PP or PVC tank with welded joints, industrial grade. Clean background, professional lighting. No text.',
  },
  {
    name: 'produkte-overview.png',
    prompt: 'Professional product photograph of various precision-machined white and translucent plastic parts arranged on a clean white surface. CNC milled and turned components, different sizes and shapes. Studio lighting, minimalist composition. No text.',
  },
  {
    name: 'labor-parts.png',
    prompt: 'Professional photograph of white plastic laboratory equipment parts - containment trays, protective covers, and custom fittings arranged in a clean lab setting. Chemical-resistant plastics, modern laboratory aesthetic. No text.',
  },
  {
    name: 'food-grade.png',
    prompt: 'Professional photograph of FDA-compliant white plastic conveyor components and food-grade container parts. Clean, hygienic appearance, stainless steel and white plastic. Food production environment aesthetic. No text.',
  },
  {
    name: 'materials.png',
    prompt: 'Professional product photograph of various technical plastic material samples and rods arranged neatly. White PTFE, translucent PC, black POM, beige PEEK rods and sheets. Clean white background, studio lighting. Material showcase. No text.',
  },
  {
    name: 'team-workshop.png',
    prompt: 'Professional photograph of a modern Swiss manufacturing workshop from above. CNC machines arranged in rows, bright clean environment, white floors. Bird-eye perspective, industrial architecture. No people, no text.',
  },
  {
    name: 'referenz-pharma.png',
    prompt: 'Professional photograph of custom white plastic pharmaceutical apparatus with pipes and valves in a cleanroom environment. PVDF containers and tubing system. Clinical, precise, Swiss quality manufacturing. No text.',
  },
];

async function generateImage(imageConfig) {
  console.log(`Generating: ${imageConfig.name}...`);

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        {
          role: 'user',
          content: imageConfig.prompt,
        },
      ],
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    console.error(`Error for ${imageConfig.name}: ${response.status} ${err}`);
    return false;
  }

  const data = await response.json();
  const message = data.choices?.[0]?.message;

  // Try multiple locations for image data
  const imageSources = [
    ...(message?.images || []),
    ...(Array.isArray(message?.content) ? message.content : []),
  ];

  for (const part of imageSources) {
    const url = part?.image_url?.url || part?.url;
    if (!url) continue;
    const base64Match = url.match(/^data:image\/(png|jpeg|webp);base64,(.+)$/s);
    if (base64Match) {
      const buffer = Buffer.from(base64Match[2], 'base64');
      const ext = base64Match[1] === 'jpeg' ? 'jpg' : base64Match[1];
      const filename = imageConfig.name.replace(/\.\w+$/, `.${ext}`);
      fs.writeFileSync(path.join(OUTPUT_DIR, filename), buffer);
      console.log(`  Saved: ${filename} (${(buffer.length / 1024).toFixed(0)} KB)`);
      return true;
    }
  }

  // Fallback: check content string for base64
  if (typeof message?.content === 'string') {
    const base64Match = message.content.match(/data:image\/(png|jpeg|webp);base64,([A-Za-z0-9+/=]+)/);
    if (base64Match) {
      const buffer = Buffer.from(base64Match[2], 'base64');
      const ext = base64Match[1] === 'jpeg' ? 'jpg' : base64Match[1];
      const filename = imageConfig.name.replace(/\.\w+$/, `.${ext}`);
      fs.writeFileSync(path.join(OUTPUT_DIR, filename), buffer);
      console.log(`  Saved: ${filename} (${(buffer.length / 1024).toFixed(0)} KB)`);
      return true;
    }
  }

  console.error(`  No image found for ${imageConfig.name}`);
  return false;
}

async function main() {
  console.log(`Generating ${images.length} images using ${MODEL}...`);
  console.log(`Output directory: ${OUTPUT_DIR}\n`);

  let success = 0;
  // Generate 3 at a time to be respectful
  for (let i = 0; i < images.length; i += 3) {
    const batch = images.slice(i, i + 3);
    const results = await Promise.all(batch.map(generateImage));
    success += results.filter(Boolean).length;
    // Small delay between batches
    if (i + 3 < images.length) await new Promise(r => setTimeout(r, 1000));
  }

  console.log(`\nDone! ${success}/${images.length} images generated successfully.`);
}

main().catch(console.error);
