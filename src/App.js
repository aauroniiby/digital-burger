import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Welcome from './Welcome'
import axios from './axios'
import Auth from './containers/Auth/Auth'
class App extends Component {

  state = {
    users: []
  }


  purchaseNameHandler = () => {
    axios.get('/users.json').then(response => {
      console.log(typeof response.data);
      let result = Object.values(response.data)
      console.log(result);
      
      this.setState({users:result})
    })
  }


  render() {
    // const welcome = this.state.users.map( item => {
    //   return <Welcome value = {item} />
    // })

    return (
      <div className="App">
        <Auth/>
      </div>
    );
  }
}

export default App;
