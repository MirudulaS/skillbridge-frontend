export const cssTask3Question = {
  description:
    "Build a mini portfolio layout using HTML and CSS. The page must be styled properly and responsive.",

  constraints: [
    "HTML must contain header, main, footer",
    "CSS must style header background",
    "Use at least one flexbox layout",
    "CSS must not be empty"
  ],

  validate({ html, css }) {
    if (!html || !css) return "HTML and CSS are required";

    const doc = new DOMParser().parseFromString(html, "text/html");

    if (!doc.querySelector("header")) return "<header> is required";
    if (!doc.querySelector("main")) return "<main> is required";
    if (!doc.querySelector("footer")) return "<footer> is required";

    if (!/display\s*:\s*flex/i.test(css))
      return "Use at least one flexbox layout";

    return null;
  }
};