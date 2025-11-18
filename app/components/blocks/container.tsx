import { DropZone, type ComponentConfig } from '@measured/puck';
import type { PuckProps } from 'types';

export const Container: ComponentConfig<PuckProps['Container']> = {
  fields: {
    children: { type: 'slot' },
  },
  render: ({ children: Children }) => <Children className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" />,
};
