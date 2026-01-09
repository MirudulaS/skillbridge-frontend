import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/htmlTask2.css";

export default function HtmlTask3({
  title,
  description,
  constraints,
  Compiler,
  validate,
  storageKey,
  onBack,
  initialCode = "" // Before we have done this only like accepting html and css
}) {
  const navigate = useNavigate();
  const [code, setCode] = useState(initialCode); // Before we have done this only like accepting html and css, here changed like getting code for any shape needed
  const [error, setError] = useState("");


  const handleMarkAsDone = () => {
    const result = validate(code);
    if (result) {
      setError(result);
      return;
    }

    localStorage.setItem(storageKey, "true");
    navigate(-1);
  };

  return (
    <div className="task2-page">
      <div className="task2-sidebar">
        <div className="step-circle active">1</div>
      </div>

      <div className="task2-main">
        <button className="secondary-btn" onClick={onBack}>
          ← Back
        </button>

        <div className="task2-layout">
          <div className="task2-desc">
            <h2>{title}</h2>
            <p>{description}</p>

            <h3>Constraints</h3>
            <ul>
              {constraints.map(c => (
                <li key={c}>{c}</li>
              ))}
            </ul>

            {error && <p className="error-text">{error}</p>}
          </div>

          <div className="task2-compiler">
            <Compiler code={code} setCode={setCode} />

            <div className="task2-actions right-align">
              <button className="done-btn" onClick={handleMarkAsDone}>
                Mark as Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}