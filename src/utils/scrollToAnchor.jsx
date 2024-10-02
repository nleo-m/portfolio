export const scrollToAnchor = (anchor) => {
  const anchorElement = document.getElementById(anchor) || "";
  anchorElement.scrollIntoView({ behavior: "smooth" });
};
