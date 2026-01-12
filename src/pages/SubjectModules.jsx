import { useState } from "react";
import "../styles/subjectModules.css";

const modules = [
  { title: "Introduction", status: "completed" },
  { title: "Tags & Elements", status: "in-progress" },
  { title: "Forms", status: "locked" }
];

function SubjectModules() {
  const [active, setActive] = useState(modules[1]);

  return (
    <div className="subject-root">
      <aside className="module-sidebar">
        <h2>HTML Modules</h2>
        {modules.map(m => (
          <div
            key={m.title}
            className={`module-item ${m.status}`}
            onClick={() => m.status !== "locked" && setActive(m)}
          >
            {m.title}
          </div>
        ))}
      </aside>

      <main className="module-main">
        <div className="module-card">
          <h1>{active.title}</h1>
          <p>Hands-on learning content goes here.</p>
        </div>
      </main>
    </div>
  );
}

export default SubjectModules;