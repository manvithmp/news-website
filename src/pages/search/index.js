import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
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
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${q}&page=${currentPage}&apiKey=be921f7040b44470903d919e65676e25`);
        setArticles(response.data.articles);
        setTotalPages(Math.ceil(response.data.totalResults / 20)); // Assuming 20 articles per page
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