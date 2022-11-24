import { sanitize } from "dompurify";
import { marked } from "marked";

export function parseMarkdown(text: string) {
  const html = marked(text);
  const sanitizedHtml = sanitize(html);
  return sanitizedHtml;
}
