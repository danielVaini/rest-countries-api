import React from 'react';

import { Navbar, NavContainer, H1, Div, MoonIcon, Text } from './styles';


function Menu() {
  return (
      <Navbar>
        <NavContainer>
          <H1>Where in the world?</H1>
          <Div>
            <MoonIcon />
            <Text className="btn-night">
              Dark mode
            </Text>
          </Div>
        </NavContainer>
      </Navbar>
  );
}

export default Menu;