export const htmlTask3Config = {
  title: "HTML Task 3 – Mini Project",
  description:
    "Build a complete semantic HTML page for a personal portfolio. The structure must be correct, meaningful, and accessible.",

  constraints: [
    "Exactly one <header>",
    "Exactly one <main>",
    "Exactly one <footer>",
    "At least one <section>",
    "At least one <nav>",
    "At least one <ul> with 3 <li>",
    "At least one <a href> starting with http",
    "Use semantic tags only (no div-only layout)"
  ],

  validate(code) {
    const doc = new DOMParser().parseFromString(code, "text/html");

    if (doc.querySelectorAll("header").length !== 1)
      return "Exactly one <header> required";
    if (doc.querySelectorAll("main").length !== 1)
      return "Exactly one <main> required";
    if (doc.querySelectorAll("footer").length !== 1)
      return "Exactly one <footer> required";
    if (!doc.querySelector("section"))
      return "At least one <section> required";
    if (!doc.querySelector("nav"))
      return "<nav> is required";

    const ul = doc.querySelector("ul");
    if (!ul || ul.querySelectorAll("li").length < 3)
      return "<ul> must contain at least 3 <li>";

    const a = doc.querySelector("a[href]");
    if (!a) return "<a href> required";
    if (!a.getAttribute("href").startsWith("http"))
      return "Link must start with http";

    return null;
  }
};