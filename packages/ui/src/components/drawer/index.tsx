import { PropsWithChildren } from 'react';

import DrawerContent from './content';
import DrawerFooter from './footer';
import DrawerHeader from './header';
import { useDrawerContext } from './hooks';
import { DrawerDescription, DrawerTitle } from './labels';
import DrawerPanel from './panel';
import DrawerProvider from './provider';
import DrawerTrigger from './trigger';

export interface DrawerProps {
  initialOpen?: boolean;
}

function Drawer({ children, initialOpen }: PropsWithChildren<DrawerProps>) {
  return <DrawerProvider initialOpen={initialOpen}>{children}</DrawerProvider>;
}

Drawer.Trigger = DrawerTrigger;
Drawer.Panel = DrawerPanel;
Drawer.Content = DrawerContent;
Drawer.Footer = DrawerFooter;
Drawer.Header = DrawerHeader;
Drawer.Title = DrawerTitle;
Drawer.Description = DrawerDescription;

export { Drawer, useDrawerContext };
