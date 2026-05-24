import { useEffect, useState } from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { GithubIcon, LinkedInIcon, LeetCodeIcon, GFGIcon } from './icons/SocialIcons';
import { GrResume } from 'react-icons/gr';
import Resume from '../assets/Resume.pdf'

const roles = ['Full Stack Developer', 'Problem Solver', 'Open Source Enthusiast', 'CS Graduate'];

const socials = [
  { label: 'GitHub', href: 'https://github.com/Avisrivastava15', Icon: GithubIcon, color: 'hover:text-white' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/avi-srivastava1508/', Icon: LinkedInIcon, color: 'hover:text-sky-400' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/avisri546/', Icon: LeetCodeIcon, color: 'hover:text-orange-400' },
  { label: 'GFG', href: 'https://www.geeksforgeeks.org/profile/avisrivastava15?tab=activity', Icon: GFGIcon, color: 'hover:text-green-400' },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-sky-600/8 blur-[100px] pointer-events-none" />

      <div
        className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-sm font-medium mb-6 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          Available for opportunities
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
            Avi Srivastava
          </span>
        </h1>

        <div className="text-2xl md:text-3xl text-slate-300 font-light mb-6 h-10 flex items-center justify-center gap-2">
          <span>{displayed}</span>
          <span className="w-0.5 h-8 bg-cyan-400 animate-blink inline-block" />
        </div>

        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          I build elegant, performant web applications and love turning complex problems into simple,
          beautiful solutions. Passionate about clean code and great user experiences.
        </p>

        {/* Social links */}
        <div className="flex items-center justify-center gap-5 mb-10">
          {socials.map(({ label, href, Icon, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`group relative w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 ${color} transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:scale-110 hover:-translate-y-1`}
            >
              <Icon className="w-5 h-5" />
              <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {label}
              </span>
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 text-white font-semibold hover:from-cyan-400 hover:to-sky-500 transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href={Resume}
            download
            className="px-7 py-3 rounded-xl border border-white/15 bg-white/5 text-white font-semibold hover:bg-white/10 hover:border-white/25 transition-all duration-200 flex items-center gap-2 hover:-translate-y-0.5"
          >
            <Download size={16} />
            Resume
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-cyan-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </a>
    </section>
  );
}
