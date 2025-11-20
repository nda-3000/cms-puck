import type { ComponentConfig } from '@measured/puck';
import type { PuckProps } from 'types';

export const ImageBlock: ComponentConfig<PuckProps['ImageBlock']> = {
  label: 'Image',
  fields: {
    src: { type: 'text', label: 'Image URL' },
    alt: { type: 'text', label: 'Alt Text' },
    width: { type: 'number', label: 'Width (px)', min: 0 },
    height: { type: 'number', label: 'Height (px)', min: 0 },
    caption: { type: 'textarea', label: 'Caption (optional)' },
    link: { type: 'text', label: 'Link (optional)' },
    layout: {
      type: 'select',
      label: 'Layout',
      options: [
        { label: 'Responsive', value: 'responsive' },
        { label: 'Fixed', value: 'fixed' },
        { label: 'Intrinsic', value: 'intrinsic' },
      ],
    },
  },
  defaultProps: {
    src: 'https://picsum.photos/600/400',
    alt: 'Placeholder Image',
    width: 600,
    height: 400,
    caption: '',
    link: '',
    layout: 'responsive',
  },
  render: ({ src, alt, width, height, caption, link, layout }) => {
    const image = (
      <img
        src={src}
        alt={alt}
        width={layout !== 'responsive' ? width : undefined}
        height={layout !== 'responsive' ? height : undefined}
        style={{
          width: layout === 'responsive' ? '100%' : undefined,
          height: layout === 'responsive' ? 'auto' : undefined,
          display: 'block',
        }}
        className="rounded-md"
      />
    );

    return (
      <figure className="my-4">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            {image}
          </a>
        ) : (
          image
        )}
        {caption && <figcaption className="mt-2 text-sm text-gray-500">{caption}</figcaption>}
      </figure>
    );
  },
};
