import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout'
import DigitalBurger from './containers/DigitalBurger/DigitalBurger'
import Checkout from './containers/Checkout/Checkout'
import { Route, Switch } from 'react-router-dom'
import Orders from './containers/Orders/Orders'
import Menus from './containers/Menus/Menus'

class App extends Component {

  render() {
    return (
      <div >
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/menus" component={Menus} />
            <Route path="/" component={DigitalBurger} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
