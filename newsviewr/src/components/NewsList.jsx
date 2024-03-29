import styled from "styled-components";
import {useState, useEffect} from "react";
import NewsItem from "./NewsItem";
import axios from "axios";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and(max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({category}) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category ==='all' ? '' : `&category=${category}`;
        const res = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr&apiKey=a586cc1876644618afd238767c8692ec`,
        );
        setArticles(res.data.articles);
        
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);
  
  if (loading) {
    return <NewsListBlock>대기 중,,,</NewsListBlock>;
  }
  if (!articles) {
    return null;
  }
  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article}></NewsItem>
      ))}
    </NewsListBlock>
  );
  
  
};
export default NewsList;
