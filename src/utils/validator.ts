import { IncomingHttpHeaders } from "http";
import { HttpError } from "src/errors/http.error";

export function isUUID(str: string) {
  const regex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
  return regex.test(str);
}

export function validateCronToken(headers: IncomingHttpHeaders) {
  const cronToken = process.env.CRON_TOKEN ?? "";

  const { authorization } = headers;
  if (!authorization) {
    throw new HttpError(401, "No authorization header detected");
  }

  const regexResult = authorization.match(/^Bearer\s(.*)$/);
  if (!regexResult) {
    throw new HttpError(401, "Unrecognized token type");
  }

  if (regexResult[1] !== cronToken) {
    throw new HttpError(403, "Incorrect token");
  }
}
