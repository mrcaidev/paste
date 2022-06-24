import { NextApiRequest, NextApiResponse } from "next";
import { HttpError } from "src/errors/http.error";
import { PasteGetIdResponse } from "src/interfaces/api.interface";
import { pasteService } from "src/services/paste.service";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PasteGetIdResponse>
) {
  try {
    switch (req.method) {
      case "GET": {
        const { id } = req.query as { id: string };
        const data = await pasteService.findById(id);
        res.status(200).json({ message: "", data });
        return;
      }

      default: {
        res.setHeader("Allow", ["GET"]);
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
    res.status(500).json({ message: "Unknown error", data: null });
    return;
  }
}
