import type { ButtonVariant } from '~/components/ui/button';
import type { Slot } from '@measured/puck';

export type PuckProps = {
  // typography
  Heading: { title: string; subtitle?: string };
  Paragraph: { text: string };
  Citation: { data: { cite: string; name: string }[] };
  UnorderedList: { items: { item: string }[] };
  // media & visual\
  Banner: { variant: 'archivrecherche' | 'bestandsuebersicht' | 'benutzung_service' };
  ImageHero: {
    featured_image: {
      src: string;
      alt: string;
      //   sizes: Record<string, string>; // TODO: define better
    };
  };

  MediaTitle: {
    title: string;
    country: string;
    year: string;
    duration: string;
    extra_info: { item: string }[];
  };

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
  RichTipTap: { content: string };
};
