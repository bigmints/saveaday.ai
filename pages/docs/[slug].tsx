import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";

import DocsArticle from "@/components/docs/DocsArticle";
import DocsShell from "@/components/docs/DocsShell";
import { docs, getDocPage, type DocPage } from "@/lib/docs-content";

type DocPageProps = {
  page: DocPage;
};

const DocumentationPage: NextPage<DocPageProps> = ({ page }) => (
  <>
    <Head>
      <title>{page.title} | SaveADay Documentation</title>
      <meta name="description" content={page.description} />
      <link rel="canonical" href={`https://www.saveaday.ai/docs/${page.slug}/`} />
    </Head>
    <DocsShell activeSlug={page.slug} articleSections={page.sections}>
      <DocsArticle page={page} />
    </DocsShell>
  </>
);

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: docs.map((page) => ({ params: { slug: page.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<DocPageProps> = async ({ params }) => {
  const page = getDocPage(String(params?.slug ?? ""));
  if (!page) return { notFound: true };
  return { props: { page } };
};

export default DocumentationPage;
