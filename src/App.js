import React from 'react';
import './style.sass';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ArticlesMainPage} from "./pages/ArticlesMainPage/ArticlesMainPage";
import {ArticlesNavbar} from "./components/ArticlesNavbar";

function App() {
  return (
      <BrowserRouter>
          <div className="container-fluid">
              <ArticlesNavbar />
              <Switch>
                  <Route path='/' exact component={ArticlesMainPage} />
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
