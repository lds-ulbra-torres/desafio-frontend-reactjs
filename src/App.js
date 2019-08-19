import React, { Component } from 'react';
import { Home } from './screens/Home';
import { AppNavbar } from './components/Navbar';
import styled from 'styled-components';

const AppContainerContent = styled.div`
  padding: 5px;
`

class App extends Component {
  render() {
    return (
      <>
        <AppNavbar />
        <AppContainerContent>
          <Home />
        </AppContainerContent>
      </>
    );
  }
}

export default App;
