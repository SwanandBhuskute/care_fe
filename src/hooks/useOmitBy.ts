import { useCallback } from "react";

export default function useOmitBy<T extends Record<string, unknown>>(
  predicate: (value: unknown) => boolean = (value) =>
    value !== "" && value !== undefined && value !== null,
) {
  return useCallback(
    (obj: T): Partial<T> => {
      return Object.fromEntries(
        Object.entries(obj).filter(([_, value]) => predicate(value)),
      ) as Partial<T>;
    },
    [predicate],
  );
}
