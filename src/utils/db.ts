import { readFileSync } from "fs";
import { Pool } from "pg";
import { HttpError } from "src/errors/http.error";

const pool = new Pool({
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
});

export function query<T>(text: string, values: any[] = []) {
  try {
    return pool.query<T>(text, values);
  } catch (e) {
    throw new HttpError(503, "Service Unavailable");
  }
}
