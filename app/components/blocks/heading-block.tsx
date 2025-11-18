import type { ComponentConfig } from '@measured/puck';
import type { PuckProps } from 'types';

type Props = PuckProps['HeadingBlock'];

export const HeadingBlock: ComponentConfig<Props> = {
  fields: {
    title: { type: 'text' },
  },
  defaultProps: {
    title: 'Heading',
  },
  render: ({ title }: Props) => (
    <div style={{ padding: 64 }}>
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  ),
};
