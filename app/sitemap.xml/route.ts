import { readdirSync } from "node:fs";
import { join } from "node:path";

import { siteUrl } from "@/config/seo";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const treatmentImages = readdirSync(
    join(process.cwd(), "public", "treatments"),
  )
    .filter((file) => file.endsWith(".webp"))
    .sort()
    .map((file) => `${siteUrl}/treatments/${file}`);

  const images = [
    `${siteUrl}/cesar-hero.png`,
    `${siteUrl}/cesar-benetton-sobre.jpg`,
    `${siteUrl}/osteo-fachada.webp`,
    ...treatmentImages,
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${escapeXml(siteUrl)}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
${images.map((image) => `    <image:image><image:loc>${escapeXml(image)}</image:loc></image:image>`).join("\n")}
  </url>
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
