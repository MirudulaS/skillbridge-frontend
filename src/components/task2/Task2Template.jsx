// src/components/task2/Task2Template.jsx
import { useState } from "react";
import "../../styles/htmlTask2.css";

export default function Task2Template({
  title,
  questions,
  Compiler,
  storageKey,
  onBack
}) {
  const [current, setCurrent] = useState(0);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [completed, setCompleted] = useState(
    Array(questions.length).fill(false)
  );
  const [animate, setAnimate] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const validateOnly = () => {
    const result = questions[current].validate(code);
    if (result) {
      setError(result);
      return false;
    }
    setError("");
    return true;
  };

  const handleNext = () => {
    if (!validateOnly()) return;

    const updated = [...completed];
    updated[current] = true;
    setCompleted(updated);

    setAnimate(true);
    setShowPopup(true);

    setTimeout(() => {
      setAnimate(false);
      setShowPopup(false);
      setCode("");
      setCurrent(c => c + 1);
    }, 800);
  };

  const handleMarkAsDone = () => {
    if (!validateOnly()) return;
    localStorage.setItem(storageKey, "true");
    onBack();
  };

  return (
    <div className="task2-page">
      <div className="task2-sidebar">
        {questions.map((_, i) => (
          <div
            key={i}
            className={`step-circle ${
              i === current ? "active" : completed[i] ? "done" : ""
            }`}
          >
            {i + 1}
          </div>
        ))}
      </div>

      <div className="task2-main">
        <button className="secondary-btn" onClick={onBack}>
          ← Back
        </button>

        <div className={`task2-layout ${animate ? "slide-flash" : ""}`}>
          <div className="task2-desc">
            <h2>{title}</h2>
            <p>{questions[current].description}</p>

            <h3>Constraints</h3>
            <ul>
              {questions[current].constraints.map(c => (
                <li key={c}>{c}</li>
              ))}
            </ul>

            {error && <p className="error-text">{error}</p>}
          </div>

          <div className="task2-compiler">
            <Compiler code={code} setCode={setCode} />

            {/* ✅ LIVE OUTPUT */}
            <div className="compiler-output">
              <iframe
                title="preview"
                sandbox=""
                style={{ width: "100%", height: "200px", border: "none" }}
                srcDoc={code}
              />
            </div>

            <div className="task2-actions right-align">
              {current < questions.length - 1 && (
                <button className="primary-btn" onClick={handleNext}>
                  Next
                </button>
              )}
              {current === questions.length - 1 && (
                <button className="done-btn" onClick={handleMarkAsDone}>
                  Mark as Done
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="task2-popup">
          <div className="popup-box">Moving to next question</div>
        </div>
      )}
    </div>
  );
}