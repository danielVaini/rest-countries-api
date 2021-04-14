import styled from 'styled-components';

import {IoSearchOutline} from '../../styles/Icons';

export const InputContainer = styled.div`
  width: 100%;
  max-width: 1280px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top:40px;

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
