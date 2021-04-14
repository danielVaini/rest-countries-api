import React from 'react';

import Navbar from '../../components/Menu/index';
import Search from '../../components/Search/index';
import Cards from '../../components/Cards/index';
import { Container } from './styles';

function Layout() {
  return (
    <>
      <Container>
        <Navbar />
        <Search />
        <Cards />
      </Container>
    </>
  );
}

export default Layout;