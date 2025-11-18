import { DropZone, type ComponentConfig } from '@measured/puck';
import type { PuckProps } from 'types';

export const CardBlock: ComponentConfig<PuckProps['CardBlock']> = {
  fields: {
    title: { type: 'text' },
    description: { type: 'textarea' },
    padding: { type: 'number', min: 0, max: 64, step: 4 },
    variant: {
      type: 'select',
      options: [
        { label: 'Outlined', value: 'border rounded-md' },
        { label: 'Floating', value: 'shadow-lg rounded-md' },
      ],
    },
  },
  defaultProps: {
    title: 'Card Title',
    description: 'This is a description of the card.',
    padding: 16,
    variant: 'border rounded-md',
  },
  render: ({ title, description, padding, variant }) => (
    <div className={variant} style={{ padding }}>
      <h2 className="text-xl">{title}</h2>
      <p>{description}</p>
      <DropZone zone="card-content" className="mt-4" />
    </div>
  ),
};
