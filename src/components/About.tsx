import { useInView } from '../hooks/useInView';
import { Code2, Lightbulb, Rocket, Users } from 'lucide-react';
import profileImg from '../assets/images/download2.png';

const traits = [
  { icon: Code2, title: 'Clean Code', desc: 'I write maintainable, well-documented code that scales.' },
  { icon: Lightbulb, title: 'Problem Solver', desc: 'I enjoy breaking down complex challenges into elegant solutions.' },
  { icon: Rocket, title: 'Fast Learner', desc: 'I pick up new technologies quickly and adapt to any stack.' },
  { icon: Users, title: 'Team Player', desc: 'I thrive in collaborative environments and love mentoring.' },
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-28 px-6" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
            Crafting digital experiences<br />
            <span className="text-slate-400 font-normal">with purpose & precision.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: photo placeholder */}
          <div
            className={`transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div className="relative">
              <div className="w-full aspect-square max-w-sm mx-auto rounded-2xl bg-gradient-to-br from-cyan-500/20 to-sky-600/10 border border-white/10 flex items-center justify-center overflow-hidden">
                <img 
                src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-xl border border-cyan-500/20 bg-cyan-500/5" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl border border-sky-500/20 bg-sky-500/5" />
            </div>
          </div>

          {/* Right: text */}
          <div
            className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              I'm a passionate software developer with a knack for building full-stack web applications.
              With a strong foundation in computer science and hands-on experience in modern frameworks,
              I turn ideas into impactful digital products.
            </p>
            <p className="text-slate-400 leading-relaxed mb-10">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source,
              or sharpening my DSA skills on competitive programming platforms. I believe in writing code
              that's not just functional, but a joy to maintain.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {traits.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  className={`p-4 rounded-xl border border-white/8 bg-white/3 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300 group cursor-default transition-all duration-700`}
                  style={{ transitionDelay: `${(i + 3) * 100}ms` }}
                >
                  <Icon className="w-5 h-5 text-cyan-400 mb-2 group-hover:scale-110 transition-transform" />
                  <h3 className="text-white font-semibold text-sm mb-1">{title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
