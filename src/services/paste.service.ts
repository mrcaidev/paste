import { HttpError } from "src/errors/http.error";
import { Paste } from "src/models/paste.model";
import { query } from "src/utils/db";
import { isUUID } from "src/utils/validator";

export const pasteService = {
  findById,
  create,
};

async function findById(id: string) {
  // Validation.
  if (!isUUID(id)) {
    throw new HttpError(400, "Wrong UUID format");
  }

  // Data access.
  const { rows, rowCount } = await query<Paste>(
    "SELECT * FROM paste WHERE id = $1",
    [id]
  );
  if (rowCount === 0) {
    throw new HttpError(404, "Document not found");
  }
  return rows[0];
}

async function create(content: string) {
  // Validation.
  if (content.length === 0) {
    throw new HttpError(400, "Nothing to paste");
  }

  // Data access.
  const { rows } = await query<{ id: string }>(
    "INSERT INTO paste(content) VALUES($1) RETURNING id",
    [content]
  );
  return rows[0].id;
}
