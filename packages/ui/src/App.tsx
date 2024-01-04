import Drawer from '../drawer';

function App() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen text-white bg-black gap-y-8">
      <Drawer>
        <Drawer.Trigger>Open Drawer</Drawer.Trigger>
        <Drawer.Panel justify="justify-start">
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
