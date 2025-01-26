
import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);  // Initial loading state set to false
  const [hasMore, setHasMore] = useState(true);  // Track if there are more articles to load

  const update = async () => {
    props.setProgress(10);
    const apiUrl = `https://api.currentsapi.services/v1/latest-news?apiKey=${props.apikey}&category=${props.category}&language=en&count=${props.pageSize}&page=${page}`;
    setLoading(true); // Set loading to true before making the API call
    let api = await fetch(apiUrl);
    let data = await api.json();
    props.setProgress(60);
    setArticles(data.news); // Set the current articles
    setHasMore(data.news.length === props.pageSize); // Check if more articles are available
    setLoading(false); // Set loading to false after the request
    props.setProgress(100);
  };

  useEffect(() => {
    update();
    // eslint-disable-next-line
  }, [page]);

  const fetchMoreData = async () => {
    if (loading) return; // Prevent multiple requests while loading

    setLoading(true); // Set loading to true before fetching more data
    setPage((prevPage) => prevPage + 1); // Increment page correctly

    const apiUrl = `https://api.currentsapi.services/v1/latest-news?apiKey=${props.apikey}&category=${props.category}&language=en&count=${props.pageSize}&page=${page + 1}`;
    let api = await fetch(apiUrl);
    let data = await api.json();
    setArticles((prevArticles) => [...prevArticles, ...data.news]); // Append new articles
    setHasMore(data.news.length === props.pageSize); // Set hasMore based on the length of the response
    setLoading(false); // Set loading to false after data is fetched
  };

  return (
    <>
      <h1 className="text-center">NewsCaster</h1>
      {loading && <Spinner />}  {/* Show loader while fetching */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={hasMore}  // Check if more articles are available to load
        loader={<Spinner />}  // Show loader while fetching
        endMessage={<p>No more news to load</p>}  // Show when no more data
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4 my-1" key={element.id}>
                  <Newsitem
                    title={element.title}
                    description={element.description}
                    imageurl={element.image} // Assuming 'image' is the correct key for the image URL
                    go={element.url}
                    publishedAt={element.published}
                    author={element.author}
                    source={element.category[0]} // Assuming the category is an array and we pick the first one
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  category: "sports",
  pageSize: 5,
};

News.propTypes = {
  apikey: PropTypes.string.isRequired,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;

