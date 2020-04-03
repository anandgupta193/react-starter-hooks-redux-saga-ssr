import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import hackerNews from '../../src/reducers/index';
import rootSagas from '../../src/sagas/index';


// import our main App component
import App from '../../src/App';

const path = require("path");
const fs = require("fs");
const rootReducer = combineReducers(hackerNews);
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSagas);

export default (req, res, next) => {
    
    const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('err', err);
            return res.status(404).end()
        }

        // render the app as a string
        const html = ReactDOMServer.renderToString(<Provider store={store}><App /></Provider>);

        // inject the rendered app into our html and send it
        return res.send(
            htmlData.replace(
                '<div id="root"></div>',
                `<div id="root">${html}</div>`
            )
        );
    });
}