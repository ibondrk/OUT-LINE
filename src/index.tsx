import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Page404 } from './pages/page404';
import { PageHome } from './pages/pageHome';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import store from './app/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<PageHome />} />
            <Route path="*" element={<Page404 />} />
          </Route>
          {/* <Route path="/privacy" element={<h1>Privacy Page Coming Soon</h1>} /> */}
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
