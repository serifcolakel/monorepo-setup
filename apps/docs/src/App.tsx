import { useState } from 'react';

import { useTest } from '@serif/libs/hooks';
import { Button } from '@serif/ui';
import Drawer, { useDrawerContext } from '@serif/ui/drawer';

import reactLogo from '@assets/react.svg';

import Test from '@componets/test';

function DrawerCustomChild() {
  const { handleClose } = useDrawerContext();

  return (
    <div>
      <Button intent="danger" onClick={handleClose}>
        Close
      </Button>
    </div>
  );
}

function DrawerCustomTrigger() {
  const { handleOpen } = useDrawerContext();

  return (
    <Button intent="danger" onClick={handleOpen}>
      Drawer Seperate Functionality
    </Button>
  );
}

function DrawerCustomClose() {
  const { handleClose } = useDrawerContext();

  return (
    <Button intent="danger" onClick={handleClose}>
      Custom Close
    </Button>
  );
}

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
      <Button
        intent="primary"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Hello Vite + React!
      </Button>
      <Drawer>
        <DrawerCustomTrigger />
        <Drawer.Panel canCloseWithBackDrop={false} justify="justify-end">
          <Drawer.Header className="border-b border-b-gray-50">
            <Drawer.Title>Test Title</Drawer.Title>
          </Drawer.Header>
          <Drawer.Content>
            <div className="p-4 text-center text-blue-600 rounded-lg bg-blue-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              dolor quidem omnis tempore minima at deleniti soluta
              exercitationem laboriosam accusamus dolores rerum consequatur
              voluptate ipsa necessitatibus voluptates deserunt, mollitia autem
              earum! Explicabo nihil officiis ipsum, aut tenetur, nesciunt
              dolores hic laudantium quaerat reiciendis ratione quia. Doloribus
              praesentium veritatis qui vero?
            </div>
            <DrawerCustomClose />
          </Drawer.Content>
        </Drawer.Panel>
      </Drawer>
      <Drawer>
        <Drawer.Trigger className="px-4 py-2 text-orange-500 bg-white border border-orange-500 rounded-lg">
          Open Drawer with Can&apos;t Close With Backdrop
        </Drawer.Trigger>
        <Drawer.Panel canCloseWithBackDrop={false} justify="justify-end">
          <Drawer.Header className="border-b border-b-gray-50">
            <Drawer.Title>title</Drawer.Title>
            <Drawer.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure qui
              deserunt, hic error unde alias.
            </Drawer.Description>
          </Drawer.Header>
          <Drawer.Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <Drawer.Title>title</Drawer.Title>
            <Drawer.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure qui
              deserunt, hic error unde alias.
            </Drawer.Description>
            <div className="p-20 text-center text-blue-600 rounded-lg bg-blue-50">
              Other Components - Info
            </div>
            <div className="p-20 text-center text-orange-600 rounded-lg bg-orange-50">
              Other Components - Warning
            </div>
          </Drawer.Content>
          <Drawer.Footer className="justify-center bg-gray-100 border-t border-t-gray-50">
            <DrawerCustomChild />
            <Button intent="primary">Save</Button>
          </Drawer.Footer>
        </Drawer.Panel>
      </Drawer>
      <Drawer>
        <Drawer.Trigger className="px-4 py-2 text-indigo-500 bg-white border border-indigo-500 rounded-lg">
          Open Drawer With Scroll Can Close With Backdrop
        </Drawer.Trigger>
        <Drawer.Panel justify="justify-end">
          <Drawer.Header className="border-b border-b-gray-50">
            <Drawer.Title>title</Drawer.Title>
            <Drawer.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure qui
              deserunt, hic error unde alias.
            </Drawer.Description>
          </Drawer.Header>
          <Drawer.Content>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <Drawer.Title>title</Drawer.Title>
            <Drawer.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure qui
              deserunt, hic error unde alias.
            </Drawer.Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <Drawer.Title>title</Drawer.Title>
            <Drawer.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure qui
              deserunt, hic error unde alias.
            </Drawer.Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <Drawer.Title>title</Drawer.Title>
            <Drawer.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure qui
              deserunt, hic error unde alias.
            </Drawer.Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <Drawer.Title>title</Drawer.Title>
            <Drawer.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure qui
              deserunt, hic error unde alias.
            </Drawer.Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <Drawer.Title>title</Drawer.Title>
            <Drawer.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure qui
              deserunt, hic error unde alias.
            </Drawer.Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <Drawer.Title>title</Drawer.Title>
            <Drawer.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure qui
              deserunt, hic error unde alias.
            </Drawer.Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <Drawer.Title>title</Drawer.Title>
            <Drawer.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure qui
              deserunt, hic error unde alias.
            </Drawer.Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <Drawer.Title>title</Drawer.Title>
            <Drawer.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure qui
              deserunt, hic error unde alias.
            </Drawer.Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <Drawer.Title>title</Drawer.Title>
            <Drawer.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure qui
              deserunt, hic error unde alias.
            </Drawer.Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <Drawer.Title>title</Drawer.Title>
            <Drawer.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure qui
              deserunt, hic error unde alias.
            </Drawer.Description>
          </Drawer.Content>
          <Drawer.Footer className="bg-gray-100 border-t border-t-gray-50">
            <Drawer.Trigger className="w-full">Cancel</Drawer.Trigger>
            <Drawer.Trigger className="w-full">Save</Drawer.Trigger>
          </Drawer.Footer>
        </Drawer.Panel>
      </Drawer>
    </main>
  );
}

export default App;
