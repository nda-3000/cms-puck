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
    children: { type: 'slot' },
  },
  defaultProps: {
    title: 'Card Title',
    description: 'This is a description of the card.',
    padding: 16,
    variant: 'border rounded-md',
    children: [{ type: 'HeadingBlock', props: { title: 'Nested Heading' } }],
  },
  render: ({ title, description, padding, variant, children: Children, puck }) => (
    <div className={variant} style={{ padding }}>
      <span>Article id: {puck.metadata.articleId}</span>
      <h2 className="text-xl">{title}</h2>
      <p>{description}</p>
      {Children && <Children className="mt-4" />}
    </div>
  ),
};
