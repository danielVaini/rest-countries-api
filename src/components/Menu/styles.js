import styled from 'styled-components';

import {DarkMoon} from '../../styles/Icons';

export const Navbar = styled.div`
  width: 100%;
  height: 80px;

  padding: 0px 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--menu-dark);
  
`;

export const NavContainer = styled.div`
  width: 1280px;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Div = styled.div`
  width: 100px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const H1 = styled.h1`
  font-size: 24px;

  color: var(--text-dark);
`;

export const MoonIcon = styled(DarkMoon)`
  width: 16px;
  height: 16px;
  margin-right: 16px;
`;

export const Button = styled.button`
  appearance: none;
  outline: none;
  background-color: transparent;
  border: none;
  color: var(--text-dark);

  display: flex;
  align-items: center;

  cursor: pointer;
  font-weight: 500;


  
`;