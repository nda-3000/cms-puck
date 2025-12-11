import type { ComponentConfig } from '@measured/puck';
import type { PuckProps } from 'types';

export const BannerComponent = ({ variant }: PuckProps['Banner']) => {
  const bgMap: Record<PuckProps['Banner']['variant'], string> = {
    archivrecherche: 'bg-red-200 text-red-900',
    bestandsuebersicht: 'bg-green-200 text-green-900',
    benutzung_service: 'bg-yellow-200 text-yellow-900',
  };

  return (
    <div className={`rounded-md p-6 ${bgMap[variant]} text-xl font-semibold`}>Banner: {variant.replace('_', ' ')}</div>
  );
};

export const Banner: ComponentConfig<PuckProps['Banner']> = {
  label: 'Banner',
  fields: {
    variant: {
      type: 'select',
      label: 'Banner Variant',
      options: [
        { label: 'Archivrecherche', value: 'archivrecherche' },
        { label: 'Bestandsübersicht', value: 'bestandsuebersicht' },
        { label: 'Benutzung & Service', value: 'benutzung_service' },
      ],
    },
  },
  defaultProps: {
    variant: 'archivrecherche',
  },
  render: BannerComponent,
};
