import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export interface Tour {
  slug: string;
  name: string;
  island: string;
  duration: string;
  price_from: number;
  short_description: string;
  body: string;
  included: string[];
  not_included: string[];
  featured: boolean;
  seo_title?: string;
  seo_description?: string;
  tags?: string[];
}

export interface Island {
  slug: string;
  name: string;
  description: string;
  body: string;
  seo_title?: string;
  seo_description?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  body: string;
  seo_title?: string;
  seo_description?: string;
}

function readDir(dir: string): string[] {
  const fullPath = path.join(contentDir, dir);
  if (!fs.existsSync(fullPath)) return [];
  return fs.readdirSync(fullPath).filter((f) => f.endsWith(".md"));
}

function readFile(dir: string, filename: string) {
  const fullPath = path.join(contentDir, dir, filename);
  const raw = fs.readFileSync(fullPath, "utf-8");
  return matter(raw);
}

export function getAllTours(): Tour[] {
  return readDir("tours").map((filename) => {
    const { data, content } = readFile("tours", filename);
    return {
      slug: filename.replace(".md", ""),
      name: data.name || "",
      island: data.island || "",
      duration: data.duration || "",
      price_from: data.price_from || 0,
      short_description: data.short_description || "",
      body: content,
      included: data.included || [],
      not_included: data.not_included || [],
      featured: data.featured || false,
      seo_title: data.seo_title,
      seo_description: data.seo_description,
      tags: data.tags || [],
    };
  });
}

export function getTourBySlug(slug: string): Tour | null {
  const tours = getAllTours();
  return tours.find((t) => t.slug === slug) || null;
}

export function getToursByIsland(island: string): Tour[] {
  return getAllTours().filter((t) => t.island === island);
}

export function getFeaturedTours(): Tour[] {
  return getAllTours().filter((t) => t.featured);
}

export function getAllIslands(): Island[] {
  return readDir("islands").map((filename) => {
    const { data, content } = readFile("islands", filename);
    return {
      slug: filename.replace(".md", ""),
      name: data.name || "",
      description: data.description || "",
      body: content,
      seo_title: data.seo_title,
      seo_description: data.seo_description,
    };
  });
}

export function getIslandBySlug(slug: string): Island | null {
  const islands = getAllIslands();
  return islands.find((i) => i.slug === slug) || null;
}

export function getAllBlogPosts(): BlogPost[] {
  return readDir("blog").map((filename) => {
    const { data, content } = readFile("blog", filename);
    return {
      slug: filename.replace(".md", ""),
      title: data.title || "",
      category: data.category || "",
      excerpt: data.excerpt || "",
      body: content,
      seo_title: data.seo_title,
      seo_description: data.seo_description,
    };
  });
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const posts = getAllBlogPosts();
  return posts.find((p) => p.slug === slug) || null;
}
