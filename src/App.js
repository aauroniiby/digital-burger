import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'
import axios from './axios'

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
    const welcome = this.state.users.map( item => {
      return <Welcome value = {item} />
    })

    return (
      <div className="App">
        <button onClick={this.purchaseNameHandler}>asda</button>
        {welcome}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
}

export default App;
