// src/components/task3/MlTask3Compiler.jsx
export default function MlTask3Compiler({ code, setCode }) {
  return (
    <>
      <textarea
        className="compiler-editor"
        placeholder={`Design your ML mini project here...

Example:

Problem:
Predict house prices based on features.

Dataset:
House size, location, number of rooms.

Model:
Linear Regression.

Training:
Split data into train and test sets.
Train model on training data.

Evaluation:
Use RMSE and R² score.
`}
        value={code}
        onChange={e => setCode(e.target.value)}
        style={{ height: "360px" }}
      />

      <div className="compiler-output">
        <pre style={{ whiteSpace: "pre-wrap" }}>
{code || "Your ML pipeline design will appear here"}
        </pre>
      </div>
    </>
  );
}