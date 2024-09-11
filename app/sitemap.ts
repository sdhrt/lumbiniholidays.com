import { siteConfig } from "@/config/site";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${siteConfig.url}/nepal/trekking`,
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/nepal/tour`,
      priority: 0.8,
    },
    ...nepalTours.map((tours) => ({
      url: `${siteConfig.url}/nepal/tours/${tours}`,
      lastModified: new Date(),
      priority: 0.5,
    })),
    ...nepalTrekking.map((trek) => ({
      url: `${siteConfig.url}/nepal/trekking/${trek}`,
      lastModified: new Date(),
      priority: 0.5,
    })),
  ];
}

const nepalTours = ["", "chitlang", "kalinchowk", "muktinath", "nepal"];
const nepalTrekking = [
  "",
  "annapurna_circuit",
  "everest_base_camp",
  "gokyo_chola_pass",
  "gokyo_everest_base_camp",
  "helembu",
  "jiri_everest_base_camp",
  "langtang_gosainkunda",
  "langtang_valley",
  "tashi_lapcha_pass",
];
