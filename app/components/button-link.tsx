import { Button, type ButtonVariant } from './ui/button';

export const ButtonLink = ({ variant, label, url }: { variant: ButtonVariant; label: string; url: string }) => {
  return (
    <Button asChild variant={variant}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    </Button>
  );
};
