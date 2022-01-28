import Head from 'next/head'
import ArticleItem from '../components/ArticleList'

export default function Home({ articles }) {
  console.log(articles)
  return (
    <div>
      <Head>
        <title>Next Js Project</title>
        <meta name='keywords' content='next js project' />
      </Head>
      <ArticleItem articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')

  const articles = await res.json()
  console.log(articles)

  return {
    props: {
      articles,
    },
  }
}
