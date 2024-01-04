import { ComponentProps } from 'react';

import DrawerSection from './section';

function DrawerFooter<T extends React.ElementType = 'footer'>(
  props: ComponentProps<T>
) {
  return <DrawerSection as="footer" {...props} />;
}

export default DrawerFooter;
