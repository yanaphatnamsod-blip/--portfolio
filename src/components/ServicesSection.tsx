import { Code2, Palette, Sparkles, GraduationCap, MessageSquare, ArrowUpRight } from 'lucide-react';
import FadeIn from './FadeIn';

const SERVICES = [
  {
    number: '01',
    name: 'AI Web Design',
    description:
      'Building modern, responsive websites enhanced with AI-driven design tools and workflows.',
    icon: Code2,
  },
  {
    number: '02',
    name: 'AI Graphic Design',
    description:
      'Creating visual content and graphics using generative AI tools for branding and digital media.',
    icon: Palette,
  },
  {
    number: '03',
    name: 'AI Tools Development',
    description:
      'Exploring and building custom AI tools to support creative and educational projects.',
    icon: Sparkles,
  },
  {
    number: '04',
    name: 'AI for Education',
    description:
      'Applying AI to support learning, teaching materials, and the development of new knowledge.',
    icon: GraduationCap,
  },
  {
    number: '05',
    name: 'AI Consulting',
    description:
      'Guiding individuals and teams on how to integrate AI into their creative and educational work.',
    icon: MessageSquare,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <h2
        className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Services
      </h2>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => {
          const Icon = service.icon;
          return (
            <FadeIn key={service.number} delay={i * 0.1}>
              <div
                className="group relative flex items-center gap-6 sm:gap-10 py-8 sm:py-10 md:py-12 px-4 sm:px-6 -mx-4 sm:-mx-6 rounded-3xl transition-colors duration-300 hover:bg-black/[0.03] cursor-default overflow-hidden"
                style={{ borderBottom: '1px solid rgba(12, 12, 12, 0.15)' }}
              >
                {/* subtle gradient sweep on hover */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      'linear-gradient(120deg, transparent 0%, rgba(182,0,168,0.06) 45%, rgba(118,33,176,0.06) 55%, transparent 100%)',
                  }}
                />

                <span
                  className="relative font-black text-[#0C0C0C] flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {service.number}
                </span>

                <div className="relative flex flex-col gap-2 flex-1">
                  <div className="flex items-center gap-3">
                    <Icon
                      className="w-5 h-5 sm:w-6 sm:h-6 text-[#0C0C0C] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-60 group-hover:translate-x-0"
                      strokeWidth={1.75}
                    />
                    <h3
                      className="text-[#0C0C0C] font-medium uppercase transition-transform duration-300 group-hover:translate-x-1"
                      style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                    >
                      {service.name}
                    </h3>
                  </div>
                  <p
                    className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl transition-transform duration-300 group-hover:translate-x-1"
                    style={{
                      fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                      opacity: 0.6,
                    }}
                  >
                    {service.description}
                  </p>
                </div>

                <ArrowUpRight
                  className="relative w-6 h-6 sm:w-8 sm:h-8 text-[#0C0C0C] flex-shrink-0 opacity-0 -translate-x-2 rotate-45 group-hover:opacity-70 group-hover:translate-x-0 group-hover:rotate-0 transition-all duration-300"
                  strokeWidth={1.5}
                />
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
