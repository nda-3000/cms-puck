import type { ComponentConfig } from '@measured/puck';
import type { PuckProps } from 'types';

type Props = PuckProps['Citation'];

export const Citation: ComponentConfig<Props> = {
  label: 'Citation List',
  fields: {
    data: {
      label: 'Citations List',
      type: 'array',
      arrayFields: {
        name: { type: 'text', label: 'Name / Source' },
        cite: { type: 'textarea', label: 'Citation Text' },
      },
    },
  },
  defaultProps: {
    data: [{ cite: 'Sample citation', name: 'Author Name' }],
  },
  render: ({ data }: Props) => (
    <div className="my-8 space-y-4 border-l-4 border-gray-300 pl-4">
      {data?.map((item, index) => (
        <div key={index} className="text-gray-700">
          <p className="font-semibold">{item.name}</p>
          <blockquote className="text-gray-600 italic">{item.cite}</blockquote>
        </div>
      ))}
    </div>
  ),
};
