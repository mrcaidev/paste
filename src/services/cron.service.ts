import { Paste } from "src/models/paste.model";
import { query } from "src/utils/db";

export const cronService = {
  removeExpired,
};

async function removeExpired() {
  const { rowCount } = await query<Paste>(
    "SELECT * FROM paste WHERE time < NOW() - INTERVAL '30 days'"
  );
  return rowCount;
}
