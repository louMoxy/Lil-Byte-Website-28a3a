import Link from 'next/link';
import { useState } from 'react';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import { BugIcon, GameIcon, BlogIcon, ContactIcon, HeartIcon, StarIcon, PlantIcon, CodeIcon } from '../components/CuteIcons';

export default function Index({ posts, globalData }) {
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
      <Header name="Lil Byte Games" />
      
      {/* Hero Section */}
      <section className="w-full text-center py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-gradient-2 to-gradient-3 bg-clip-text text-transparent flex items-center justify-center gap-4">
            <BugIcon className="w-16 h-16 md:w-20 md:h-20 text-primary" animated />
            A little byte of joy
        </h1>
          <p className="text-xl md:text-2xl mb-12 opacity-80 leading-relaxed">
            Hi, I'm Louise — a solo indie game developer learning in public and making small, weird, sometimes broken games along the way.
          </p>
          
          {/* Floating decorative icons */}
          <div className="absolute top-10 left-10 opacity-20">
            <StarIcon className="w-8 h-8 text-accent-3" animated />
          </div>
          <div className="absolute top-20 right-16 opacity-20">
            <HeartIcon className="w-6 h-6 text-primary" animated />
          </div>
          <div className="absolute bottom-10 left-20 opacity-20">
            <PlantIcon className="w-10 h-10 text-accent-2" animated />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="#games" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-colors duration-200 flex items-center gap-2 group">
              <GameIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              Play My Games
            </Link>
            <Link href="/posts" className="bg-white/10 hover:bg-white/20 dark:bg-black/30 dark:hover:bg-black/40 backdrop-blur border border-white/20 px-8 py-4 rounded-full font-semibold transition-colors duration-200 flex items-center gap-2 group">
              <BlogIcon className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform duration-200" />
              Read the Blog
            </Link>
            <Link href="#contact" className="bg-secondary hover:bg-secondary/80 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-200 flex items-center gap-2 group">
              <ContactIcon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-3">
              <PlantIcon className="w-12 h-12 text-accent-2" animated />
              Welcome!
                </h2>
            <p className="text-xl leading-relaxed opacity-90">
              I'm on a journey to become a game developer — and I'm sharing every step.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Under the name <strong>Lil Byte Games</strong>, I'm teaching myself game dev from scratch by building and finishing small games, starting with a personal challenge: remake 10 classic games in Unity.
              </p>
              <p className="text-lg leading-relaxed">
                Some of these games will be cute, some will be chaotic, and all of them will help me grow. If you're learning too — or just love seeing tiny games come to life — you're in the right place.
              </p>
              <div className="bg-gradient-to-r from-gradient-1/20 to-gradient-2/20 backdrop-blur border border-white/10 rounded-lg p-6">
                <p className="text-lg font-medium">
                  💡 Everything you see here was made with curiosity, trial and error, and a lot of Ctrl+Z.
                </p>
              </div>
            </div>
            <div className="bg-white/5 dark:bg-black/20 rounded-lg p-8 backdrop-blur border border-white/10">
              <h3 className="text-2xl font-bold mb-4">The Journey So Far</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-primary rounded-full"></span>
                  Learning Unity from zero
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-gradient-2 rounded-full"></span>
                  10 Classic Games Challenge
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-gradient-3 rounded-full"></span>
                  Sharing every mistake
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-gradient-4 rounded-full"></span>
                  Building in public
            </li>
        </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="w-full py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-3">
              <GameIcon className="w-12 h-12 text-primary" animated />
              Try What I've Made So Far
            </h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              I'm learning by doing — and shipping games as I go. They're small, imperfect, and built with love.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 dark:bg-black/30 backdrop-blur rounded-lg overflow-hidden border border-white/10 hover:border-primary/50 transition-colors duration-200">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-gradient-2/20 flex items-center justify-center">
                <span className="text-6xl">🕹️</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Game #1</h3>
                <p className="opacity-70 mb-4">Coming soon... My first Unity creation!</p>
                <button className="bg-primary/20 hover:bg-primary/30 px-4 py-2 rounded-lg transition-colors duration-200">
                  Play →
                </button>
              </div>
            </div>

            <div className="bg-white/10 dark:bg-black/30 backdrop-blur rounded-lg overflow-hidden border border-white/10 hover:border-gradient-2/50 transition-colors duration-200">
              <div className="aspect-video bg-gradient-to-br from-gradient-2/20 to-gradient-3/20 flex items-center justify-center">
                <span className="text-6xl">🎯</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Game #2</h3>
                <p className="opacity-70 mb-4">In development... Another classic remake!</p>
                <button className="bg-gradient-2/20 hover:bg-gradient-2/30 px-4 py-2 rounded-lg transition-colors duration-200">
                  Play →
                </button>
              </div>
            </div>

            <div className="bg-white/10 dark:bg-black/30 backdrop-blur rounded-lg overflow-hidden border border-white/10 hover:border-gradient-3/50 transition-colors duration-200">
              <div className="aspect-video bg-gradient-to-br from-gradient-3/20 to-gradient-4/20 flex items-center justify-center">
                <span className="text-6xl">🚀</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Game #3</h3>
                <p className="opacity-70 mb-4">Planning phase... More games coming!</p>
                <button className="bg-gradient-3/20 hover:bg-gradient-3/30 px-4 py-2 rounded-lg transition-colors duration-200">
                  Play →
                </button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/games" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/80 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-200">
              Play My Games →
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="w-full py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-3">
              <BlogIcon className="w-12 h-12 text-secondary" animated />
              Devlogs, Ideas & Lessons Learned
            </h2>
            <p className="text-xl leading-relaxed opacity-90">
              Follow along with blog posts that cover what I'm building, what I'm struggling with, and what I'm figuring out.
            </p>
          </div>

          <div className="space-y-6 mb-12">
            <article className="bg-white/10 dark:bg-black/30 backdrop-blur rounded-lg p-8 border border-white/10 hover:border-primary/50 transition-colors duration-200">
              <h3 className="text-2xl font-bold mb-3">Creating My First Game in Unity</h3>
              <p className="opacity-70 mb-4">The complete journey from "What's a GameObject?" to actually shipping something playable...</p>
              <div className="flex items-center gap-4">
                <span className="text-sm opacity-60">Coming Soon</span>
                <ArrowIcon className="w-4 h-4" />
              </div>
            </article>

            <article className="bg-white/10 dark:bg-black/30 backdrop-blur rounded-lg p-8 border border-white/10 hover:border-gradient-2/50 transition-colors duration-200">
              <h3 className="text-2xl font-bold mb-3">Dev Challenge: Why 10 Small Games?</h3>
              <p className="opacity-70 mb-4">Breaking down my strategy for learning game development through focused, achievable projects...</p>
              <div className="flex items-center gap-4">
                <span className="text-sm opacity-60">Coming Soon</span>
                <ArrowIcon className="w-4 h-4" />
              </div>
            </article>

            <article className="bg-white/10 dark:bg-black/30 backdrop-blur rounded-lg p-8 border border-white/10 hover:border-gradient-3/50 transition-colors duration-200">
              <h3 className="text-2xl font-bold mb-3">When Everything Breaks and That's Fine</h3>
              <p className="opacity-70 mb-4">Embracing failures, debugging nightmares, and why broken games teach us the most...</p>
              <div className="flex items-center gap-4">
                <span className="text-sm opacity-60">Coming Soon</span>
                <ArrowIcon className="w-4 h-4" />
              </div>
            </article>
          </div>

          <div className="text-center">
            <Link href="/posts" className="inline-flex items-center gap-2 bg-gradient-2 hover:bg-gradient-2/80 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-200">
              Read the Blog →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-20 border-t border-white/10">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-3">
              <ContactIcon className="w-12 h-12 text-accent-1" animated />
              Say Hello
            </h2>
            <p className="text-xl leading-relaxed opacity-90">
              Have questions, ideas, or just want to chat about games?<br />
              Drop me a message — I'd love to hear from you.
            </p>
          </div>

          <form 
            name="contact" 
            method="POST" 
            data-netlify="true" 
            className="space-y-6"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p style={{ display: 'none' }}>
              <label>Don't fill this out if you're human: <input name="bot-field" /></label>
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
                  className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-black/30 backdrop-blur border border-white/20 focus:border-primary focus:outline-none transition-colors duration-200"
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
                  className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-black/30 backdrop-blur border border-white/20 focus:border-primary focus:outline-none transition-colors duration-200"
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
                className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-black/30 backdrop-blur border border-white/20 focus:border-primary focus:outline-none transition-colors duration-200 resize-none"
                placeholder="Tell me about your game ideas, ask questions, or just say hi!"
              />
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="bg-primary hover:bg-primary/80 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-200 inline-flex items-center gap-2"
              >
                Send Message 🚀
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer copyrightText="© 2024 Lil Byte Games. All rights reserved." />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
