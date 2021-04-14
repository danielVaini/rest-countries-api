import styled from 'styled-components';

export const Grid = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  

  grid-column-gap: 80px;

  margin-top: 40px;
`;


export const Card = styled.div`
  width: 250px;
  height: 300px;

  display: flex;
  
  flex-direction: column;

  > img {
    width: 200px;
    height: 140px;
  }

`;
