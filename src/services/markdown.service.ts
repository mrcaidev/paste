import { HttpError } from "src/errors/http.error";
import { Markdown } from "src/models/markdown.model";
import { query } from "src/utils/db";
import { isUUID } from "src/utils/validator";

export const markdownService = {
  findById,
  create,
};

async function findById(id: string) {
  if (!isUUID(id)) {
    throw new HttpError(400, "Wrong UUID format");
  }

  const { rows, rowCount } = await query<Markdown>(
    "SELECT * FROM markdown WHERE id = $1",
    [id]
  );

  if (rowCount === 0) {
    throw new HttpError(404, "Document not found");
  }

  return rows[0];
}

async function create(markdown: string) {
  if (markdown.length === 0) {
    throw new HttpError(400, "Nothing to paste");
  }

  const { rows, rowCount } = await query<{ id: string }>(
    "INSERT INTO markdown(content) VALUES($1) RETURNING id",
    [markdown]
  );

  if (rowCount !== 1) {
    throw new HttpError(503, "Paste failed");
  }

  return rows[0].id;
}
