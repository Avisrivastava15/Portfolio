import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedInIcon, LeetCodeIcon, GFGIcon } from './icons/SocialIcons';
import emailjs from '@emailjs/browser';

const socials = [
  { label: 'GitHub', href: 'https://github.com/Avisrivastava15', Icon: GithubIcon, color: 'hover:text-white hover:border-white/30' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/avi-srivastava1508/', Icon: LinkedInIcon, color: 'hover:text-sky-400 hover:border-sky-400/40' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/avisri546/', Icon: LeetCodeIcon, color: 'hover:text-orange-400 hover:border-orange-400/40' },
  { label: 'GFG', href: 'https://www.geeksforgeeks.org/profile/avisrivastava15', Icon: GFGIcon, color: 'hover:text-green-400 hover:border-green-400/40' },
];

export default function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   // Simulate sending — replace with your actual email service
  //   await new Promise((r) => setTimeout(r, 1200));
  //   setLoading(false);
  //   setSent(true);
  //   setForm({ name: '', email: '', message: '' });
  // };
  

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    await emailjs.send(
      'service_gdeue1q',      
      'template_gbmggmf',    
      {
        from_name: form.name,
        from_email: form.email, 
        message: form.message,
      },
      'bwuwZ7E68QIu-hKC7'       
    );

    setSent(true);
    setForm({ name: '', email: '', message: '' });
  } catch (error) {
    console.error('FAILED...', error);
    alert('Something went wrong. Try again.');
}
  

  setLoading(false);
};

  return (
    <section id="contact" className="py-28 px-6" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">Let's Connect</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Open to Collaborate</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Whether it's a full-time role, a freelance project, or just a chat about tech — my inbox is always open.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left info */}
          <div
            className={`transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/8">
                  <Mail size={18} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">Email me at</p>
                  <a
                    href="mailto:avisri546@gmail.com"
                    className="text-white font-medium hover:text-cyan-400 transition-colors"
                  >
                    avisri546@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/8">
                  <MapPin size={18} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-1">Based in</p>
                  <p className="text-white font-medium">Gurgaon, India</p>
                  <p className="text-slate-500 text-sm">Open to remote & relocation</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-slate-400 text-sm mb-4">Find me on</p>
              <div className="flex gap-3">
                {socials.map(({ label, href, Icon, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 text-slate-400 transition-all duration-300 hover:scale-110 ${color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability card */}
            <div className="mt-10 p-5 rounded-2xl border border-green-500/20 bg-green-500/5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 font-semibold text-sm">Available for opportunities</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Currently open to full-time SDE roles and interesting freelance projects.
                Response time: within 24 hours.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div
            className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center rounded-2xl border border-green-500/20 bg-green-500/5">
                <CheckCircle size={48} className="text-green-400 mb-4" />
                <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-slate-400">Thanks for reaching out. I'll get back to you soon.</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-cyan-400 text-sm hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm text-slate-400 mb-2" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/ text-black placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/6 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/ text-black placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/6 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about the opportunity or project..."
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/ text-black placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/6 transition-all duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 text-white font-semibold flex items-center justify-center gap-2 hover:from-cyan-400 hover:to-sky-500 transition-all duration-200 shadow-lg shadow-cyan-500/20 disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-0.5"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
