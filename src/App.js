import React, { Component } from 'react';
import { Home } from './screens/Home';
import { AppNavbar } from './components/Navbar';

class App extends Component {
  render() {
    return (
      <>
        <AppNavbar />
        <Home />
      </>
    );
  }
}

export default App;
