import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from './app/store';
import { Provider } from 'react-redux';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { PageHome } from './pages/pageHome';
import { Page404 } from './pages/page404';
import { PageConditions } from './pages/pageConditions';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<PageHome />} />
            <Route path="conditions" element={<PageConditions />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
