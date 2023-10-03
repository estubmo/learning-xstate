import HelloWorld from "./components/hello-world";
import Hover from "./components/hover";
import Todos from './components/todos';

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center w-full  py-24 px-4">
      <div className="w-full max-w-lg space-y-4 flex-col">
        <div className="rounded-xl bg-zinc-800 w-full p-10 flex justify-center">
          <HelloWorld />
        </div>
        <div className="rounded-xl flex justify-center bg-zinc-800 w-full p-10">
          <Hover />
        </div>
        <div className="rounded-xl flex justify-center bg-zinc-800 w-full p-10">
          <Todos />
        </div>
      </div>
    </main>
  );
}
