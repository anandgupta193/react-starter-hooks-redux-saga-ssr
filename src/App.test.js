import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import hackerNews from './reducers/index';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import App from './App';

const rootReducer = combineReducers(hackerNews);
const store = createStore(rootReducer);

test('renders Hacker News link', () => {
  const { getByText } = render(<Provider store={store}>
    <App />
  </Provider>);
  const linkElement = getByText(/Hacker News/i);
  expect(linkElement).toBeInTheDocument();
});
