// src/components/task2/vlsi/DigitalLogicTask2Compiler.jsx
import { useState, useEffect } from "react";

const BASIC_GATES = ["AND", "OR", "NOT"];

export default function DigitalLogicTask2Compiler({ code, setCode }) {
  const [placedGates, setPlacedGates] = useState([]);

  useEffect(() => {
    setCode(placedGates);
  }, [placedGates, setCode]);

  const onDragStart = (e, gate) => {
    e.dataTransfer.setData("gate", gate);
  };

  const onDrop = e => {
    e.preventDefault();
    const gate = e.dataTransfer.getData("gate");
    setPlacedGates(prev => [...prev, gate]);
  };

  return (
    <>
      {/* GATE PALETTE */}
      <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
        {BASIC_GATES.map(gate => (
          <div
            key={gate}
            draggable
            onDragStart={e => onDragStart(e, gate)}
            style={{
              padding: "10px 16px",
              border: "1px solid #2563eb",
              borderRadius: 8,
              cursor: "grab",
              background: "#f8fafc",
              fontWeight: 600
            }}
          >
            {gate}
          </div>
        ))}
      </div>

      {/* WORK AREA */}
      <div
        onDragOver={e => e.preventDefault()}
        onDrop={onDrop}
        style={{
          minHeight: 160,
          border: "2px dashed #94a3b8",
          borderRadius: 10,
          padding: 12,
          display: "flex",
          alignItems: "center",
          gap: 10,
          flexWrap: "wrap"
        }}
      >
        {placedGates.length === 0 ? (
          <span style={{ color: "#64748b" }}>
            Drag gates here to build your circuit
          </span>
        ) : (
          placedGates.map((g, i) => (
            <div
              key={i}
              style={{
                padding: "8px 14px",
                background: "#e0f2fe",
                borderRadius: 6,
                fontWeight: 600
              }}
            >
              {g}
            </div>
          ))
        )}
      </div>
    </>
  );
}