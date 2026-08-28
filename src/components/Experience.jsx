import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const internships = [
  { role: 'Python Development Intern', company: 'zAALIMA Technology', period: 'Jul 2026 — Oct 2026', status: 'CURRENT', details: 'Remote internship focused on Python development and practical project exposure.' },
  { role: 'Web Development Intern', company: 'INFINITY CONNECTS MEDIA', period: 'Jun 2026 — Jul 2026', status: 'COMPLETED', details: 'Web development internship with hands-on experience building and improving web solutions.' },
  { role: 'Prompt Engineer Intern', company: 'SkillCraft Technology', period: 'May 2025 — Present', status: 'CURRENT', details: 'Worked on AI-driven solutions, prompt optimization and Generative AI workflows.' },
  { role: 'Artificial Intelligence Intern', company: 'TopGrade Innovation', period: 'Mar 2026 — May 2026', status: 'COMPLETED', details: 'Worked on Python-based AI applications, software development and testing activities.' },
  { role: 'AI & Machine Learning Intern', company: 'QSkills', period: 'Nov 2025 — Jan 2026', status: 'COMPLETED', details: 'Applied Python to AI/ML tasks, datasets, model development and evaluation workflows.' },
  { role: 'Front-End Development Intern', company: 'QSkills', period: 'Feb 2025 — May 2025', status: 'COMPLETED', details: 'Developed responsive web interfaces and improved user experience and interface usability.' }
];

const Experience = () => {
  const ref = useRef(null);
  useEffect(() => {
    const cards = ref.current?.querySelectorAll('.exp-card');
    if (!cards?.length) return;
    gsap.fromTo(cards, { y: 60, opacity: 0, scale: .97 }, { y: 0, opacity: 1, scale: 1, duration: .8, stagger: .1, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 72%' } });
  }, []);

  return (
    <section id="experience" ref={ref} className="relative bg-[#050505] text-white py-28 px-6 md:px-12 overflow-hidden">
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-red-700/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-black/80 border border-red-600/40 text-xs font-mono uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="text-red-500 font-bold">EPISODE 04</span><span className="text-white/40">|</span><span>INTERNSHIP SEASON</span>
          </div>
          <h2 className="mt-5 text-4xl md:text-6xl font-black tracking-tighter">REAL-WORLD <span className="text-red-600">EXPERIENCE.</span></h2>
          <p className="mt-4 max-w-2xl text-white/55">A chronological record of internships across web development, AI/ML, Python and prompt engineering.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {internships.map((item, index) => (
            <article key={`${item.company}-${item.role}`} className="exp-card group rounded-[2rem] bg-[#111]/90 border border-white/10 p-7 md:p-8 hover:border-red-600/60 transition-all duration-500 relative overflow-hidden">
              <div className="absolute -right-8 -top-10 text-[8rem] font-black text-white/[0.025]">{String(index + 1).padStart(2, '0')}</div>
              <div className="relative z-10 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[.25em] text-red-500 font-bold">{item.status}</p>
                  <h3 className="mt-3 text-xl md:text-2xl font-black">{item.role}</h3>
                  <p className="mt-1 text-white/80 font-semibold">{item.company}</p>
                </div>
                <span className="shrink-0 px-3 py-1.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-white/50">{item.period}</span>
              </div>
              <p className="relative z-10 mt-6 text-sm leading-relaxed text-white/55">{item.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
