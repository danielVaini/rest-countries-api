import styled from 'styled-components';

export const Container = styled.div`
 width: 100%;
 height: 100%;

 
`;

export const Layout = styled.div`
  width: 100%;


  display: flex;
  align-items: center;
  justify-content: space-evenly;

  > .img-container {
    width: 500px;
    height: 350px;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  > .details {
    height: 250px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: var(--white);
    > h1{
      font-size: 32px;
    }
    
    > .details-container {
      width: 400px;

      display: flex;
      justify-content: space-between;
      >div {

        > p {
          margin-bottom: 16px;
          
        }
      }
    }
  }
`;