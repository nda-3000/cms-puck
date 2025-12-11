import type { ComponentConfig } from '@measured/puck';
import type { PuckProps } from 'types';

export const UnorderedList: ComponentConfig<PuckProps['UnorderedList']> = {
  label: 'Unordered List',
  fields: {
    items: {
      type: 'array',
      label: 'List Items',
      arrayFields: {
        item: { type: 'text', label: 'Item' },
      },
      getItemSummary: (value) => value.item || 'Item',
      min: 1,
    },
  },
  defaultProps: {
    items: [
      { item: 'Donec at auctor diam.' },
      { item: 'Dquat ante nec lacus mattis.' },
      { item: 'Donecc lacus mattist auctor diam.' },
      { item: 'Donec at aucquaacus mattisam.' },
    ],
  },
  render: ({ items }) => (
    <ul className="my-4 list-disc space-y-1 pl-6">
      {items?.map((item, index) => (
        <li key={index} className="text-gray-800">
          {item.item}
        </li>
      ))}
    </ul>
  ),
};
