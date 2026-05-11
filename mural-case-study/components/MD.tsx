import { marked } from "marked";

marked.setOptions({ gfm: true, breaks: true });

type MDProps = {
  markdown: string;
  className?: string;
};

export function MD({ markdown, className }: MDProps) {
  if (!markdown.trim()) return null;
  const html = marked.parse(markdown) as string;
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
