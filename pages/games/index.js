import Link from 'next/link';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Doodles from '../../components/Doodles';
import RetroWindowCard from '../../components/RetroWindowCard';
import { GameIcon } from '../../components/CuteIcons';
import Image from 'next/image';
import { getGames } from '../../utils/mdx-utils';

export default function GamesPage({ games }) {
  return (
    <Layout>
      <SEO title="Games – Lil Byte Games" description="Play tiny browser games and prototypes I'm building while learning game dev." />

      {/* Header section */}
      <section className="w-full text-center py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold">Play My Games</h1>
        <p className="mt-4 text-lg opacity-80 max-w-2xl mx-auto">
          Everything here is small, quick, and made with love (and a lot of Ctrl+Z). You can play them right in your browser — no downloads, no fuss.
        </p>
      </section>

      {/* Games grid – same style as homepage */}
      <section className="w-full py-8 relative">
        <Doodles opacity={0.25} />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game) => {
              const slug = game.filePath.replace(/\.mdx?$/, '');
              return (
                <RetroWindowCard key={slug} title={game.data.title} href={`/games/${slug}`}>
                  <div
                    className="aspect-video flex items-center justify-center mb-4 overflow-hidden"
                    style={{ background: '#FFF', border: '2px solid var(--color-text-primary)', borderRadius: '12px' }}
                  >
                    {game.data.image ? (
                      <Image src={game.data.image} alt={game.data.title} width={640} height={360} className="object-cover w-full h-full" />
                    ) : (
                      <GameIcon className="w-12 h-12 doodle-icon text-black" />
                    )}
                  </div>
                  <p className="opacity-80">{game.data.description}</p>
                  <div className="mt-4">
                    <button className="btn-doodle btn-doodle-surface">Play →</button>
                  </div>
                </RetroWindowCard>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/" className="btn-doodle btn-doodle-secondary">← Back Home</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const games = getGames();
  return { props: { games } };
}


