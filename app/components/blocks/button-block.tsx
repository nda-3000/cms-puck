import type { ComponentConfig } from '@measured/puck';
import type { PuckProps } from 'types';
import { ButtonLink } from '~/components/button-link';

export const ButtonBlock: ComponentConfig<PuckProps['ButtonBlock']> = {
  fields: {
    label: { type: 'text' },
    url: { type: 'text' },
    variant: {
      type: 'select',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Secondary', value: 'secondary' },
        { label: 'Destructive', value: 'destructive' },
        { label: 'Outline', value: 'outline' },
        { label: 'Ghost', value: 'ghost' },
      ],
    },
  },
  defaultProps: {
    label: 'Button Label',
    url: 'https://example.com',
    variant: 'default',
  },
  render: ({ label, url, variant }) => <ButtonLink variant={variant} label={label} url={url} />,
};
