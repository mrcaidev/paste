import { marked } from "marked";

marked.setOptions({});

export function parseMarkdown(markdown: string) {
  return marked.parse(markdown);
}
