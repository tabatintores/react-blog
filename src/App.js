import React from 'react';
import './style.sass';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ArticlesMainPage} from "./components/ArticlesMainPage/ArticlesMainPage";
import {ArticlesCreator} from "./components/ArticlesCreator/ArticlesCreator";
import {ArticlesNavbar} from "./components/ArticlesNavbar";
import {ArticlePage} from "./components/ArticlePage/ArticlePage";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Sugar} from 'react-preloaders';

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
          <ToastContainer/>
          <Sugar/>
      </BrowserRouter>
  );
};

export default App;
