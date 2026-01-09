// src/components/task1/vlsi/DigitalLogicTask1Content.jsx

export default function DigitalLogicTask1Content() {
  return (
    <>
      <p>
        Digital Logic is the foundation of VLSI design. It deals with systems
        that operate using binary values: <strong>0</strong> and <strong>1</strong>.
        All digital circuits are built using logic gates.
      </p>

      <h3>Binary Number System</h3>
      <p>
        Computers and digital circuits use base-2 numbers. Each digit is called
        a bit and can have only two values: 0 or 1.
      </p>

      <h3>Logic Gates</h3>
      <ul>
        <li><strong>AND</strong> – Output is 1 only if all inputs are 1</li>
        <li><strong>OR</strong> – Output is 1 if any input is 1</li>
        <li><strong>NOT</strong> – Inverts the input</li>
        <li><strong>NAND</strong> – NOT of AND</li>
        <li><strong>NOR</strong> – NOT of OR</li>
        <li><strong>XOR</strong> – Output is 1 if inputs are different</li>
      </ul>

      <h3>Truth Table Example (AND Gate)</h3>
      <pre>{`
A  B | Y
0  0 | 0
0  1 | 0
1  0 | 0
1  1 | 1
      `}</pre>

      <h3>Boolean Expression</h3>
      <p>
        Logic gates can be represented using Boolean expressions.
      </p>

      <pre>{`
Y = A · B   (AND gate)
Y = A + B   (OR gate)
Y = A'      (NOT gate)
      `}</pre>

      <p>
        Understanding logic gates and Boolean expressions is critical before
        moving to Verilog and Physical Design.
      </p>
    </>
  );
}
