import type { ButtonVariant } from '~/components/ui/button';
import { type PuckRichTextProps } from '@tohuhono/puck-rich-text';
import type { Slot } from '@measured/puck';

export type PuckProps = {
  HeadingBlock: { title: string };
  GridBlock: { columns: number; gap: number; children: Slot };
  CardBlock: { title: string; description: string; padding: number; variant: string; children?: Slot };
  ButtonBlock: { label: string; url: string; variant: ButtonVariant };
  Container: { children: Slot };
  ImageBlock: {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption?: string;
    link?: string;
    layout?: 'responsive' | 'fixed' | 'intrinsic';
  };
  ColumnsBlock: {};
  //   RichTextBlock: PuckRichTextProps;
};
