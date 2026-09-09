import FadeIn from './FadeIn';
import ContactButton from './ContactButton';

const NAV_LINKS = ['About', 'Price', 'Projects', 'Contact'];

export default function HeroSection() {
  return (
    <section
      className="h-screen flex flex-col relative"
      style={{ overflowX: 'clip' }}
    >
      {/* Animated glow behind the heading */}
      <div className="hero-glow" />

      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav">
        <div className="navbar-wrap flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 pb-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
            >
              {link}
            </a>
          ))}
          <div className="navbar-glow-line" />
        </div>
      </FadeIn>

      {/* Hero heading */}
      <div className="relative overflow-hidden w-full mt-6 sm:mt-4 md:-mt-5" style={{ zIndex: 1 }}>
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
            Hi, i&apos;m
          </h1>
          <p className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
            กันตวิชญ์
          </p>
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div className="relative mt-auto flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10" style={{ zIndex: 1 }}>
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            an ai web designer crafting smart, striking, and unforgettable digital experiences
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
