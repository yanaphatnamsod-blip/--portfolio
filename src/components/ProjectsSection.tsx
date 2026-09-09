import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';

interface Project {
  number: string;
  name: string;
  category: string;
  description: string;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
}

// NOTE: these are concept / speculative case studies (not real client work),
// used to demonstrate the kind of projects that could realistically be built.
// Images are real, freely-licensed stock photography from Picsum (picsum.photos),
// which sources from Unsplash photographers under a free-to-use license.
// The "seed" keeps each photo fixed instead of changing on every reload.
// Swap any of these URLs for your own real project screenshots whenever ready.
const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'EcoLeaf Brand Identity',
    category: 'Concept · Branding',
    description:
      'Brand identity concept for a skincare line made from natural, locally-sourced materials — logo, packaging direction, and an earthy color palette.',
    col1Image1: 'https://picsum.photos/seed/ecoleaf-jar/640/460',
    col1Image2: 'https://picsum.photos/seed/ecoleaf-leaf/640/680',
    col2Image: 'https://picsum.photos/seed/ecoleaf-hero/960/1100',
  },
  {
    number: '02',
    name: 'StudyMind AI Tutor',
    category: 'Concept · Education',
    description:
      'Landing page concept for an AI-powered tutoring platform that adapts lessons to each student\u2019s pace and learning style.',
    col1Image1: 'https://picsum.photos/seed/studymind-laptop/640/460',
    col1Image2: 'https://picsum.photos/seed/studymind-desk/640/680',
    col2Image: 'https://picsum.photos/seed/studymind-hero/960/1100',
  },
  {
    number: '03',
    name: 'PixelForge AI Studio',
    category: 'Concept · SaaS',
    description:
      'Website concept for an AI-assisted creative studio offering automated graphic and web design tools for small businesses.',
    col1Image1: 'https://picsum.photos/seed/pixelforge-screen/640/460',
    col1Image2: 'https://picsum.photos/seed/pixelforge-tool/640/680',
    col2Image: 'https://picsum.photos/seed/pixelforge-hero/960/1100',
  },
];

const TOTAL_CARDS = PROJECTS.length;

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (TOTAL_CARDS - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky top-24 md:top-32 h-[85vh]"
      style={{ top: `${index * 28}px` }}
    >
      <motion.div
        style={{ scale }}
        className="h-full overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6"
      >
        {/* Top row */}
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex items-baseline gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1 max-w-md">
              <span className="text-[#D7E2EA] uppercase tracking-widest text-xs sm:text-sm opacity-60">
                {project.category}
              </span>
              <span className="text-[#D7E2EA] font-medium uppercase text-lg sm:text-2xl md:text-3xl">
                {project.name}
              </span>
              <p className="text-[#D7E2EA]/60 font-light text-xs sm:text-sm leading-relaxed mt-1 max-w-sm">
                {project.description}
              </p>
            </div>
          </div>

          <LiveProjectButton />
        </div>

        {/* Bottom row: image grid */}
        <div className="flex gap-3 sm:gap-4 flex-1 min-h-0">
          <div className="flex flex-col gap-3 sm:gap-4" style={{ width: '40%' }}>
            <img
              src={project.col1Image1}
              alt={`${project.name} preview 1`}
              loading="lazy"
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.col1Image2}
              alt={`${project.name} preview 2`}
              loading="lazy"
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] flex-1"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          <div style={{ width: '60%' }}>
            <img
              src={project.col2Image}
              alt={`${project.name} preview 3`}
              loading="lazy"
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20"
    >
      <FadeIn>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      <div className="flex flex-col gap-8">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
