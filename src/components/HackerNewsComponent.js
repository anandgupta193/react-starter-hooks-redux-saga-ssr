import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHackerNews } from '../actions/HackerNewsActions';
import { HACKER_NEWS_HEADERS, LOGO_URL } from '../Utils/Constant';
import './HackerNewsComponent.css';

function renderNews({ hits }) {
  return hits.map((article, index) => {
    return (
      <div className="data-table-row" key={article.created_at_i}>
        <div className="data-table-row-s-no">{ index+1 }.</div>
        <div>
          {article.title}
        </div>
      </div>
    );
  });
}

function HackerNews() {
const hackerNewsData = useSelector(store => store.hackerNewsData.data);
const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHackerNews());
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
    </div>
  );
}

export default HackerNews;
