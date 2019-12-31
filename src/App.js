import React from 'react';
import './style.sass';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {ArticlesMainPage} from "./components/ArticlesMainPage";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Switch>
                  <Route  />
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
