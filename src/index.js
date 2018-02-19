import React from 'react';
import ReactDOM from 'react-dom';
import Shell from './components/shell';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AMPDocument from './components/amp-document/amp-document';
import 'bootstrap/dist/css/bootstrap.css';
import './bootstrap-theme.css'; // Replace with your own bootstrap theme!

ReactDOM.render((
  <Router>
    <Shell children={
      <Route path='/content/:document' component={
      props => <AMPDocument src={'/content/' + props.match.params.document} />
      }/>
    }/>
  </Router>
), document.getElementById('root'));
