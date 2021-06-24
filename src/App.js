import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/HomePage.component';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
