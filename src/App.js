import React from 'react';
import './style.sass';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ArticlesMainPage} from "./pages/ArticlesMainPage/ArticlesMainPage";
import {ArticlesNavbar} from "./components/ArticlesNavbar";

const App = () => {
  return (
      <BrowserRouter>
          <div className="container-fluid pl-0 pr-0">
              <ArticlesNavbar />
              <Switch>
                  <Route path='/' exact component={ArticlesMainPage} />
              </Switch>
          </div>
      </BrowserRouter>
  );
};

export default App;
