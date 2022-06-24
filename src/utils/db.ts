import { Pool, types } from "pg";
import { HttpError } from "src/errors/http.error";

export const pool = new Pool({
  host: process.env.DB_HOST ?? "localhost",
  port: +(process.env.DB_PORT ?? "5432"),
  database: process.env.DB_NAME ?? "Not found",
  user: process.env.DB_USER ?? "Not found",
  password: process.env.DB_PASSWORD ?? "Not found",
  options: process.env.DB_OPTIONS ?? "Not found",
  ssl: {
    rejectUnauthorized: true,
    cert: process.env.CERT?.replace(/\\n/gm, "\n") ?? "",
  },
  idleTimeoutMillis: 0,
  connectionTimeoutMillis: 0,
});

types.setTypeParser(types.builtins.TIMESTAMPTZ, value => {
  const date = new Date(value);
  return date.toLocaleString("zh-CN");
});

export async function query<T>(sql: string, values: any[] = []) {
  const client = await pool.connect();
  try {
    return client.query<T>(sql, values);
  } catch (e) {
    throw new HttpError(503, "Upstream error");
  } finally {
    client.release();
  }
}
