import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './shared-components/header';
import ParentWrapper from './parent-components/parent-wrapper';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/">
        <ParentWrapper />
      </Route>
    </div>
  );
}

export default App;
