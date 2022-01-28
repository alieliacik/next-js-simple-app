import ArticleItem from './ArticleItem'
import styles from '../styles/Layout.module.css'

const ArticleList = ({ articles }) => {
  return (
    <div className={styles.grid}>
      {articles.map((article) => (
        // <h6>{item.title}</h6>
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  )
}

export default ArticleList
