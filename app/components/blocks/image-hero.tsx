import type { ComponentConfig } from '@measured/puck';
import type { PuckProps } from 'types';

export const ImageHero: ComponentConfig<PuckProps['ImageHero']> = {
  label: 'Image Hero',
  fields: {
    featured_image: {
      type: 'object',
      label: 'Featured Image',
      objectFields: {
        src: { type: 'text', label: 'Image URL' },
        alt: { type: 'text', label: 'Alt Text' },
        // sizes: {},
      },
    },
  },
  defaultProps: {
    featured_image: {
      src: 'https://picsum.photos/1600/900',
      alt: 'Hero image',
      //   sizes: {
      //     mobile: '(max-width: 768px) 100vw',
      //     desktop: '100vw',
      //   },
    },
  },
  render: ({ featured_image }) => {
    const { src, alt } = featured_image;

    return (
      <div className="relative w-full">
        <img src={src} alt={alt} className="h-auto w-full rounded-md object-cover" />
      </div>
    );
  },
};
