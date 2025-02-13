import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { searchArticles } from '../../api/newsApi';
import ArticleCard from '../../components/ArticleCard';
import Pagination from '../../components/Pagination';
import Loading from '../../components/Loading';
import styles from '../../styles/Home.module.css';

const Search = () => {
  const router = useRouter();
  const { q } = router.query;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (!q) return;

    const fetchArticles = async () => {
      try {
        setLoading(true);
        const data = await searchArticles(q);
        setArticles(data.articles);
        setTotalPages(Math.ceil(data.totalArticles / 20));
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchArticles();
  }, [q, currentPage]);

  if (loading) return <Loading />;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Search Results for "{q}"</h1>
      <div className={styles.grid}>
        {articles.map((article) => (
          <ArticleCard key={article.url} article={article} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
};

export default Search;