import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './HackerNewsComponent.css';
import { getHackerNews } from '../actions/HackerNewsActions';

function HackerNews() {
const hackerNewsData = useSelector(store => store.hackerNewsData);
const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHackerNews({ name: "Anand Gupta from Store" }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      { hackerNewsData.name }
    </div>
  );
}

export default HackerNews;
