import fs from 'fs';
import path from 'path';

const API_KEY = 'YOUR_OPENROUTER_API_KEY';
const MODEL = 'openai/gpt-5-image-mini';
const OUTPUT_DIR = path.resolve('public/images');

const images = [
  {
    name: 'apparatebau.png',
    prompt: 'Professional photograph of a large custom-built plastic apparatus container in a workshop. White PP or PVC tank with welded joints, industrial grade. Clean background, professional lighting. No text.',
  },
  {
    name: 'produkte-overview.png',
    prompt: 'Professional product photograph of various precision-machined white and translucent plastic parts arranged on a clean white surface. CNC milled and turned components, different sizes. Studio lighting, minimalist. No text.',
  },
  {
    name: 'labor-parts.png',
    prompt: 'Professional photograph of white plastic laboratory equipment parts, containment trays, protective covers, and custom fittings in a clean lab setting. Chemical resistant plastics, modern lab aesthetic. No text.',
  },
  {
    name: 'food-grade.png',
    prompt: 'Professional photograph of FDA compliant white plastic conveyor components and food grade container parts. Clean hygienic appearance, stainless steel and white plastic. Food production environment. No text.',
  },
  {
    name: 'materials.png',
    prompt: 'Professional product photograph of various technical plastic material samples and rods arranged neatly. White PTFE, translucent PC, black POM, beige PEEK rods and sheets. Clean white background, studio lighting. No text.',
  },
  {
    name: 'team-workshop.png',
    prompt: 'Professional photograph of a modern Swiss manufacturing workshop from above. CNC machines arranged in rows, bright clean environment, white floors. Birds eye perspective, industrial architecture. No people, no text.',
  },
  {
    name: 'referenz-pharma.png',
    prompt: 'Professional photograph of custom white plastic pharmaceutical apparatus with pipes and valves in a cleanroom. PVDF containers and tubing. Clinical, precise, Swiss quality. No text.',
  },
];

// Filter out already existing
const remaining = images.filter(img => !fs.existsSync(path.join(OUTPUT_DIR, img.name)));
console.log(`Generating ${remaining.length} remaining images...\n`);

async function gen(imageConfig) {
  console.log(`Generating: ${imageConfig.name}...`);
  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [{ role: 'user', content: imageConfig.prompt }],
      }),
    });

    if (!response.ok) {
      console.error(`  HTTP Error ${response.status}`);
      return false;
    }

    const data = await response.json();
    const message = data.choices?.[0]?.message;
    const imageSources = [...(message?.images || []), ...(Array.isArray(message?.content) ? message.content : [])];

    for (const part of imageSources) {
      const url = part?.image_url?.url || part?.url;
      if (!url) continue;
      const m = url.match(/^data:image\/(png|jpeg|webp);base64,(.+)$/s);
      if (m) {
        const buffer = Buffer.from(m[2], 'base64');
        fs.writeFileSync(path.join(OUTPUT_DIR, imageConfig.name), buffer);
        console.log(`  Saved: ${imageConfig.name} (${(buffer.length / 1024).toFixed(0)} KB)`);
        return true;
      }
    }
    console.error(`  No image in response for ${imageConfig.name}`);
    return false;
  } catch (e) {
    console.error(`  Error: ${e.message}`);
    return false;
  }
}

// Generate one at a time to avoid timeout
for (const img of remaining) {
  await gen(img);
  await new Promise(r => setTimeout(r, 2000));
}

console.log('\nDone!');
console.log('Files:', fs.readdirSync(OUTPUT_DIR));
