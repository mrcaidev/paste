import hljs from "highlight.js";
import { marked } from "marked";

marked.setOptions({
  highlight: (code, lang) => {
    const language = hljs.getLanguage(lang)?.name ?? "plaintext";
    return hljs.highlight(code, { language }).value;
  },
});

export function parseMarkdown(markdown: string) {
  return marked.parse(markdown);
}
