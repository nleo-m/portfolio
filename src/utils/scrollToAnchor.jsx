export const scrollToAnchor = (anchor) => {
  const anchorElement = document.getElementById(anchor);
  if (anchorElement) anchorElement?.scrollIntoView({ behavior: "smooth" });
};
