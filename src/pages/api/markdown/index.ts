import { NextApiRequest, NextApiResponse } from "next";
import { HttpError } from "src/errors/http.error";
import { MarkdownPostResponse } from "src/interfaces/markdown.interface";
import { markdownService } from "src/services/markdown.service";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MarkdownPostResponse>
) {
  try {
    switch (req.method) {
      case "POST":
        const { content } = req.body;
        const markdown = await markdownService.create(content);
        res.status(201).json({ message: "", data: markdown });
        return;

      default:
        res.setHeader("Allow", ["POST"]);
        res.status(405).json({ message: "Method Not Allowed", data: null });
        return;
    }
  } catch (e) {
    if (e instanceof HttpError) {
      res.status(e.code).json({ message: e.message, data: null });
      return;
    }
    res.status(500).json({ message: String(e), data: null });
    return;
  }
}
