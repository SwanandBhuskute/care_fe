import { useCallback } from "react";

export default function useOmitBy() {
  const omitEmptyFields = useCallback(
    <_T>(obj: Record<string, any>): Record<string, any> => {
      return Object.fromEntries(
        Object.entries(obj).filter(
          ([_key, value]) => value !== "" && value !== undefined,
        ),
      );
    },
    [],
  );

  return omitEmptyFields;
}
