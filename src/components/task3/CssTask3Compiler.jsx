export default function CssTask3Compiler({ code, setCode }) {
  const { html, css } = code;

  return (
    <>
      <textarea
        className="compiler-editor"
        placeholder="Write your HTML here..."
        value={html}
        onChange={e => setCode({ ...code, html: e.target.value })}
      />

      <textarea
        className="compiler-editor"
        placeholder="Write your CSS here..."
        value={css}
        onChange={e => setCode({ ...code, css: e.target.value })}
        style={{ marginTop: "16px" }}
      />

      <div className="compiler-output">
        <style>{css}</style>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </>
  );
}