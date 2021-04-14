import React from 'react';

import Navbar from '../../components/Menu/index';
import Search from '../../components/Search/index';

import { Container } from './styles';

function Layout() {
  return (
    <>
      <Container>
        <Navbar />
        <Search />
      </Container>
    </>
  );
}

export default Layout;