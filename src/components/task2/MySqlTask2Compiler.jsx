// src/components/task2/MySqlTask2Compiler.jsx
export default function MySqlTask2Compiler({ code, setCode }) {
  return (
    <textarea
      className="compiler-editor"
      placeholder={`Write your SQL queries here...

Example:
SELECT * FROM users;
`}
      value={code}
      onChange={e => setCode(e.target.value)}
      style={{ height: "420px" }}
    />
  );
}