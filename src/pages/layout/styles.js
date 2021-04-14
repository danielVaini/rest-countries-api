import styled from 'styled-components';

let windowHeight = window.innerHeight;


export const Container = styled.div`
  width: 100%;
  height: 100%;
  
 
  min-height: ${windowHeight};
  

  display: flex;
  flex-direction: column;
  align-items: center;
`;
