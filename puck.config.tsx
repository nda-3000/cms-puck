import type { Config } from '@measured/puck';
// import { PuckRichText } from '@tohuhono/puck-rich-text/legacy';
import type { PuckProps } from 'types';
import { components } from '~/components/blocks';
import { PageLayout } from '~/components/layout/page-layout';
type RootProps = {
  title: string;
  description: string;
};

export const config: Config<PuckProps, RootProps> = {
  components: {
    ...components,
    // RichTextBlock: PuckRichText,
  },
  categories: {
    typography: { components: ['HeadingBlock', 'ButtonBlock'], title: 'Typography' },
    layout: { components: ['GridBlock', 'ColumnsBlock'], title: 'Layout' },
  },
  root: {
    fields: {
      title: { type: 'text', label: 'Title' },
      description: { type: 'textarea', label: 'Description' },
    },
    render: ({ children }) => <PageLayout>{children}</PageLayout>,
  },
};
