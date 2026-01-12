export default function JsTask2Compiler({ code, setCode }) {
  return (
    <textarea
      className="compiler-editor"
      placeholder="Write your JavaScript code here..."
      value={code}
      onChange={e => setCode(e.target.value)}
    />
  );
}
