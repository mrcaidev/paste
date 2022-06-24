import { NextApiRequest, NextApiResponse } from "next";
import { HttpError } from "src/errors/http.error";
import { MarkdownGetIdResponse } from "src/interfaces/markdown.interface";
import { markdownService } from "src/services/markdown.service";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MarkdownGetIdResponse>
) {
  try {
    switch (req.method) {
      case "GET":
        const { id } = req.query;
        const markdown = await markdownService.findById(id as string);
        res.status(200).json({ message: "", data: markdown });
        return;

      default:
        res.setHeader("Allow", ["GET"]);
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
