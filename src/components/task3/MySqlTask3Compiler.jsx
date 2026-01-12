// src/components/task3/MySqlTask3Compiler.jsx
export default function MySqlTask3Compiler({ code, setCode }) {
  return (
    <>
      <textarea
        className="compiler-editor"
        placeholder={`Write your SQL mini-project here...

Example:

CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  age INT
);

INSERT INTO users VALUES (1, 'Alice', 'alice@mail.com', 22);

SELECT * FROM users;
`}
        value={code}
        onChange={e => setCode(e.target.value)}
        style={{ height: "360px" }}
      />

      <div className="compiler-output">
        <pre style={{ whiteSpace: "pre-wrap" }}>
{code || "Your SQL code will appear here"}
        </pre>
      </div>
    </>
  );
}