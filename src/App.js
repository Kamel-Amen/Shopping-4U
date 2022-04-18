import React from 'react';
import { Switch, Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Login from './components/login';
import Home from './components/home';
import Add from './components/add';
import Products from './components/products';
import About from './components/About';

const App = () => {
  return (
    <div>
      <div className='content'>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/home' component={Home} />
          <Route path='/add' component={Add} />
          <Route path='/products' component={Products} />
          <Route path='/about' component={About} />
          <Route path='/' exact component={Login} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
