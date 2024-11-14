// Converts a string to camelCase format, first word - lowercase and each subsequent word - uppercase letter, with no spaces.
export const camelCase = (str: string) => {
  if (!str) return "";
  return str
    .trim()
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
    .replace(/^[A-Z]/, (c) => c.toLowerCase());
};

// Capitalize the first letter of each word in a string, handling edge cases
export const startCase = (str: string): string => {
  if (!str) return "";

  return str
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : ""))
    .join(" ");
};

// Capitalize the first letter of a string
export const capitalize = (str: string) => {
  if (!str) return "";
  if (str.length === 1) return str.toUpperCase();
  return str.charAt(0).toUpperCase() + str.slice(1);
};
