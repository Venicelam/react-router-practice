import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import AboutPage from './components/AboutPage'
import NotFoundPage from './components/NotFoundPage'
import NewsPage from './components/NewsPage'
import UsersPage from './components/UsersPage'

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/news">news</Link>
            </li>
            <li>
              <Link to="/users">users</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/news" component={NewsPage} />
          <Route path="/users/:userid" component={({match}) => {
            return <h1>hello user {match.params.userid}</h1>
          }} />
          <Route path="/users" component={UsersPage} />
          <Route path="/" exact component={() => <h1>home page</h1>} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
