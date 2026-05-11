import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type CaseStudyFrontmatter = {
  heroTitle: string;
  heroSubtitle: string;
  role: string;
  company: string;
  focus: string;
  timeline: string;
  users: string;
};

export type CaseSection = { heading: string; body: string };

export type CaseStudyDocument = {
  frontmatter: CaseStudyFrontmatter;
  h1: string;
  sections: CaseSection[];
};

function parseSections(markdown: string): { h1: string; sections: CaseSection[] } {
  const lines = markdown.split("\n");
  let h1 = "";
  const sections: CaseSection[] = [];
  let current: { heading: string; body: string[] } | null = null;

  for (const line of lines) {
    if (/^#\s/.test(line) && !/^##\s/.test(line)) {
      h1 = line.replace(/^#\s+/, "").trim();
      continue;
    }
    if (/^##\s/.test(line)) {
      if (current) {
        sections.push({
          heading: current.heading,
          body: current.body.join("\n").trim(),
        });
      }
      current = { heading: line.replace(/^##\s+/, "").trim(), body: [] };
      continue;
    }
    if (current) current.body.push(line);
  }
  if (current) {
    sections.push({
      heading: current.heading,
      body: current.body.join("\n").trim(),
    });
  }
  return { h1, sections };
}

export function loadCaseStudy(): CaseStudyDocument {
  const filePath = path.join(process.cwd(), "content", "mural-case-study.md");
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const { h1, sections } = parseSections(content.trim());
  return {
    frontmatter: data as CaseStudyFrontmatter,
    h1,
    sections,
  };
}

export function getSection(doc: CaseStudyDocument, heading: string): string {
  return doc.sections.find((s) => s.heading === heading)?.body ?? "";
}
