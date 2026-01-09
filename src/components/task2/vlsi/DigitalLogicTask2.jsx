import { useState } from "react";
import "../../../styles/htmlTask2.css";
import { useNavigate } from "react-router-dom";

const GATES = ["AND", "OR", "NOT", "NAND", "NOR"];

const QUESTIONS = [
  {
    table: `
A B | Y
0 0 | 1
0 1 | 1
1 0 | 1
1 1 | 0
`,
    solution: ["AND", "NOT"]
  },
  {
    table: `
A B | Y
0 0 | 0
0 1 | 1
1 0 | 1
1 1 | 1
`,
    solution: ["OR"]
  },
  {
    table: `
A | Y
0 | 1
1 | 0
`,
    solution: ["NOT"]
  }
];

export default function DigitalLogicTask2() {
  const navigate = useNavigate();

  const [currentQ, setCurrentQ] = useState(0);
  const [slots, setSlots] = useState([null, null]);
  const [error, setError] = useState("");
  const [animate, setAnimate] = useState(false); // ✅ animation state

  /* ---------------- Drag Logic ---------------- */

  const onDragStart = (e, gate) => {
    e.dataTransfer.setData("gate", gate);
  };

  const onDrop = (e, index) => {
    const gate = e.dataTransfer.getData("gate");
    if (!gate) return;

    const updated = [...slots];
    updated[index] = gate;
    setSlots(updated);
  };

  const allowDrop = e => e.preventDefault();

  const clearSlot = index => {
    const updated = [...slots];
    updated[index] = null;
    setSlots(updated);
  };

  /* ---------------- Validation + Animation ---------------- */

  const handleNext = () => {
    const expected = QUESTIONS[currentQ].solution;
    const used = slots.filter(Boolean);

    if (used.length !== expected.length) {
      setError("Incorrect number of gates used");
      return;
    }

    for (let i = 0; i < expected.length; i++) {
      if (used[i] !== expected[i]) {
        setError("Incorrect gate combination or order");
        return;
      }
    }

    setError("");
    setAnimate(true); // 🔥 trigger animation

    setTimeout(() => {
      setAnimate(false);
      setSlots([null, null]);

      if (currentQ < QUESTIONS.length - 1) {
        setCurrentQ(q => q + 1);
      } else {
        localStorage.setItem("vlsi-digitallogic-task-2", "true");
        navigate(-1);
      }
    }, 1600); // ⏱ matches slideBlue animation duration
  };

  /* ---------------- Render ---------------- */

  return (
    <div className="task2-page">
      <div className="task2-sidebar">
        {QUESTIONS.map((_, i) => (
          <div
            key={i}
            className={`step-circle ${i === currentQ ? "active" : ""}`}
          >
            {i + 1}
          </div>
        ))}
      </div>

      <div className="task2-main">
        <button className="secondary-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        {/* ✅ animation class applied ONLY here */}
        <div className={`task2-layout ${animate ? "slide-flash" : ""}`}>
          {/* LEFT */}
          <div className="task2-desc">
            <h2>Digital Logic – Task 2</h2>
            <p>Build the circuit that matches this truth table.</p>

            <pre
              style={{
                background: "#fff",
                padding: "16px",
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
                marginTop: "12px"
              }}
            >
              {QUESTIONS[currentQ].table}
            </pre>

            {error && <p className="error-text">{error}</p>}
          </div>

          {/* RIGHT */}
          <div className="task2-compiler">
            <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
              {GATES.map(g => (
                <div
                  key={g}
                  draggable
                  onDragStart={e => onDragStart(e, g)}
                  className="primary-btn"
                  style={{ cursor: "grab" }}
                >
                  {g}
                </div>
              ))}
            </div>

            <div
              style={{
                border: "2px dashed #c7d2fe",
                background: "#fff",
                borderRadius: "12px",
                padding: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "24px"
              }}
            >
              {[0, 1].map(i => (
                <div
                  key={i}
                  onDrop={e => onDrop(e, i)}
                  onDragOver={allowDrop}
                  onClick={() => clearSlot(i)}
                  style={{
                    width: "140px",
                    height: "64px",
                    border: "2px solid #2563eb",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 600,
                    cursor: "pointer"
                  }}
                >
                  {slots[i] || "Drop Gate"}
                </div>
              ))}
            </div>

            <div className="task2-actions right-align">
              <button className="primary-btn" onClick={handleNext}>
                {currentQ === QUESTIONS.length - 1
                  ? "Mark as Done"
                  : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}