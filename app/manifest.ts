import type { MetadataRoute } from "next";

import { doctorProfile } from "@/config/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${doctorProfile.shortName} — Pé e Tornozelo`,
    short_name: "Dr. César Benetton",
    description: doctorProfile.description,
    start_url: "/",
    display: "standalone",
    background_color: "#E3E6E0",
    theme_color: "#021533",
    lang: "pt-BR",
    icons: [
      {
        src: "/favicon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
