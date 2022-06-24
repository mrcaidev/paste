import { Paste } from "src/models/paste.model";

export interface Response {
  message: string;
  data: any;
}

export interface PastePostBody {
  content: string;
}

export interface PastePostResponse extends Response {
  data: { url: string } | null;
}

export interface PasteGetIdResponse extends Response {
  data: Paste | null;
}
