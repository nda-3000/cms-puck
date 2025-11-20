import type { ComponentConfig } from '@measured/puck';

import type { PuckProps } from 'types';

export const ColumnsBlock: ComponentConfig<PuckProps['ColumnsBlock']> = {
  fields: {
    layout: { type: 'array', itemType: 'text' },
    columns: { type: 'array', itemType: 'slot' },
  },
  defaultProps: {
    layout: ['1fr', '1fr'],
    columns: [[], []],
  },
  render: ({ layout, columns }) => {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: layout.join(' '),
          gap: '1rem',
        }}
      >
        {columns.map((column, index) => (
          <div key={index}>
            {/* Render blocks inside each column */}
            {column?.map((child: Child, i) => (
              <Child key={i} block={child} />
            ))}
          </div>
        ))}
      </div>
    );
  },
};
