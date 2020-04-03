import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHackerNews } from '../actions/HackerNewsActions';
import { HACKER_NEWS_HEADERS, LOGO_URL, LOAD_MORE, LOADING_DATA } from '../Utils/Constant';
import './HackerNewsComponent.css';

const renderNews = ({ hits }) => {
  if (hits.length === 0) {
    return <div className="loader" >{LOADING_DATA}</div>
  }
  return hits.map((article) => {
    return (
      <div className="data-table-common" key={article.created_at_i}>
        <div className="data-table-row">
          <div className="data-table-row-s-no">{ article.comments_count }.</div>
          <div> {article.title} </div>
        </div>
        <div className="data-table-row data-table-inner-row">
          <div className="data-table-row-domain"><a href={article.domain}>({article.domain})</a></div>
          <div className="data-table-row-user data-table-row-padding">by</div>
          <div className="data-table-row-user data-table-row-padding">{article.user} </div>
          <div className="data-table-row-time-ago data-table-row-padding">{article.time_ago}</div>
        </div>
      </div>
    );
  });
}

const HackerNews = () => {
const [startPage, setStartPage] = useState(1);
const hackerNewsData = useSelector(store => store.hackerNewsData.data);
const dispatch = useDispatch();
if (typeof window === 'undefined') {
  //handling for SSR
  dispatch(getHackerNews({page: 1}));
}

const loadNextPageData = () => {
  setStartPage(startPage+1);
  dispatch(getHackerNews({page: startPage}));
}

  useEffect(() => {
    dispatch(getHackerNews({page: 1}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <table className="data-table">
        <thead className="data-table-header">
          <tr>
            <th><img alt="logo" src={LOGO_URL} /></th>
            { HACKER_NEWS_HEADERS.map(header => (<th key={header}>{header}</th>)) }
          </tr>
        </thead>
      </table>
      <div className="data-table">
        { hackerNewsData && renderNews(hackerNewsData) }
      </div>
      <div className="load-more">
        {
          hackerNewsData.hits.length > 0 &&
          <button onClick={loadNextPageData}>{LOAD_MORE}</button>
        }
      </div>
    </div>
  );
}

export default HackerNews;
