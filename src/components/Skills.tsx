import { useInView } from '../hooks/useInView';

const skillGroups = [
  {
    category: 'Frontend',
    color: 'cyan',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML/CSS', 'Redux'],
  },
  {
    category: 'Backend',
    color: 'sky',
    skills: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'Database',
    color: 'blue',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Supabase', 'Prisma'],
  },
  {
    category: 'DevOps & Tools',
    color: 'teal',
    skills: ['Docker', 'AWS', 'Git', 'CI/CD', 'Linux', 'Nginx'],
  },
  {
    category: 'CS Fundamentals',
    color: 'cyan',
    skills: ['DSA', 'System Design', 'OOP', 'OS', 'DBMS', 'Computer Networks'],
  },
  {
    category: 'Soft Skills',
    color: 'sky',
    skills: ['Problem Solving', 'Leadership', 'Communication', 'Agile', 'Code Review', 'Documentation'],
  },
];

const colorMap: Record<string, { border: string; bg: string; text: string; heading: string }> = {
  cyan: {
    border: 'border-cyan-500/20',
    bg: 'bg-cyan-500/5',
    text: 'text-cyan-300',
    heading: 'text-cyan-400',
  },
  sky: {
    border: 'border-sky-500/20',
    bg: 'bg-sky-500/5',
    text: 'text-sky-300',
    heading: 'text-sky-400',
  },
  blue: {
    border: 'border-blue-500/20',
    bg: 'bg-blue-500/5',
    text: 'text-blue-300',
    heading: 'text-blue-400',
  },
  teal: {
    border: 'border-teal-500/20',
    bg: 'bg-teal-500/5',
    text: 'text-teal-300',
    heading: 'text-teal-400',
  },
};

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="py-28 px-6" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">Expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Skills &{' '}
            <span className="text-slate-400 font-normal">Technologies</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => {
            const c = colorMap[group.color];
            return (
              <div
                key={group.category}
                className={`p-6 rounded-2xl border ${c.border} ${c.bg} hover:border-opacity-50 transition-all duration-500 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <h3 className={`${c.heading} font-semibold text-sm tracking-widest uppercase mb-4`}>
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium ${c.text} bg-white/5 border border-white/8 hover:border-white/15 hover:bg-white/10 transition-all duration-200 cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
