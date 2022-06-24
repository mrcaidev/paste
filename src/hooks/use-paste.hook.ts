import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PasteGetIdResponse } from "src/interfaces/api.interface";
import { defaultPaste, Paste } from "src/models/paste.model";

export function usePaste() {
  const {
    query: { id },
  } = useRouter();

  const [paste, setPaste] = useState<Paste>(defaultPaste);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // This `useEffect` will be invoked twice:
  //
  // 1. Invoked when `usePaste` was invoked for the first time,
  //    but at that time `id` has not yet been parsed by the router,
  //    so `id` equals undefined.
  //    `useEffect` will immediately return with no side effects.
  //
  // 2. After the router successfully parses the path,
  //    id now has a UUID value, which invokes `useEffect` again.
  //    This time, it can fetch API endpoint and retrieve document.
  //
  // After that, `useEffect` will never be invoked again,
  // since `id` will always remain the same.
  useEffect(() => {
    (async () => {
      // When id has not been parsed.
      if (!id || typeof id !== "string") {
        return;
      }

      // Reset states.
      setPaste(defaultPaste);
      setError("");
      setLoading(true);

      // Fetch document.
      const res = await fetch(`/api/paste/${id}`);
      const { message, data }: PasteGetIdResponse = await res.json();
      setLoading(false);

      // On error.
      if (!res.ok || !data) {
        setError(message);
        return;
      }

      // On success.
      setPaste(data);
    })();
  }, [id]);

  return { paste, error, loading };
}
