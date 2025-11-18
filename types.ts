import type { ButtonVariant } from '~/components/ui/button';

export type PuckProps = {
  HeadingBlock: { title: string };
  GridBlock: { columns: number; gap: number };
  CardBlock: { title: string; description: string; padding: number; variant: string };
  ButtonBlock: { label: string; url: string; variant: ButtonVariant };
};
