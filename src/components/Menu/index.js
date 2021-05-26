import React from 'react';
import { Navbar, NavContainer, H1, Div, MoonIcon, Button } from './styles';



function Menu() {
 
  const root = document.querySelector('#root');

  const classAdd = () => {
    if(root.classList == "light-mode") {
      root.classList.remove("light-mode");
    }else{
      root.classList.add("light-mode");
    }

  }



  return (
      <Navbar>
        <NavContainer>
          <H1>Where in the world?</H1>
          <Div>
            <Button className="dark-mod" onClick={() => classAdd()}>
              <MoonIcon />
              Dark Mode
            </Button>
          </Div>
        </NavContainer>
      </Navbar>
  );
}

export default Menu;