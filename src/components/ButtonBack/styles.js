import styled from 'styled-components';

import {IoArrowBack} from '../../styles/Icons';

export const Button = styled.button`
  border: none;
  outline: none;
  background: none;
  
  
  width: 120px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--dark-blue);
  box-shadow: inset 0 0 1 black;

  color: white;

  border-radius: 8px;

  margin: 40px 0 40px 40px; 

  > a {
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Arrow = styled(IoArrowBack)`
  width: 20px;
  height: 30px;

  margin-right: 8px;
`;
export const Text = styled.p`

`;