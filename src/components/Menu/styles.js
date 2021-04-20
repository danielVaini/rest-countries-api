import styled from 'styled-components';

import {IoMoonSharp} from '../../styles/Icons';

export const Navbar = styled.div`
  width: 100%;
  height: 80px;

  padding: 0px 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--dark-blue);
  
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

  color: white;
`;

export const MoonIcon = styled(IoMoonSharp)`
  width: 16px;
  height: 16px;
`;

export const Text = styled.p`
  color: white;
`;