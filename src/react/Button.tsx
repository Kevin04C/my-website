import { AnchorHTMLAttributes, DetailedHTMLProps, FC } from 'react';

type Props = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & {
  href: string;
  text: string;
  type: 'primary' | 'secondary';
};

export const Button: FC<Props> = ({ href, text, type, target = '_self', ...rest }) => {
  const variants = {
    primary:
      'bg-primary-900 text-white shadow-lg shadow-primary-900/30 hover:bg-primary-800 hover:opacity-90 transition-all',
    secondary:
      'bg-transparent border border-primary-900 text-primary-900 hover:shadow-md hover:shadow-primary-900/30 transition-all  duration-100',
  };

  return (
    <a href={href} className={`px-7 py-1 rounded-md ${variants[type]}`} target={target} {...rest}>
      {text}
    </a>
  );
};
