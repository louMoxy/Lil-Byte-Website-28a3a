import Link from 'next/link';
import { useState } from 'react';

import Layout from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import RetroWindowCard from '../components/RetroWindowCard';
import Doodles from '../components/Doodles';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import { BugIcon, GameIcon, BlogIcon, ContactIcon, HeartIcon, StarIcon, PlantIcon, CodeIcon } from '../components/CuteIcons';
import { getGames, getPosts } from '../utils/mdx-utils';

export default function Index({ posts, globalData, latestGames, latestPosts }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Layout>
      <SEO title="Lil Byte Games - Louise" description="Solo indie game developer learning in public and making small, weird, sometimes broken games along the way." />
      
      {/* Hero Section */}
      <section className="w-full text-center py-20 relative pastel-grid">
        <Doodles />
        <div className="max-w-4xl mx-auto px-6 relative">
          <div className="sticker-card">
            <div className="sticker-content">
              <p className="text-xl md:text-2xl mb-8 text-black/70 leading-relaxed">
              Hi! I’m teaching myself game development from scratch, and this is where I share everything I make — the good, the bad, and the “why is it doing that?” moments.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="#games" className="btn-doodle btn-doodle-primary">
                  <span className="doodle-icon" style={{ color: 'var(--color-text-primary)' }}><svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="9" width="18" height="8" rx="4"/><rect x="6.2" y="7" width="2.4" height="3" rx="1"/><rect x="15.4" y="7" width="2.4" height="3" rx="1"/><rect x="8" y="11" width="3" height="1.6" rx="0.4" fill="#fff"/><rect x="9.2" y="9.8" width="1.6" height="3" rx="0.4" fill="#fff"/><circle cx="15.8" cy="12" r="1.1" fill="#fff"/><circle cx="18" cy="13.4" r="1.1" fill="#fff"/></svg></span>
                  Play My Games
                </Link>
                <Link href="/posts" className="btn-doodle btn-doodle-secondary">
                  <BlogIcon className="w-5 h-5 doodle-icon" />
                  Read the Blog
                </Link>
                <Link href="#contact" className="btn-doodle btn-doodle-surface">
                  <ContactIcon className="w-5 h-5 doodle-icon" />
                  Say Hi
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-20 border-t border-white/10 relative">
        <Doodles opacity={0.25} />
        <div className="max-w-4xl mx-auto px-6 relative">
          <div>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                I build lots of small games in Unity to learn as I go. Some end up cute. Some end up chaotic. And some… well, let’s just say they’re “creative.”
              </p>
              <p className="text-lg leading-relaxed">
                <strong>Lil Byte Games</strong> is my little corner of the internet for devlogs, playable prototypes, and the occasional bug.
              </p>
              <div className="bg-gradient-to-r from-gradient-1/20 to-gradient-2/20 backdrop-blur border border-white/10 rounded-lg p-6">
                <p className="text-lg font-medium">If you’re into indie games, learning new things, or just watching a complete beginner stumble their way forward — you’re in the right place.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="w-full py-20 border-t border-white/10 relative">
        <Doodles opacity={0.25} />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-3">
              <GameIcon className="w-12 h-12 text-primary" animated />
              Try Something I Made
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              Everything here is small, quick, and made with love (and a lot of Ctrl+Z). I put them up so you can play them right in your browser — no downloads, no fuss.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {latestGames?.map((g) => {
              const slug = g.filePath.replace(/\.mdx?$/, '');
              return (
                <RetroWindowCard key={slug} title={g.data.title} href={`/games/${slug}`}>
                  <div className="aspect-video flex items-center justify-center mb-4 overflow-hidden" style={{ background: '#FFF', border: '2px solid var(--color-text-primary)', borderRadius: '12px' }}>
                    {g.data.image ? (
                      <img src={g.data.image} alt={g.data.title} className="w-full h-full object-cover" />
                    ) : (
                      <GameIcon className="w-12 h-12 doodle-icon text-black" />
                    )}
                  </div>
                  <p className="opacity-80">{g.data.description}</p>
                  <div className="mt-4">
                    <button className="btn-doodle btn-doodle-surface">Play →</button>
                  </div>
                </RetroWindowCard>
              );
            })}
          </div>

          <div className="text-center">
            <Link href="/games" className="btn-doodle btn-doodle-primary">
               Play My Games →
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="w-full py-20 border-t border-white/10 relative">
        <Doodles opacity={0.25} />
        <div className="max-w-4xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-3">
              <BlogIcon className="w-12 h-12 text-secondary" animated />
              Behind the Scenes
                </h2>
            <p className="text-xl leading-relaxed opacity-90">
              Want to know what I’m working on, what I’ve broken lately, or what I’ve just learned? That’s all in the blog.
            </p>
          </div>

          <div className="space-y-6 mb-12">
            {latestPosts.map((p) => {
              const slug = p.filePath.replace(/\.mdx?$/, '');
              return (
                <RetroWindowCard key={slug} title={p.data.date} href={`/posts/${slug}`}>
                  <p className="opacity-80">{p.data.description}</p>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="text-xs opacity-70">{p.data.title}</span>
                    <ArrowIcon className="w-4 h-4" />
                  </div>
                </RetroWindowCard>
              );
            })}
          </div>

          <div className="text-center">
            <Link href="/posts" className="inline-flex btn-doodle btn-doodle-secondary">
               Read the Blog →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-20 border-t border-white/10 relative">
        <Doodles opacity={0.2} />
        <div className="max-w-2xl mx-auto px-6 relative">
          <RetroWindowCard title="Let’s Chat" titlebarColor="#C8E7FF" bodyColor="#FFF7EB">
            <p className="text-lg mb-6">Whether you’ve got advice, questions, or just want to say hi — I’d love to hear from you.</p>

            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              className="space-y-6"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p style={{ display: 'none' }}>
                <label>Don&apos;t fill this out if you&apos;re human: <input name="bot-field" /></label>
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/70 border-2 border-black/40 focus:border-black focus:outline-none transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg.white/70 border-2 border-black/40 focus:border-black focus:outline-none transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/70 border-2 border-black/40 focus:border-black focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Tell me about your game ideas, ask questions, or just say hi!"
                />
              </div>
              
              <div className="text-center">
                <button type="submit" className="btn-doodle btn-doodle-primary">Contact Me →</button>
              </div>
            </form>
          </RetroWindowCard>
        </div>
      </section>
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();
  const latestGames = getGames().slice(0, 3);
  const latestPosts = posts.slice(0, 3);
  return { props: { posts, globalData, latestGames, latestPosts } };
}
