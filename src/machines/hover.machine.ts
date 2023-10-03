import { createActor, createMachine } from 'xstate';

export const hoverMachine = createMachine({
    id: 'hover',
    initial: 'notHovered',
    states: {
        notHovered: {
            on: {
                MOUSEOVER: {
                    target: "hovered"
                }
            }
        },
        hovered: {
            on: {
                MOUSEOUT: {
                    target: "notHovered"
                }
            }
        }
    }

});

const actor = createActor(hoverMachine);

actor.subscribe({
  complete() {
    console.log('workflow completed', actor.getSnapshot().output);
  }
});

actor.start();
