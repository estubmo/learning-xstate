import { createActor, createMachine } from 'xstate';

export const todosMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBUD2FUAICyBDAxgBYCWAdmAHQAyquEZUmaGsAxFQPICCAIgPrIOPDgGUA2gAYAuolAAHVLGIAXYqlKyQAD0QAmCbooAWAOwA2AKxndFgDQgAnogAcARgoWAvp-vMseIjJKGjoGJnRFVkFhET4AUQAlBI4EuJ5JGSQQBSVVdU0dBH1DU0trO0dEVyMJbx8QUnQ4TT8cAhJyTRyVNQ0swoBaM3snBCHvXwi2wPJqWnpSRj94LO68vtBCo10Rl2djVzMj45OzEwmQVoCOymXMEIhILsUe-P7EbYBOY11XZxMKqNnLoLld2kE5qFFuEWJg4gAneGoeFPVYvdYFD66b7bP4A3YIaoSDx1TxAA */ id: "Todo Machine",

  states: {
    "Loading Todos": {
      on: {
        LOAD_TODOS: "Todos Loaded",
        TODOS_ERRORED: "Loading Todos Errored"
      }
    },

    "Todos Loaded": {},
    "Loading Todos Errored": {}
  },

  initial: "Loading Todos"
});

const actor = createActor(todosMachine);

actor.subscribe({
  complete() {
    console.log('workflow completed', actor.getSnapshot().output);
  }
});

actor.start();
