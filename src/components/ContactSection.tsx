import { Mail, Phone, Instagram, Facebook } from 'lucide-react';
import FadeIn from './FadeIn';
import ContactButton from './ContactButton';

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'kintwichy@gmail.com',
    href: 'mailto:kintwichy@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '099-945-5737',
    href: 'tel:0999455737',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    value: 'KantaWit Ktw',
    href: 'https://facebook.com/KantaWit.Ktw',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@kantawitkaewsiri',
    href: 'https://instagram.com/kantawitkaewsiri',
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-28 md:py-36 flex flex-col items-center gap-12 sm:gap-16"
    >
      <FadeIn className="flex flex-col items-center gap-4 text-center">
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Contact
        </h2>
        <p
          className="text-[#D7E2EA]/70 font-light max-w-md"
          style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.15rem)' }}
        >
          มีโปรเจกต์ในใจ หรืออยากพูดคุยเรื่องงาน ทักมาได้เลยครับ
          <br />
          Have a project in mind? Let&apos;s talk.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-2xl">
        {CONTACT_ITEMS.map((item, i) => {
          const Icon = item.icon;
          return (
            <FadeIn key={item.label} delay={i * 0.08}>
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                className="group flex items-center gap-4 rounded-2xl border border-[#D7E2EA]/20 px-5 py-4 sm:px-6 sm:py-5 transition-colors duration-300 hover:bg-[#D7E2EA]/5 hover:border-[#D7E2EA]/40"
              >
                <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background:
                      'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                  }}
                >
                  <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                </span>
                <span className="flex flex-col">
                  <span className="text-[#D7E2EA]/50 uppercase tracking-widest text-xs">
                    {item.label}
                  </span>
                  <span className="text-[#D7E2EA] font-medium text-sm sm:text-base break-all">
                    {item.value}
                  </span>
                </span>
              </a>
            </FadeIn>
          );
        })}
      </div>

      <FadeIn delay={0.3}>
        <ContactButton href="mailto:kintwichy@gmail.com" />
      </FadeIn>
    </section>
  );
}
