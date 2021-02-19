export const flex = (js, ai) => ({
  display: "flex",
  alignItems: ai || "center",
  justifyContent: js || "center",
});

export function getComputedHeight(element) {
  return window.getComputedStyle(element).height.replace("px", "");
}
