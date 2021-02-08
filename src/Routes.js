import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ProductsList from './components/ProductsList';
import ProductDetail from './components/ProductDetail';
import CartList from './components/CartList';
import SignIn from './login/SignIn';
import Success from './login/Success';
import Failed from './login/Failed';
import './App.css';

const Routes = () => (
  <Router>
    <Header />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/products' exact component={ProductsList} />
      <Route path='/productDetail' component={ProductDetail} />
      <Route path='/cart' component={CartList} />
      <Route path='/signIn' exact component={SignIn}></Route>
      <Route path='/success' exact component={Success}></Route>
      <Route path='/failed' exact component={Failed}></Route>
    </Switch>
  </Router>
);

export default Routes;
