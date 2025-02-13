const ArticleCard = ({ article }) => {
  return (
    <div className="article-card">
      <img src={article.urlToImage} alt={article.title} />
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">Read More</a>
    </div>
  );
};

export default ArticleCard;