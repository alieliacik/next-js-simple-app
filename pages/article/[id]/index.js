import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
const article = ({ article }) => {
  // const router = useRouter()
  // const { id } = router.query
  // const [article, setArticle] = useState()

  // useEffect(async () => {
  //   const res = await fetch(
  //     `https://jsonplaceholder.typicode.com/posts/${id}`
  //   )

  //   const article = await res.json()

  //   setArticle(article)
  // }, [])

  return (
    <div>
      <h3>{article && article.title}</h3>
      <p>{article && article.body}</p>
      <Link href='/'>Go Back</Link>
    </div>
  )
}

// export const getServerSideProps = async (context) => {
//   console.log(context, 'asf')
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   )

//   const article = await res.json()

//   return {
//     props: {
//       article,
//     },
//   }
// }

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  )

  const article = await res.json()

  return {
    props: {
      article,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

  const article = await res.json()

  const ids = article.map((item) => item.id)
  const paths = ids.map((item) => ({
    params: {
      id: item.toString(),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export default article
