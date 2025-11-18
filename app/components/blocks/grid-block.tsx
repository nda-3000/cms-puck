import { DropZone, type ComponentConfig } from '@measured/puck';
import type { PuckProps } from 'types';

export const GridBlock: ComponentConfig<PuckProps['GridBlock']> = {
  fields: {
    columns: { type: 'number', min: 1, max: 6, step: 1 },
    gap: { type: 'number', min: 0, max: 64, step: 4 },
    children: { type: 'slot' },
  },
  defaultProps: {
    columns: 3,
    gap: 16,
    children: [],
  },
  render: ({ columns, gap, children: Children }) => (
    <Children className="grid p-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)`, gap }} />
  ),
};
