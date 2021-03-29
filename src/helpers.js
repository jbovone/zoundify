export const flex = (js, ai, direction) => ({
  display: "flex",
  alignItems: ai || "center",
  justifyContent: js || "center",
  flexDirection: direction ? direction : "row",
});

export function getComputedHeight(element) {
  return window.getComputedStyle(element).height.replace("px", "");
}
