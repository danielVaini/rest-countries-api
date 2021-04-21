import styled from 'styled-components';

export const Container = styled.div`
 width: 100%;
 height: 100%;
`;

export const ShowCard = styled.div`
  width: 100%;
  height: 700px;

  border: 1px solid white;

  display: flex;

  padding: 24px;

  > .flag {
    width: 500px;
    height: 300px;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      
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
