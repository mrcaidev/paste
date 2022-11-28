import type { NextApiRequest, NextApiResponse } from "next";
import { createId } from "src/utils/nanoid";
import { supabase } from "src/utils/supabase";

interface ReqBody {
  title?: string;
  content?: string;
  password?: string;
}

interface ResBody {
  message?: string;
  url?: string;
}

async function handler(req: NextApiRequest, res: NextApiResponse<ResBody>) {
  try {
    if (req.method !== "POST") {
      res
        .status(405)
        .setHeader("Allow", ["POST"])
        .send({ message: "Method not allowed" });
      return;
    }

    const { title = "", content = "", password = "" } = req.body as ReqBody;

    if (content.length === 0) {
      res.status(422).json({ message: "Content should not be empty" });
      return;
    }
    if (password.length > 20) {
      res
        .status(422)
        .send({ message: "Password should not be longer than 20 characters" });
      return;
    }

    const id = await createId();

    const { error } = await supabase
      .from("default")
      .insert({ id, title, content, password });
    if (error) {
      console.error(error.message);
      res.status(500).json({ message: error.message });
      return;
    }

    res.status(201).json({ url: buildUrl(id, password) });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Unknown server error" });
    }
  }
}

function buildUrl(id: string, password: string) {
  return password.length === 0 ? `/${id}` : `/${id}?p=${password}`;
}

export default handler;
