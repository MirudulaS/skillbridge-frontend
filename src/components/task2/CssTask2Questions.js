// src/components/task2/CssTask2Questions.js
export const cssTask2Questions = [
  {
    description:
      "Style a paragraph using CSS. The text color must be blue and font size must be 18px.",
    constraints: [
      "HTML must contain one <p>",
      "CSS must set color: blue",
      "CSS must set font-size: 18px"
    ],
    validate(code) {
      const doc = new DOMParser().parseFromString(code, "text/html");

      if (doc.querySelectorAll("p").length !== 1)
        return "Exactly one <p> required";

      const style = doc.querySelector("style");
      if (!style) return "<style> tag required";

      const css = style.textContent;

      if (!/color\s*:\s*blue/i.test(css))
        return "CSS must contain color: blue";

      if (!/font-size\s*:\s*18px/i.test(css))
        return "CSS must contain font-size: 18px";

      return null;
    }
  },
  {
    description: "Apply padding and background color to a container using CSS.",
    constraints: [
      "HTML must contain a class selector",
      "CSS must define padding",
      "CSS must define background-color"
    ],
    validate(code) {
      const doc = new DOMParser().parseFromString(code, "text/html");
      const style = doc.querySelector("style");
      if (!style) return "<style> tag required";

      const css = style.textContent;

      if (!doc.querySelector("[class]"))
        return "HTML must use a class selector";

      if (!/padding\s*:/i.test(css))
        return "CSS must define padding";

      if (!/background-color\s*:/i.test(css))
        return "CSS must define background-color";

      return null;
    }
  },
  {
    description: "Use flexbox to align items horizontally.",
    constraints: [
      "CSS must use display: flex",
      "CSS must use justify-content"
    ],
    validate(code) {
      const doc = new DOMParser().parseFromString(code, "text/html");
      const style = doc.querySelector("style");
      if (!style) return "<style> tag required";

      const css = style.textContent;

      if (!/display\s*:\s*flex/i.test(css))
        return "CSS must include display: flex";

      if (!/justify-content\s*:/i.test(css))
        return "CSS must include justify-content";

      return null;
    }
  }
];