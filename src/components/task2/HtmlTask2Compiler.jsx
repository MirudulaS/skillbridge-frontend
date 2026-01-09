export default function HtmlTask2Compiler({ code, setCode }) {
  return (
    <textarea
      className="compiler-editor"
      placeholder="Write your HTML here..."
      value={code}
      onChange={(e) => setCode(e.target.value)}
    />
  );
}