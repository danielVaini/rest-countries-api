import React from 'react';

import Navbar from '../../components/Menu/index';

import Cards from '../../components/Cards/index';
import { Container, LayoutPage } from './styles';

function Layout() {
  return (
      <Container>
          <Navbar />
        <LayoutPage>
        
          <Cards />
        </LayoutPage>
      </Container>
  );
}

export default Layout;