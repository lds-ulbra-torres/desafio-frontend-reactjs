import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';

const Logo = styled.img`
  width: 100px;
`

const Navbar = styled.div`
  background:#2d3436;
  display: flex;
  justify-content:center;
`

export function AppNavbar() {
  return (
    <Navbar>
      <Logo src={logo} />
    </Navbar>
  )
}