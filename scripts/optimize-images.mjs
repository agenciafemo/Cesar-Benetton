import { mkdir, readdir } from "node:fs/promises";
import { extname, join, parse } from "node:path";

import sharp from "sharp";

const root = process.cwd();
const treatmentsDirectory = join(root, "public", "treatments");

await mkdir(treatmentsDirectory, { recursive: true });

const treatmentFiles = (await readdir(treatmentsDirectory)).filter((file) =>
  [".png", ".jpg", ".jpeg"].includes(extname(file).toLowerCase()),
);

await Promise.all(
  treatmentFiles.map(async (file) => {
    const source = join(treatmentsDirectory, file);
    const destination = join(treatmentsDirectory, `${parse(file).name}.webp`);

    await sharp(source)
      .rotate()
      .resize({ width: 1200, height: 900, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 80, effort: 5 })
      .toFile(destination);
  }),
);

await sharp(join(root, "OSTEO.jpeg"))
  .rotate()
  .resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true })
  .webp({ quality: 84, effort: 5 })
  .toFile(join(root, "public", "osteo-fachada.webp"));

const socialCard = Buffer.from(`
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="brand" x1="0" y1="0" x2="1" y2="1">
        <stop stop-color="#6E90AD"/>
        <stop offset="1" stop-color="#335686"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="#E3E6E0"/>
    <rect width="840" height="630" fill="#021533"/>
    <rect x="840" width="360" height="630" fill="url(#brand)"/>
    <text x="68" y="88" fill="#6E90AD" font-family="Arial, sans-serif" font-size="22" font-weight="700" letter-spacing="5">ORTOPEDIA · PÉ E TORNOZELO</text>
    <text x="68" y="290" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="72" font-weight="700">Dr. César</text>
    <text x="68" y="372" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="72" font-weight="700">Benetton</text>
    <text x="68" y="425" fill="#B6C3CE" font-family="Arial, sans-serif" font-size="25">Criciúma — Santa Catarina</text>
    <text x="68" y="566" fill="#8B98A9" font-family="Arial, sans-serif" font-size="19">CRM-SC 14.827 · RQE 11.012</text>
    <circle cx="1020" cy="315" r="116" fill="none" stroke="#FFFFFF" stroke-opacity=".42" stroke-width="3"/>
    <text x="1020" y="343" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="78" font-weight="300" text-anchor="middle">CB</text>
  </svg>
`);

await Promise.all([
  sharp(socialCard).png({ compressionLevel: 9 }).toFile(join(root, "app", "opengraph-image.png")),
  sharp(socialCard).png({ compressionLevel: 9 }).toFile(join(root, "app", "twitter-image.png")),
]);

console.log(
  `Imagens otimizadas: ${treatmentFiles.length} tratamentos, fachada da Osteo e cards sociais.`,
);
