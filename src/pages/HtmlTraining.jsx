import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/htmlHandsOn.css";

const TASKS = {
  "task-1": {
    title: "Create a basic HTML structure",
    description: "Add a heading and a paragraph inside the page."
  },
  "task-2": {
    title: "Add a list and a link",
    description: "Create an unordered list and a clickable link."
  },
  "task-3": {
    title: "Add an image",
    description: "Insert an image with proper alt text."
  }
};

export default function HtmlHandsOn() {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const task = TASKS[taskId];

  const [code, setCode] = useState(`<!DOCTYPE html>
<html>
  <head>
    <title>HTML Task</title>
  </head>
  <body>

  </body>
</html>`);

  const [preview, setPreview] = useState("");

  const runCode = () => {
    setPreview(code);
    // Later: send event to backend
  };

  return (
    <div className="html-hands-on">
      <div className="hands-header">
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <button onClick={() => navigate(-1)}>← Back</button>
      </div>

      <div className="hands-body">
        <textarea
          className="code-editor"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <iframe
          title="preview"
          className="preview"
          sandbox=""
          srcDoc={preview}
        />
      </div>

      <div className="hands-footer">
        <button className="run-btn" onClick={runCode}>
          Run / Preview
        </button>
      </div>
    </div>
  );
}