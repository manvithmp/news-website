const ArticleCard = ({ article }) => {
  return (
    <div className="article-card">
      {article.image && (
        <img src={article.image} alt={article.title} />
      )}
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">Read More</a>
    </div>
  );
};

export default ArticleCard;