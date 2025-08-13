import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import { getGameFilePaths, getGameBySlug } from '../../utils/mdx-utils';

export default function GameDetail({ mdxSource, frontmatter }) {
  return (
    <Layout>
      <SEO title={`${frontmatter.title} – Game`} description={frontmatter.description} />
      <section className="w-full py-12">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{frontmatter.title}</h1>
          {frontmatter.image && (
            <div className="mb-6 overflow-hidden rounded-xl border-2 border-black">
              <Image src={frontmatter.image} alt={frontmatter.title} width={1200} height={630} className="object-cover w-full h-auto" />
            </div>
          )}
          <p className="opacity-80 mb-8">{frontmatter.description}</p>
          <article className="prose prose-lg">
            <MDXRemote {...mdxSource} />
          </article>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { mdxSource, data } = await getGameBySlug(params.slug);
  return {
    props: {
      mdxSource,
      frontmatter: data,
    },
  };
}

export function getStaticPaths() {
  const paths = getGameFilePaths().map((p) => ({ params: { slug: p.replace(/\.mdx?$/, '') } }));
  return { paths, fallback: false };
}


