import type { ComponentConfig } from '@measured/puck';
import type { PuckProps } from 'types';

type Props = PuckProps['Paragraph'];

export const Paragraph: ComponentConfig<Props> = {
  label: 'Paragraph',
  fields: {
    text: { type: 'textarea', contentEditable: true },
  },
  defaultProps: {
    text: 'Paragraph',
  },
  render: ({ text }: Props) => <p className="p-4">{text}</p>,
};
