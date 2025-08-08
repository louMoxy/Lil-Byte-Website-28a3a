import Link from 'next/link';
import { getPosts } from '../../utils/mdx-utils';
import { getGlobalData } from '../../utils/global-data';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import ArrowIcon from '../../components/ArrowIcon';
import SEO from '../../components/SEO';

export default function PostsIndex({ posts, globalData }) {
  return (
    <Layout>
      <SEO 
        title="Blog - Lil Byte Games" 
        description="Devlogs, ideas, and lessons learned from my indie game development journey. Follow along as I build games and share what I'm learning." 
      />
      <Header name="Lil Byte Games" />
      
      {/* Hero Section */}
      <section className="w-full text-center py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-gradient-2 to-gradient-3 bg-clip-text text-transparent">
            📚 Dev Blog
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-80 leading-relaxed">
            Devlogs, ideas, and lessons learned from my indie game development journey
          </p>
          <p className="text-lg opacity-70">
            Follow along as I build games, share what I'm learning, and document the ups and downs of learning game development in public.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="w-full py-12">
        <div className="max-w-6xl mx-auto px-6">
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <article
                  key={post.filePath}
                  className="bg-white/10 dark:bg-black/30 backdrop-blur rounded-lg overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 hover:scale-110 hover:rotate-1 hover:shadow-2xl hover:shadow-primary/20 group cursor-pointer transform-gpu animate-[fadeInUp_0.6s_ease-out_forwards] opacity-0"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="p-8">
                    {/* Date */}
                    {post.data.date && (
                      <div className="flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 group-hover:animate-pulse transition-all duration-300"></span>
                        <time className="text-sm font-medium opacity-70 uppercase tracking-wide group-hover:opacity-100 group-hover:text-primary transition-all duration-300">
                          {new Date(post.data.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                      </div>
                    )}
                    
                    {/* Title */}
                    <h2 className="text-2xl font-bold mb-4 leading-tight group-hover:text-primary-dark group-hover:scale-105 transition-all duration-300 transform origin-left">
                      {post.data.title}
                    </h2>
                    
                    {/* Description */}
                    {post.data.description && (
                      <p className="text-lg opacity-70 mb-6 leading-relaxed line-clamp-3 group-hover:opacity-90 transition-opacity duration-300">
                        {post.data.description}
                      </p>
                    )}
                    
                    {/* Read More Link */}
                    <Link
                      as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                      href={`/posts/[slug]`}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-all duration-300 group/link relative px-4 py-2 pr-6 rounded-lg"
                    >
                      <span className="relative z-10 group-hover/link:animate-bounce">Read More</span>
                      <ArrowIcon className="w-4 h-4 group-hover/link:translate-x-2 group-hover/link:scale-125 transition-all duration-300 relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-gradient-2/20 scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left rounded -mr-2"></div>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-20">
              <div className="mb-8">
                <span className="text-8xl">📝</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">No Posts Yet</h2>
              <p className="text-xl opacity-70 mb-8">
                I'm working on some amazing content! Check back soon for dev logs, tutorials, and insights from my game development journey.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/80 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-200"
              >
                ← Back to Home
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Featured Categories Section */}
      {posts.length > 0 && (
        <section className="w-full py-16 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">What You'll Find Here</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 dark:bg-black/20 rounded-lg p-6 backdrop-blur border border-white/10">
                <div className="text-4xl mb-4">🎮</div>
                <h3 className="text-xl font-bold mb-2">Game Devlogs</h3>
                <p className="opacity-70">
                  Behind-the-scenes look at my game development process, from concept to completion.
                </p>
              </div>
              <div className="bg-white/5 dark:bg-black/20 rounded-lg p-6 backdrop-blur border border-white/10">
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="text-xl font-bold mb-2">Tutorials & Tips</h3>
                <p className="opacity-70">
                  What I'm learning about Unity, game design, and indie development.
                </p>
              </div>
              <div className="bg-white/5 dark:bg-black/20 rounded-lg p-6 backdrop-blur border border-white/10">
                <div className="text-4xl mb-4">💭</div>
                <h3 className="text-xl font-bold mb-2">Lessons Learned</h3>
                <p className="opacity-70">
                  Honest reflections on mistakes, challenges, and breakthroughs.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="w-full py-16 border-t border-white/10">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Follow Along?</h2>
          <p className="text-xl opacity-80 mb-8">
            Join me on this game development journey and never miss an update.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="bg-primary hover:bg-primary/80 text-white px-8 py-4 rounded-full font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
            >
              ✉️ Get Updates
            </Link>
            <Link
              href="/#games"
              className="bg-white/10 hover:bg-white/20 dark:bg-black/30 dark:hover:bg-black/40 backdrop-blur border border-white/20 px-8 py-4 rounded-full font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
            >
              🎮 Play My Games
            </Link>
          </div>
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

  // Sort posts by date (newest first)
  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.data.date) - new Date(a.data.date);
  });

  return { 
    props: { 
      posts: sortedPosts, 
      globalData 
    } 
  };
}
