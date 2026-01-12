// src/components/task2/CssTask2Compiler.jsx
export default function CssTask2Compiler({ code, setCode }) {
  return (
    <textarea
      className="compiler-editor"
      placeholder={`Write your HTML and CSS here...

Example:
<style>
p {
  color: blue;
  font-size: 18px;
}
</style>

<p>Hello World</p>
`}
      value={code}
      onChange={e => setCode(e.target.value)}
      style={{ height: "420px" }}
    />
  );
}
