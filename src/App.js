import React, { Component } from 'react'
import Header from './component/Header'
import Finder from './component/Finder'

class App extends Component {
  state = {  }
  render() {
    return (
      <div>
        <Header />
        <Finder />
      </div>
    );
  }
}

export default App;