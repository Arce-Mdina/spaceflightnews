import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../services/api";

const ArticleDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const loadArticle = async () => {
      const data = await fetchArticleById(id);
      setArticle(data);
    };
    loadArticle();
  }, [id]);

  if (!article) return <p>Loading...</p>;

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.summary}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
    </div>
  );
};

export default ArticleDetails;
