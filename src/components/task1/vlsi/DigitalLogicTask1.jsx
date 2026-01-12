// src/components/task1/vlsi/DigitalLogicTask1.jsx

import Task1Template from "../Task1Template";
import DigitalLogicTask1Content from "./DigitalLogicTask1Content";
import { useNavigate } from "react-router-dom";

export default function DigitalLogicTask1() {
  const navigate = useNavigate();

  return (
    <Task1Template
      title="Digital Logic – Task 1: Logic Gates & Boolean Basics"
      videoId="sY5g3wJt7Y0"
      Content={DigitalLogicTask1Content}
      storageKey="vlsi-digitallogic-task-1"
      onBack={() => navigate("/dashboard")}
    />
  );
}