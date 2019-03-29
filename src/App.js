import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch } from 'react-router-dom'; 
import { NavBar }  from './components/NavBar';
import { ProductList }  from './components/ProductList';
import { Cart }   from './components/Cart';
import { ProductDetail }  from './components/ProductDetail';
import  Default  from './components/Default';
import { Modal } from './components/Modal';

class App extends Component {
  render() {
    return (
     <React.Fragment>
       <NavBar/>
        <Switch>
          <Route path = '/' component = { ProductList } exact/>
          <Route path = '/detail' component = { ProductDetail } />
          <Route path = '/cart' component = { Cart } />
          <Route component = { Default } />
        </Switch>
        <Modal/>
     </React.Fragment> 
    );
  }
}

export default App;
