export const truncate = (text = "", max = 150) => {
  if (!text) return "";
  return text.length > max ? text.slice(0, max) + "..." : text;
};
