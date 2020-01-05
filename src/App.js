import React from 'react';
import './style.sass';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ArticlesMainPage} from "./pages/ArticlesMainPage/ArticlesMainPage";
import {ArticlesCreator} from "./pages/ArticlesCreator/ArticlesCreator";
import {ArticlesNavbar} from "./components/ArticlesNavbar";
import {ArticlePage} from "./pages/ArticlePage/ArticlePage";

const App = () => {
  return (
      <BrowserRouter>
          <div className="container-fluid pl-0 pr-0">
              <ArticlesNavbar />
              <Switch>
                  <Route exact path='/' component={ArticlesMainPage} />
                  <Route path='/create' component={ArticlesCreator} />
                  <Route path='/article/:id' component={ArticlePage} />
              </Switch>
          </div>
      </BrowserRouter>
  );
};

export default App;
