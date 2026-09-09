interface ContactButtonProps {
  className?: string;
  href?: string;
}

export default function ContactButton({ className = '', href }: ContactButtonProps) {
  const sharedClassName = `rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base text-white font-medium uppercase tracking-widest transition-transform duration-200 hover:scale-[1.03] inline-block ${className}`;
  const sharedStyle = {
    background:
      'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
    boxShadow:
      '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
    outline: '2px solid white',
    outlineOffset: '-3px',
  };

  if (href) {
    return (
      <a href={href} className={sharedClassName} style={sharedStyle}>
        Contact Me
      </a>
    );
  }

  return (
    <button type="button" className={sharedClassName} style={sharedStyle}>
      Contact Me
    </button>
  );
}
