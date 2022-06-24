import { readFileSync } from "fs";
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
    cert: readFileSync("root.crt").toString(),
  },
  idleTimeoutMillis: 0,
  connectionTimeoutMillis: 0,
});

types.setTypeParser(types.builtins.TIMESTAMPTZ, value => {
  const date = new Date(value);
  return date.toLocaleString("zh-CN");
});

export function query<T>(sql: string, values: any[] = []) {
  try {
    return pool.query<T>(sql, values);
  } catch (e) {
    throw new HttpError(503, "Upstream error");
  }
}
