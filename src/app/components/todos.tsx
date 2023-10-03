"use client";

import { todosMachine } from '@/machines/todos.machine';
import { useMachine } from "@xstate/react";

export default function Todos() {
  const [state, send] = useMachine(todosMachine);
  return (
    <div className="flex flex-col gap-4 items-center">
      {JSON.stringify(state.value)}
      <button
        className="p-2 rounded-lg w-40 bg-blue-500 "
        onClick={() => send({ type: "LOAD_TODOS" })}
      >
        Load
      </button>
      <button
        className="p-2 rounded-lg w-40 bg-red-500 "
        onClick={() => send({ type: "TODOS_ERRORED" })}
      >
        Error
      </button>
    </div>
  );
}
