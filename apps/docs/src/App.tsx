import { useState } from 'react';

import { Button, useTest } from '@serif/library';

import reactLogo from '@assets/react.svg';

import Test from '@componets/test';

function App() {
  const [count, setCount] = useState(0);

  const t = useTest();

  return (
    <main className="flex flex-col items-center justify-center w-full h-screen text-white bg-black gap-y-8">
      {t.test} {count}
      <Test />
      <div>
        <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
          <img alt="Vite logo" className="logo" src="/vite.svg" />
        </a>
        <a href="https://react.dev" rel="noreferrer" target="_blank">
          <img alt="React logo" className="logo react" src={reactLogo} />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button
          intent="primary"
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          Hello Vite + React!
        </Button>
      </div>
    </main>
  );
}

export default App;
