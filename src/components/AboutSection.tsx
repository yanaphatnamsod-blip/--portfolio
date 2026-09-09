import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';

const MOON_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png';
const OBJECT_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png';
const LEGO_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png';
const GROUP_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png';

const ABOUT_TEXT_EN =
  "I’m a student who enjoys learning and experimenting with AI, exploring how it can be applied to create value in work, design, and digital projects. I enjoy discovering new technologies and finding practical ways to use them to solve problems, improve workflows, and turn ideas into reality.";

const ABOUT_TEXT_TH =
  'ผมเป็นนักศึกษาที่ชื่นชอบการเรียนรู้และทดลองใช้ AI เพื่อนำมาประยุกต์ใช้ให้เกิดประโยชน์ในการทำงาน การออกแบบ และการสร้างสรรค์ผลงานดิจิทัล ผมสนุกกับการเรียนรู้เทคโนโลยีใหม่ ๆ และมองหาวิธีนำมันมาใช้เพื่อช่วยแก้ปัญหา เพิ่มประสิทธิภาพการทำงาน และเปลี่ยนไอเดียให้เกิดขึ้นจริง';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20"
    >
      {/* Decorative corner images */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%]"
      >
        <img
          src={MOON_URL}
          alt=""
          className="w-[120px] sm:w-[160px] md:w-[210px]"
        />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]"
      >
        <img
          src={OBJECT_URL}
          alt=""
          className="w-[100px] sm:w-[140px] md:w-[180px]"
        />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]"
      >
        <img
          src={LEGO_URL}
          alt=""
          className="w-[120px] sm:w-[160px] md:w-[210px]"
        />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]"
      >
        <img
          src={GROUP_URL}
          alt=""
          className="w-[130px] sm:w-[170px] md:w-[220px]"
        />
      </FadeIn>

      {/* Heading */}
      <FadeIn delay={0} y={40} className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          About me
        </h2>

        <div className="flex flex-col items-center gap-6 max-w-[560px]">
          <AnimatedText
            text={ABOUT_TEXT_EN}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />

          {/* Thai translation rendered as plain text (not char-split)
              so Thai vowel/tone-mark shaping renders correctly */}
          <FadeIn delay={0.2}>
            <p
              className="text-[#D7E2EA]/80 font-light text-center leading-relaxed"
              style={{ fontSize: 'clamp(0.9rem, 1.7vw, 1.15rem)' }}
            >
              {ABOUT_TEXT_TH}
            </p>
          </FadeIn>
        </div>
      </FadeIn>

      <div className="mt-16 sm:mt-20 md:mt-24">
        <ContactButton href="#contact" />
      </div>
    </section>
  );
}
