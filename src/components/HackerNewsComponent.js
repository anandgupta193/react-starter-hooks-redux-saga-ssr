import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHackerNews } from '../actions/HackerNewsActions';
import './HackerNewsComponent.css';

function HackerNews() {
const hackerNewsData = useSelector(store => store.hackerNewsData.data);
const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHackerNews());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      { JSON.stringify(hackerNewsData) }
    </div>
  );
}

export default HackerNews;
