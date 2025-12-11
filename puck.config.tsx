import type { Config } from '@measured/puck';
import type { PuckProps } from 'types';
import { components } from '~/components/blocks';
import { Banner } from '~/components/blocks/banner';
import { PageLayout } from '~/components/layout/page-layout';
type RootProps = {
  title: string;
  description: string;
};

export const config: Config<PuckProps, RootProps> = {
  components: {
    ...components,
  },
  categories: {
    typography: {
      components: ['Heading', 'Paragraph', 'Citation', 'UnorderedList', 'RichTipTap'],
      title: 'Typography',
    },
    media: { components: ['Banner', 'ImageHero', 'MediaTitle'], title: 'Media & Visual' },
    action: { components: ['ButtonBlock'], title: 'Action & Interaction' },
    layout: { components: ['GridBlock', 'ColumnsBlock'], title: 'Layout & Structure' },
    contact: { components: [], title: 'Contact & Engagement' },
  },
  root: {
    defaultProps: {
      title: 'Hello, world',
      description: 'Lorem ipsum',
    },
    fields: {
      title: { type: 'text', label: 'Title' },
      description: { type: 'textarea', label: 'Description' },
    },
    render: ({ children }) => <PageLayout>{children}</PageLayout>,
  },
};
