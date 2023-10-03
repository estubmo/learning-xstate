import { createActor, createMachine } from 'xstate';

export const helloWorldMachine = createMachine({
    /** @xstate-layout N4IgpgJg5mDOIC5gF8A0IB2B7CdGgAswAbYrAdywCdiJ8QAHLWASwBcWsN6APRAWgBs6AJ4DByNCCKkK1WgDoAEiTIACAMpsAhmzD0mrDl16IALACZRiABwBGBQFZJkoA */
    id: 'helloworld',
    initial: 'Hello State',
    states: {
      'Hello State': {
        type: 'final',
        output: {
          result: 'Hello World!'
        }
      }
    }
});

const actor = createActor(helloWorldMachine);

actor.subscribe({
  complete() {
    console.log('workflow completed', actor.getSnapshot().output);
  }
});

actor.start();
