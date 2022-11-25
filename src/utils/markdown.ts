import { marked } from "marked";

const renderer = new marked.Renderer();
renderer.link = (href, title, text) => {
  return `<a href="${href}" title="${title}" target="_blank" rel="noreferrer">${text}</a>`;
};

export function parseMarkdown(text: string) {
  return marked(text);
}
