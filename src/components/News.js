
import React, { useEffect,useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=>{
  const [articles, setarticles] = useState([]);
  const [page, setpage] = useState(1);
  const [loading, setloading] = useState(false);
  const [totalResults, settotalResults] = useState(0);
 

  const update=async ()=> {
    props.setProgress(10);
    // const ap = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    const ap = `https://api.currentsapi.services/v1/latest-news?apiKey=${props.apikey}&category=${props.category}&language=en&count=${props.pageSize}&page=${page}`;

    setloading(true)
    let api = await fetch(ap);
    let passed = await api.json();
    props.setProgress(60);
    setarticles(passed.news)
    settotalResults(passed.news.length)
    console.log(settotalResults);
    setloading(false);
    props.setProgress(100);
  }
  useEffect(() => {
    update();
  }, [])
  

  const fetchMoreData = async () => {
    const ap = `https://api.currentsapi.services/v1/latest-news?apiKey=${props.apikey}&category=${props.category}&language=en&count=${props.pageSize}&page=${page+1}`;

    setpage(page + 1)
    let api = await fetch(ap);
    let passed = await api.json();
    setarticles(prevarticles => [...prevarticles, ...passed.news]);
    settotalResults(passed.news.length)
    console.log(settotalResults);
  };


    return (
     
      <>
        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length <totalResults}
          loader={<Spinner />}
        >
          <div className="containert">
       <h1 className="text-center">NewsCaster</h1>

       </div>
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-4 my-1" key={element.url}>
                    <Newsitem
                      title={element.title}
                      description={element.description}
                      imageurl={element.image}
                      go={element.url}
                      publishedAt={element.publishedAt}
                      author={element.author}
                    
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }

 News.defaultProps = {
    country: "us",
    category: "business",
    pageSize: 5,
  };
  News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };

export default News;