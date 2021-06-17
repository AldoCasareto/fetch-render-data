import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import FeaturedProducts from './components/FeaturedProducts';
import Product from './components/Product';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={FeaturedProducts} />
          <Route exact path='/product/:id' component={Product} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
