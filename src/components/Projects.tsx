import { useInView } from '../hooks/useInView';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './icons/SocialIcons';

const projects = [
  {
    title: 'Audio Processing Web App',
    description:'Built a Flask-based web app that processes audio by applying noise reduction, high-pass filtering, normalization, and dynamic range compression, allowing users to upload files and download cleaner, enhanced audio output.',
    image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['Python','Flask','librosa','noisereduce','Typescript','Tailwind CSS'],
    github: 'https://github.com/Avisrivastava15/Audio-Enhance-Web-App/tree/main',
    live: 'https://github.com/Avisrivastava15/Audio-Enhance-Web-App/tree/main',
    featured: true,
    label: 'Audio Processing',
  },
  {
    title: 'AlgoViz',
    description:
      'Interactive visualizations for 50+ data structures and algorithms. Supports step-by-step animation, custom input, and complexity analysis.',
    image: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Supabase Auth','PostgreSQL'],
    github: '',
    live: 'https://algo-viz-fa61.onrender.com',
    featured: false,
    label: 'Educational',
  },
  {
    title: 'Kanban Board',
    description:
    'A web-based task management application inspired by agile methodologies, featuring drag-and-drop functionality for organizing tasks across multiple workflow stages with dynamic state updates.',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['HTML', 'CSS', 'javascript'],
    github: 'https://github.com/Avisrivastava15/Kanban-Board',
    live: 'https://kanban-board-pnfg.onrender.com',
    featured: false,
    label: 'Productivity & Task Management Tool',
  },
 
   {
    title: 'Speech Bridge',
    description:
    'Built Speech Bridge, a bidirectional audio-text conversion tool that transcribes speech to text and generates natural-sounding audio from text, enabling accessible and efficient communication.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['HTML', 'CSS', 'Javascript', 'Web Speech API'],
    github: 'https://github.com/Avisrivastava15/Speech-Bridge/tree/main',
    live: 'https://speech-bridge.onrender.com',
    featured: true,
    label: 'AI-Powered Productivity Tool',
  },
];

export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="py-28 px-6 bg-[#0c1220]" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Featured{' '}
            <span className="text-slate-400 font-normal">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group relative rounded-2xl border border-white/8 bg-white/2 overflow-hidden hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Project image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-65 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1220] via-[#0c1220]/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 border border-cyan-500/30 text-cyan-300">
                    {project.label}
                  </span>
                </div>
                {/* Hover links overlay */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-black/60 backdrop-blur border border-white/10 text-white hover:text-cyan-400 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live demo"
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-black/60 backdrop-blur border border-white/10 text-white hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-white font-bold text-xl mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 rounded text-xs font-mono bg-sky-500/8 border border-sky-500/15 text-sky-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${inView ? 'opacity-100' : 'opacity-0'}`}
        >
          <a
            href="https://github.com/Avisrivastava15?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 text-slate-300 hover:text-white hover:border-white/25 hover:bg-white/5 transition-all duration-200 text-sm font-medium"
          >
            <GithubIcon className="w-4 h-4" />
            View all projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
