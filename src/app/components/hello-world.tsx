"use client";

import { helloWorldMachine } from '@/machines/hello-world.machine';
import { useMachine } from '@xstate/react';

export default function HelloWorld(){
   const [state, send] =  useMachine(helloWorldMachine)
    return(
        <>
            {JSON.stringify(state.value)}
        </>
    )
}
