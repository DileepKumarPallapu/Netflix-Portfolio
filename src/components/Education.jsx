import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const education = [
  {
    period: '2024 — 2028',
    level: 'B.TECH',
    title: 'Computer Science & Engineering',
    school: 'Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology',
    place: 'Chennai, Tamil Nadu',
    note: 'Current undergraduate journey focused on software engineering, AI/ML, algorithms, databases and modern web development.'
  },
  {
    period: '2022 — 2024',
    level: 'INTERMEDIATE',
    title: 'Intermediate',
    school: 'Sri Chaitanya Junior College',
    place: 'Andhra Pradesh',
    note: 'Senior secondary education with Mathematics, Physics and Chemistry.'
  },
  {
    period: '2022',
    level: 'SSC',
    title: 'Secondary School Certificate',
    school: "Kids Patasala High School",
    place: 'Andhra Pradesh',
    note: 'Completed secondary school education.'
  }
];

const Education = () => {
  const ref = useRef(null);

  useEffect(() => {
    const cards = ref.current?.querySelectorAll('.edu-card');
    if (!cards?.length) return;
    gsap.fromTo(cards, { y: 70, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: 'power4.out',
      scrollTrigger: { trigger: ref.current, start: 'top 72%' }
    });
  }, []);

  return (
    <section id="education" ref={ref} className="relative bg-[#050505] text-white py-28 px-6 md:px-12 overflow-hidden">
      <div className="absolute -left-40 top-20 w-96 h-96 bg-red-700/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-black/80 border border-red-600/40 text-xs font-mono uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="text-red-500 font-bold">EPISODE 03</span><span className="text-white/40">|</span><span>EDUCATION ARCHIVE</span>
          </div>
          <h2 className="mt-5 text-4xl md:text-6xl font-black tracking-tighter">ACADEMIC <span className="text-red-600">TIMELINE.</span></h2>
          <p className="mt-4 max-w-2xl text-white/55">The academic foundation behind Pallapu Dileep Kumar's engineering and technology journey.</p>
        </div>

        <div className="relative ml-2 md:ml-6">
          <div className="absolute left-3 md:left-5 top-3 bottom-3 w-px bg-gradient-to-b from-red-600 via-red-600/40 to-transparent" />
          <div className="space-y-6">
            {education.map((item, index) => (
              <article key={item.period + item.school} className="edu-card relative pl-10 md:pl-16">
                <span className="absolute left-0 top-8 w-7 h-7 md:w-11 md:h-11 rounded-full bg-[#0b0b0b] border-2 border-red-600 flex items-center justify-center text-[10px] md:text-xs font-black text-red-500 shadow-[0_0_25px_rgba(229,9,20,.2)]">0{index + 1}</span>
                <div className="group rounded-[2rem] bg-[#111]/90 border border-white/10 p-7 md:p-9 hover:border-red-600/50 transition-all duration-500 hover:-translate-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                    <span className="text-red-500 text-xs font-mono tracking-[0.25em] font-bold">{item.level}</span>
                    <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-white/55">{item.period}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black">{item.title}</h3>
                  <p className="mt-2 text-base md:text-lg font-semibold text-white/85">{item.school}</p>
                  <p className="mt-1 text-xs font-mono uppercase tracking-widest text-white/35">{item.place}</p>
                  <p className="mt-5 text-sm leading-relaxed text-white/55 max-w-3xl">{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
