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


export const Card = styled.a`
  
  width: 250px;
  height: 350px;

  display: flex;
  
  flex-direction: column;
  
  background-color: var(--dark-blue);
  border-top-left-radius: 16px; 
  border-top-right-radius: 16px; 

  > img {
    width: 100%;
    height: 170px;
    
    
    border-top-left-radius: 16px; 
    border-top-right-radius: 16px; 
  }

  > div {
    height: 100%;

    color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 16px;

    > p {
      margin-bottom: 8px;
    }
  }

`;
