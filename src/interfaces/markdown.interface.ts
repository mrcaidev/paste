import { Markdown } from "src/models/markdown.model";
import { Response } from "./response.interface";

export interface MarkdownPostResponse extends Response {
  data: string | null;
}

export interface MarkdownGetIdResponse extends Response {
  data: Markdown | null;
}
