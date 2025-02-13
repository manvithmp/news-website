import { useState, useEffect } from 'react';
import { getTopHeadlines } from '../api/newsApi';
import ArticleCard from '../components/ArticleCard';
import Pagination from '../components/Pagination';
import Loading from '../components/Loading';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const data = await getTopHeadlines();
        setArticles(data.articles);
        setTotalPages(Math.ceil(data.totalArticles / 20));
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchArticles();
  }, [currentPage]);

  if (loading) return <Loading />;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Top Headlines</h1>
      <div className={styles.grid}>
        {articles.map((article) => (
          <ArticleCard key={article.url} article={article} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
};

export default Home;