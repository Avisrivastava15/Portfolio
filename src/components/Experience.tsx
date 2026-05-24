import { useInView } from '../hooks/useInView';
import { Briefcase, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Capgemini',
    location: 'Gurgaon, India',
    period: 'Jan 2026 – Present',
    type: 'Full-time',
    description: [
      'Worked on Linux-based production systems, utilizing knowledge of C++, multithreading socket programming, and SQL to understand system behavior, debug issues, and ensure data integrity',
      'Ensured reliable system performance by validating call routing under increased traffic (˜ 20%),mainaining consistency and minimizing failures in a real-time environment.',
      ' Improved system interface performance and responsiveness by optimizing handling of large dataobjects, reducing latency and enhancing overall usability.',
      'Analyzed and debugged production service workflows, tracing execution paths and resolving configuration issues impacting request processing and routing behavior.',
    ],
    tech: ['Linux', 'C++', 'Socket Programming', 'SQL'],
  },
];

export default function Experience() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="py-28 px-6 bg-[#0c1220]" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-4xl mx-auto">
        <div
          className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">Career</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Work Experience</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/60 via-sky-500/30 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`relative pl-16 transition-all duration-700 ${
                  inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-1 w-4 h-4 -translate-x-1/2 rounded-full border-2 border-cyan-400 bg-[#0a0f1e] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                </div>

                <div className="group p-6 rounded-2xl border border-white/8 bg-white/2 hover:border-cyan-500/25 hover:bg-white/4 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-white font-bold text-xl mb-1">{exp.role}</h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
                        <span className="flex items-center gap-1.5">
                          <Briefcase size={13} className="text-cyan-500" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={13} className="text-cyan-500" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="block text-sm text-slate-300 font-medium">{exp.period}</span>
                      <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-xs bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.description.map((point, j) => (
                      <li key={j} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                        <span className="text-cyan-500 mt-1.5 flex-shrink-0">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-xs bg-sky-500/8 border border-sky-500/15 text-sky-300 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
