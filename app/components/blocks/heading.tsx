import type { ComponentConfig } from '@measured/puck';
import type { PuckProps } from 'types';

type Props = PuckProps['Heading'];

export const Heading: ComponentConfig<Props> = {
  label: 'Heading',
  fields: {
    title: { type: 'text', contentEditable: true },
    subtitle: { type: 'text', contentEditable: true },
  },
  defaultProps: {
    title: 'Heading',
  },
  render: ({ title, subtitle }: Props) => (
    <div className="p-16 text-center">
      <h1 className="text-2xl font-bold">{title}</h1>
      {subtitle && <p className="text-xl">{subtitle}</p>}
    </div>
  ),
};
