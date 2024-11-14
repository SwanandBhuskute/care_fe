// Converts a string to camelCase format, first word - lowercase and each subsequent word - uppercase letter, with no spaces.
export const camelCase = (str: string) => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) =>
      index === 0 ? match.toLowerCase() : match.toUpperCase(),
    )
    .replace(/\s+/g, "")
    .replace(/([A-Z])/g, (match) => match.toLowerCase());
};

// Capitalize the first letter of each word in a string
export const startCase = (str: string) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

// Capitalize the first letter of a string
export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
