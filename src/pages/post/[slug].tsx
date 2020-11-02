import { Markup } from 'interweave'
import { GetStaticPropsContext, InferGetServerSidePropsType } from 'next'
import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'
import snarkdown from 'snarkdown'
import urlcat from 'urlcat'
import { InternalLink } from '~/components/elements/internal-link'
import { Preview } from '~/components/modules/preview'
import { formatDate } from '~/utils/date'

function Post({ content, preview }: InferGetServerSidePropsType<typeof getStaticProps>) {
  const router = useRouter()

  if (router.isFallback) {
    return null
  }

  return (
    <>
      <DefaultSeo title={content.title} />
      <article className="article">
        <Preview preview={preview} />
        <h1 className="title">{content.title}</h1>
        <p className="date">
          {formatDate(content.publishedAt)}に投稿&nbsp;
          {content.updatedAt && <>（{formatDate(content.updatedAt)}に改稿）</>}
        </p>
        <img className="eyecatch" alt="" height={400} src={content.eyecatch.url} />
        <main className="body">
          <Markup content={snarkdown(content.body)} noWrap />
        </main>
      </article>
      <footer className="footer">
        All posts are <InternalLink href="/post">/post</InternalLink>, my portfolio is&nbsp;
        <InternalLink href="/">ymkz.co</InternalLink> .
      </footer>
      <style jsx>{`
        .article {
          max-width: 1024px;
        }
        .title {
          font-family: var(--pretty-font);
          font-weight: 600;
          font-size: 48px;
          line-height: 1.5;
        }
        .date {
          font-size: 12px;
          font-weight: 500;
          margin-top: 20px;
        }
        .eyecatch {
          margin-top: 24px;
          border-radius: 4px;
        }
        .body {
          font-size: 18px;
          font-weight: 500;
          line-height: 1.5;
          margin-top: 24px;
        }
        .body h1 {
          font-size: 32px;
          margin-top: 24px;
        }
        .footer {
          font-family: var(--pretty-font);
          font-size: 14px;
          margin-top: 24px;
        }
      `}</style>
    </>
  )
}

export default Post

export async function getStaticPaths() {
  const endpoint = 'https://ymkz.microcms.io/api/v1/post'
  const options: RequestInit = { headers: { 'X-API-KEY': process.env.API_KEY || '' } }
  const response = await fetch(endpoint, options)
  const json: Contents = await response.json()
  const paths = json.contents.map((content) => `/post/${content.id}`)
  return { paths, fallback: true }
}

export async function getStaticProps({ params, preview, previewData }: GetStaticPropsContext) {
  const slug = params?.slug
  const draftKey = previewData?.draftKey
  const endpoint = urlcat('https://ymkz.microcms.io/api/v1/post/:slug', { slug, draftKey })
  const options: RequestInit = { headers: { 'X-API-KEY': process.env.API_KEY || '' } }
  const response = await fetch(endpoint, options)
  const content: Content = await response.json()
  return { props: { content, preview: preview || false }, revalidate: 1 }
}
