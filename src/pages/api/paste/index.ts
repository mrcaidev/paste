import { NextApiRequest, NextApiResponse } from "next";
import { HttpError } from "src/errors/http.error";
import { PastePostBody, PastePostResponse } from "src/interfaces/api.interface";
import { pasteService } from "src/services/paste.service";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PastePostResponse>
) {
  try {
    switch (req.method) {
      case "POST": {
        const { content }: PastePostBody = req.body;
        const id = await pasteService.create(content);
        res.status(201).json({ message: "", data: { url: "/" + id } });
        return;
      }

      default: {
        res.setHeader("Allow", ["POST"]);
        res.status(405).json({ message: "Method not allowed", data: null });
        return;
      }
    }
  } catch (e) {
    if (e instanceof HttpError) {
      res.status(e.code).json({ message: e.message, data: null });
      return;
    }
    console.error(e);
    res.status(500).json({ message: "Please try again later", data: null });
    return;
  }
}
