import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Loading from '../../components/Loading';

const Article = () => {
    const router = useRouter();
    const { id } = router.query;
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return;

        const fetchArticle = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://gnews.io/api/v4/everything?from=${id}&sortBy=publishedAt&apiKey=d564f39d6c1916192ff167fdd722d823`);
                setArticle(response.data.articles[0]);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchArticle();
    }, [id]);

    if (loading) return <Loading />;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>{article.title}</h1>
            <img src={article.urlToImage} alt={article.title} />
            <p>{article.content}</p>
        </div>
    );
};

export default Article;