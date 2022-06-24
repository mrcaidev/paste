import { NextApiRequest, NextApiResponse } from "next";
import { HttpError } from "src/errors/http.error";
import { CronResponse } from "src/interfaces/api.interface";
import { cronService } from "src/services/cron.service";
import { validateCronToken } from "src/utils/validator";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CronResponse>
) {
  try {
    validateCronToken(req.headers);

    switch (req.method) {
      case "POST": {
        const expired = await cronService.removeExpired();
        res.status(200).json({
          message: "",
          data: { expired },
        });
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
