export default function JsTask3Compiler({ code, setCode }) {
  const srcDoc = `
    <!DOCTYPE html>
    <html>
      <body>
        <pre id="output"></pre>
        <script>
          try {
            const logs = [];
            console.log = (...args) => logs.push(args.join(" "));
            ${code}
            document.getElementById("output").innerText =
              logs.length ? logs.join("\\n") : "No output";
          } catch (e) {
            document.getElementById("output").innerText = e.message;
          }
        </script>
      </body>
    </html>
  `;

  return (
    <>
      <textarea
        className="compiler-editor"
        placeholder="Analyze an array and print sum, average, even count, odd count"
        value={code}
        onChange={e => setCode(e.target.value)}
      />

      <div className="compiler-output">
        <iframe
          title="js-task3-preview"
          sandbox="allow-scripts"
          srcDoc={srcDoc}
          style={{ width: "100%", height: "220px", border: "none" }}
        />
      </div>
    </>
  );
}
