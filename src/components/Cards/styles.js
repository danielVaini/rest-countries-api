import styled from 'styled-components';

import {IoSearchOutline} from '../../styles/Icons';

let windowWidth = window.innerWidth;

export const InputContainer = styled.div`
  width: 100%;

  max-width: ${windowWidth - 50 + "px"};

  display: flex;

  justify-content: space-between;

  margin: 40px 20px 0px;
  

  > .search {
    display: flex;
    align-items: center;

    > input {
      border: none;
      outline: none;

      width: 400px;
      height: 50px;

      padding: 0 60px;

      background-color: var(--dark-blue);

      color: white;
    }
  }

  > .select-regions {
    width: 150px;
    height: 50px;

    > select {
      width: 100%;
      height: 100%;

      background-color: var(--dark-blue);
      color: var(--white-dr-lg-text);

      padding: 15px 20px;
      
      > option {
        
        margin: 46px 0px;
      }

    }
  }
`;

export const SearchIcon = styled(IoSearchOutline)`
  height: 32px;
  width: 32px;

  position: absolute;
  
  margin-left: 16px;

`;

export const Grid = styled.div`
  
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  

  grid-column-gap: 0;
  grid-row-gap: 24px;

  margin-top: 40px;

  padding-left: 4%;

 > a {
   text-decoration: none;
   width:250px;
 }

 
  
`;


export const Card = styled.div`
  
  width: 250px;
  height: 350px;

  display: flex;
  
  flex-direction: column;
  
  background-color: var(--dark-blue);
  border-top-left-radius: 16px; 
  border-top-right-radius: 16px; 

  > .flag {
   width : 250px;
   height: 150px;
 

    > img {
      width: 100%;
      height: 100%;
      
      object-fit: cover;
      
      border-top-left-radius: 16px; 
      border-top-right-radius: 16px; 
    }
 }

  > .description {
    height: 100%;

    color: white;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    padding: 16px;
    > .info {

      > p {
        margin-bottom: 8px;
      }
    }
  }

`;

export const CardContainer = styled.div`
  width: 100%;
  height: auto;
  max-width: 1280px;

  display: flex;
  flex-direction: column;
  align-items: center;
  
`;
