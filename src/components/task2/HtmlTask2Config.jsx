export const htmlTask2Questions = [
  {
    description:
      "Create a valid HTML structure with one heading, one paragraph, a list, and a link.",
    constraints: [
      "Exactly one <h1>",
      "Exactly one <p>",
      "<ul> with at least 3 <li>",
      "Exactly one <a href>"
    ],
    validate(code) {
      const doc = new DOMParser().parseFromString(code, "text/html");

      if (doc.querySelectorAll("h1").length !== 1)
        return "Exactly one <h1> required";
      if (doc.querySelectorAll("p").length !== 1)
        return "Exactly one <p> required";
      const ul = doc.querySelector("ul");
      if (!ul || ul.querySelectorAll("li").length < 3)
        return "<ul> must contain at least 3 <li>";
      if (doc.querySelectorAll("a[href]").length !== 1)
        return "Exactly one <a href> required";

      return null;
    }
  },
  {
    description: "Enhance semantics using strong and emphasis tags.",
    constraints: ["At least one <strong>", "At least one <em>"],
    validate(code) {
      const doc = new DOMParser().parseFromString(code, "text/html");
      if (!doc.querySelector("strong")) return "<strong> required";
      if (!doc.querySelector("em")) return "<em> required";
      return null;
    }
  },
  {
    description: "Ensure the anchor tag links to a valid external URL.",
    constraints: ["<a href> must start with http"],
    validate(code) {
      const doc = new DOMParser().parseFromString(code, "text/html");
      const a = doc.querySelector("a[href]");
      if (!a) return "<a href> required";
      if (!a.getAttribute("href").startsWith("http"))
        return "href must start with http";
      return null;
    }
  }
];