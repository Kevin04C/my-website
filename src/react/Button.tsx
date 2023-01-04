interface Props {
  href: string;
  text: string;
  type: 'primary' | 'secondary',
}

export const Button = ({ href, text, type }: Props) => {
  const buttonClass =
    type === 'primary'
      ? "bg-primary-900 text-white shadow-lg shadow-primary-900/30 hover:bg-primary-800 hover:opacity-90 transition-all"
      : "bg-transparent border border-primary-900 text-primary-900 hover:shadow-md hover:shadow-primary-900/30 transition-all  duration-100";
  return (
    <a href={href} className={`px-7 py-1 rounded-md ${buttonClass}`} target="_blank">
      {text}
    </a>
  );
};
