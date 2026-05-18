import { MetadataRoute } from "next";
import { getAllTours, getAllIslands, getAllBlogPosts } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://tour-phil.com";

  const tours = getAllTours().map((t) => ({
    url: `${base}/tours/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const islands = getAllIslands().map((i) => ({
    url: `${base}/islands/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blog = getAllBlogPosts().map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/tours`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/contacts`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    ...tours,
    ...islands,
    ...blog,
  ];
}
