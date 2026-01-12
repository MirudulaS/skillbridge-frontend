function ModuleList({ modules }) {
  return (
    <div className="module-list">
      <h2>Basic Modules</h2>
      <ul>
        {modules.map((m, i) => (
          <li key={i}>{m}</li>
        ))}
      </ul>
    </div>
  );
}

export default ModuleList;