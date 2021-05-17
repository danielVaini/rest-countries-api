import styled from 'styled-components';

export const BorderDiv = styled.div`
  width: 65px;
  
  border: 1px solid var(--vr-dark-blue-LG);
  margin-left: 8px;
  background-color: var(--dark-blue);
  display: flex;
  align-items: center;
  justify-content: center;

  > p {
    font-size: 12px;
    letter-spacing: 3px;
    font-weight: 600;
  }
`;
