import { FaReact } from "react-icons/fa";
import { GithubIcon, LinkedInIcon, LeetCodeIcon, GFGIcon } from './icons/SocialIcons';

const socials = [
  { label: 'GitHub', href: 'https://github.com/Avisrivastava15', Icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/avi-srivastava1508/', Icon: LinkedInIcon },
  { label: 'LeetCode', href: 'https://leetcode.com/u/avisri546/', Icon: LeetCodeIcon },
  { label: 'GFG', href: 'https://www.geeksforgeeks.org/profile/avisrivastava15?tab=activity', Icon: GFGIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/6 bg-[#0c1220] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm flex items-center gap-1.5">
          Built with{' '}
          
          <FaReact size={16} className="text-cyan-400 animate-spin" />
          {' '}by{' '}
          <span className="text-slate-300 font-medium">Avi Srivastava</span>
          {' '}&mdash; {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-4">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-slate-600 hover:text-slate-300 transition-colors duration-200"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
