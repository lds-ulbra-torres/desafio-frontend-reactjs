import React from 'react';
import { Navbar } from '@blueprintjs/core';

export function AppNavbar() {
  return (
    <Navbar>
      <Navbar.Group>
        <Navbar.Heading>
          Star Wars
        </Navbar.Heading>
        <Navbar.Divider />
      </Navbar.Group>
    </Navbar>
  )
}