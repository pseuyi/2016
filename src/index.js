import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './components/App';
import About from './components/About';
import Projects from './components/Projects';
import Notes from './components/Notes';
import Resume from './components/Resume';
import './css/index.css';

const baseUrl = process.env.PUBLIC_URL;
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path={baseUrl + '/'} component={App}>
      <IndexRoute component={Projects} />
      <Route path={baseUrl + '/about'} component={About} />
      <Route path={baseUrl + '/projects'} component={Projects} />
      <Route path={baseUrl + '/more'} component={Notes} />
    </Route>
    <Route path="cv" component={Resume} />
  </Router>,
  document.getElementById('app'),
);
