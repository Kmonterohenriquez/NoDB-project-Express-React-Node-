import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header';
import Finder from './Components/Finder';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header />
        <Finder />
      </div>
    )
  }
}

export default App;
