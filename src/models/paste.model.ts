export interface Paste {
  id: string;
  time: string;
  content: string;
}

export const defaultPaste: Paste = { id: "", time: "", content: "" };
