import type { ComponentConfig } from '@measured/puck';
import type { PuckProps } from 'types';

type Props = PuckProps['HeadingBlock'];

export const HeadingBlock: ComponentConfig<Props> = {
  fields: {
    title: { type: 'text', contentEditable: true },
  },
  defaultProps: {
    title: 'Heading',
  },
  render: ({ title }: Props) => <h1 className="p-16 text-center text-2xl font-bold">{title}</h1>,
};
