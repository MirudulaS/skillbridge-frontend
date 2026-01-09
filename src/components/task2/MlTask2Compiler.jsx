// src/components/task2/MlTask2Compiler.jsx
export default function MlTask2Compiler({ code, setCode }) {
  return (
    <textarea
      className="compiler-editor"
      placeholder={`Write your answers or pseudo-code here...

Example:
dataset = load data
split into train and test
train model
evaluate accuracy
`}
      value={code}
      onChange={e => setCode(e.target.value)}
      style={{ height: "420px" }}
    />
  );
}