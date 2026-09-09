import { useRef, type CSSProperties } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

interface CharProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function Char({ char, index, total, progress }: CharProps) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      {/* invisible placeholder preserves layout width */}
      <span style={{ visibility: 'hidden' }}>{char}</span>
      <motion.span style={{ position: 'absolute', left: 0, top: 0, opacity }}>
        {char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  // Split into words so line-wrapping only happens at natural spaces,
  // while each character inside a word still animates individually.
  const words = text.split(' ');
  const totalChars = text.length;
  let globalIndex = 0;

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, wordIdx) => {
        const chars = word.split('').map((char) => {
          const el = (
            <Char
              key={globalIndex}
              char={char}
              index={globalIndex}
              total={totalChars}
              progress={scrollYProgress}
            />
          );
          globalIndex += 1;
          return el;
        });

        const isLast = wordIdx === words.length - 1;
        // account for the space character in the global running index too
        if (!isLast) globalIndex += 1;

        return (
          <span key={wordIdx} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {chars}
            {!isLast ? '\u00A0' : ''}
          </span>
        );
      })}
    </p>
  );
}
