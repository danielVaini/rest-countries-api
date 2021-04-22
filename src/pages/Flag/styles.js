import styled from 'styled-components';

export const Container = styled.div`
 width: 100%;
 height: 100%;

 display:flex;
 flex-direction: column;

 align-items: center;
`;

export const ShowCard = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 700px;

  border: 1px solid white;

  display: flex;

  padding: 24px;
>div {

  > .flag {
    width: 600px;
    height: 350px;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      
    }
  }
}
`;

export const Details = styled.div`

`;
export const Text = styled.p`
  color: white;
  margin: 0px 0px 40px 48px;

  font-size: 24px;

  > span {
    font-size: 18px
  }
`;
