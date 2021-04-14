import styled from 'styled-components';

export const Grid = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  

  grid-column-gap: 94px;
  grid-row-gap: 40px;

  margin-top: 40px;

  
`;


export const Card = styled.div`
  width: 250px;
  height: 350px;

  display: flex;
  
  flex-direction: column;

  background-color: var(--dark-blue);
  border-top-left-radius: 16px; 
  border-top-right-radius: 16px; 

  > img {
  
    min-width: 250px;
    
    border-top-left-radius: 16px; 
    border-top-right-radius: 16px; 
  }

`;
