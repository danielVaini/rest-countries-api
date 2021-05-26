import styled from 'styled-components';



export const Container = styled.div`
 width: 100%;
 height: 100vh;

 background-color: var(--bg-dark);
 @media (max-width: 1100px){
   height: 800px;
 }
 @media (max-width: 680px){
   height: 1200px;
 }
`;

export const Layout = styled.div`
  width: 100%;
  height: auto;

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
    color: var(--text-dark);
    > h1{
      font-size: 32px;
      margin-bottom: 40px;
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

    > .borders {
      display: flex;

      > p:first-child {
        margin-right: 10px;
      }

      > .borders-container {
        display: flex;
      }
    }
  }

  @media (max-width: 1100px){
    flex-direction: column;
    .img-container{
      width: 300px;
      height: 190px;

      margin-bottom: 80px;
    }

    .details {
      align-items: center;

    }
  }

  @media (max-width: 640px){

    .img-container {
      margin-bottom: 216px;
    }
    .details {
      align-items: center;
      .details-container {
        flex-direction: column;

        width: 100%;
        align-items: left;

        margin-bottom: 8px;

        
      }

      > .borders {
        flex-direction: column;
        > .borders-container {
        
          margin-top: 16px;
          flex-direction: column;
          justify-content: space-around;
          

          height: 200px;
        }
      }
    }
  }
`;