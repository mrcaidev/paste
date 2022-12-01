import { customAlphabet } from "nanoid/async";

const nanoid = customAlphabet(
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  10
);

export async function createId() {
  return await nanoid();
}
