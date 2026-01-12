import { useState } from "react";
import "../styles/dashboard.css";
import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar.jsx";

export default function Dashboard() {
  const [activeModule, setActiveModule] = useState("Frontend");
  const [activeSub, setActiveSub] = useState(null);
  const navigate = useNavigate();

  // 🔴 ONLY THIS PART IS UPDATED
  const modules = [
    {
      name: "Frontend",
      progress: 0,
      subs: [
        {
          name: "HTML",
          progress: 0,
          tasks: [
            { name: "Task 1", route: "/hands-on/html/task-1" },
            { name: "Task 2", route: "/hands-on/html/task-2" },
            { name: "Task 3", route: "/hands-on/html/task-3" }
          ]
        },
        {
          name: "CSS",
          progress: 0,
          tasks: [
            { name: "Task 1", route: "/hands-on/css/task-1" },
            { name: "Task 2", route: "/hands-on/css/task-2" },
            { name: "Task 3", route: "/hands-on/css/task-3" }
          ]
        },
        {
          name: "JavaScript",
          progress: 0,
          tasks: [
            { name: "Task 1", route: "/hands-on/js/task-1" },
            { name: "Task 2", route: "/hands-on/js/task-2" },
            { name: "Task 3", route: "/hands-on/js/task-3" }
          ]
        }
      ]
    },

    {
      name: "VLSI",
      progress: 0,
      subs: [
        {
          name: "Digital Logic",
          progress: 0,
          tasks: [
            { name: "Task 1", route: "/hands-on/vlsi/task-1" },
            { name: "Task 2", route: "/hands-on/vlsi/task-2" },
            { name: "Task 3", route: "/hands-on/vlsi/task-3" }
          ]
        }
      ]
    },

    {
      name: "MySQL",
      progress: 0,
      subs: [
        {
          name: "SQL Basics",
          progress: 0,
          tasks: [
            { name: "Task 1", route: "/hands-on/mysql/task-1" },
            { name: "Task 2", route: "/hands-on/mysql/task-2" },
            { name: "Task 3", route: "/hands-on/mysql/task-3" }
          ]
        }
      ]
    },

    {
      name: "Machine Learning",
      progress: 0,
      subs: [
        {
          name: "ML Foundations",
          progress: 0,
          tasks: [
            { name: "Task 1", route: "/hands-on/ml/task-1" },
            { name: "Task 2", route: "/hands-on/ml/task-2" },
            { name: "Task 3", route: "/hands-on/ml/task-3" }
          ]
        }
      ]
    }
  ];

  const selected = modules.find(m => m.name === activeModule);

  const isSubmoduleCompleted = (moduleName, subName) => {
    const baseKey = `${moduleName}-${subName}`
      .toLowerCase()
      .replace(/\s+/g, "");

    return (
      localStorage.getItem(`${baseKey}-task-1`) === "true" &&
      localStorage.getItem(`${baseKey}-task-2`) === "true" &&
      localStorage.getItem(`${baseKey}-task-3`) === "true"
    );
  };

  const getModuleProgress = module => {
    const total = module.subs.length;
    const completed = module.subs.filter(sub =>
      isSubmoduleCompleted(module.name, sub.name)
    ).length;

    return Math.round((completed / total) * 100);
  };

  return (
    <>
      {/* <Navbar /> */}

      <div className="dashboard-root">
        <div className="dashboard-body">
          <aside className="modules-column">
            {modules.map(m => {
              const progress = getModuleProgress(m);

              return (
                <div
                  key={m.name}
                  className={`module-row ${
                    activeModule === m.name ? "active" : ""
                  }`}
                  onClick={() => {
                    setActiveModule(m.name);
                    setActiveSub(null);
                  }}
                >
                  <span>{m.name}</span>
                  <div
                    className="progress-circle"
                    style={{
                      "--value": progress,
                      borderColor: progress === 100 ? "#22c55e" : undefined
                    }}
                  >
                    {progress === 100 ? <span>✔</span> : <span>{progress}%</span>}
                  </div>
                </div>
              );
            })}
          </aside>

          <section className="details-column">
            <h2>{selected.name}</h2>

            <div className="submodule-list">
              {selected.subs.map(sub => {
                const completed = isSubmoduleCompleted(activeModule, sub.name);

                return (
                  <div key={sub.name} className="submodule-wrapper">
                    <div
                      className={`submodule-preview ${
                        activeSub === sub.name ? "hidden" : ""
                      }`}
                      onClick={() =>
                        setActiveSub(activeSub === sub.name ? null : sub.name)
                      }
                    >
                      <span>{sub.name}</span>
                      <div
                        className="progress-circle"
                        style={{
                          "--value": completed ? 100 : 0,
                          borderColor: completed ? "#22c55e" : undefined
                        }}
                      >
                        {completed && <span>✔</span>}
                      </div>
                    </div>

                    {activeSub === sub.name && (
                      <div className="submodule-expanded animate-in">
                        <div
                          className="submodule-strip"
                          onClick={() =>
                            setActiveSub(
                              activeSub === sub.name ? null : sub.name
                            )
                          }
                        >
                          {sub.name}
                        </div>

                        <div className="task-stack horizontal">
                          {sub.tasks.map(task => {
                            const baseKey = `${activeModule}-${sub.name}`
                              .toLowerCase()
                              .replace(/\s+/g, "");

                            const taskNumber = task.name.split(" ")[1];
                            const done =
                              localStorage.getItem(
                                `${baseKey}-task-${taskNumber}`
                              ) === "true";

                            return (
                              <div
                                key={task.name}
                                className="task-row clickable"
                                onClick={() => {
                                  if (task.route) navigate(task.route);
                                }}
                              >
                                <span>{task.name}</span>
                                {done ? (
                                  <div className="task-done">✔</div>
                                ) : (
                                  <div className="task-pending" />
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}