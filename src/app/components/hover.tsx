"use client";

import { hoverMachine } from "@/machines/hover.machine";
import { useMachine } from "@xstate/react";

export default function Hover() {
  const [state, send] = useMachine(hoverMachine);
  return (
    <div className="flex flex-col gap-4 items-center">
      {JSON.stringify(state.value)}
      <button
        className="p-2 rounded-lg w-40 bg-blue-500 hover:bg-green-500"
        onMouseOver={() => send({ type: "MOUSEOVER" })}
        onMouseOut={() => send({ type: "MOUSEOUT" })}
      >
        Hover
      </button>
    </div>
  );
}
