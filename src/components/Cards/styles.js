import styled from 'styled-components';

import {IoSearchOutline} from '../../styles/Icons';

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

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

      background-color: var(--input-dark);

      color: var(--text-dark);
    }
  }

  > .select-regions {
    width: 150px;
    height: 50px;

    @media (max-width: 580px) {
      width: 400px;
    }
    @media (max-width: 400px) {
      width: 300px;
    }

    > select {
      outline: none;
      width: 100%;
      height: 100%;

      background-color: var(--card-dark);
      color: var(--text-dark);
      font-weight: 700;

      padding: 15px 20px;


      
      > option {
        height: 40px;
        padding: 20px 10px;
        margin: 46px 0px;

      }

    }
  }
  @media (max-width: 580px){
    flex-direction: column;
    align-items: center;

    input {
      margin-bottom: 16px;

    }
  }

  @media (max-width: 400px){
        .search {
          width: 300px;
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


 @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;

  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;

  }
  @media (max-width: 550px) {
   display: flex;
   flex-direction: column;
   align-items: center;

  }
 
  
`;


export const Card = styled.div`
  
  width: 250px;
  height: 320px;

  display: flex;
  
  flex-direction: column;
  
  background-color: var(--card-dark);
  border-top-left-radius: 8px; 
  border-top-right-radius: 8px; 

  box-shadow: 0 0 8px #2B3743;

  > .flag {
   width : 250px;
   height: 130px;
 

    > img {
      width: 100%;
      height: 100%;
      
      object-fit: cover;
      
      border-top-left-radius: 8px; 
      border-top-right-radius: 8px; 
    }
 }

  > .description {

    > h2 {
      font-size: 16px;
    }
    height: 100%;

    color: var(--text-dark);

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
  min-height: 90vh;
  max-width: 1280px;

  display: flex;
  flex-direction: column;
  align-items: center;
  
`;
