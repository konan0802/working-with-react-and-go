import React, { Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch} from 'react-router-dom';
import Home from './components/Home';
import Movies from './components/Movies';
import OneMovie from './components/OneMovie';
import Gneres from './components/Genres';
import OneGenre from './components/OneGenre';
import EditMovie from './components/EditMovie';
import Admin from './components/Admin';

export default function App() {
  return (
    <Router>
      <div className="container">

        <div className="row">
          <h1 className="mt-3">Go Watch a Movie!</h1>
          <hr className="mb-3"></hr>
        </div>
        <div className="row">
          <div className="col-md-2">
            <nav>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/movies">Movies</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/genres">Genres</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/admin/add">Add movie</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/admin">Manage Catalogue</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-10">
            <Switch>
              <Route path="/movies/:id" component={OneMovie} />
              <Route path="/movies">
                <Movies />
              </Route>
              <Route path="/genre/:id" component={OneGenre} />
              <Route exact path="/genres">
                <Gneres />
              </Route>
              <Route path="/admin/add" component={EditMovie} />
              <Route path="/admin">
                <Admin />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}
