import React from 'react';

import { BorderDiv } from './styles';

function Borders(props) {
  return (
    <BorderDiv>
      <p>{props.text}</p>
    </BorderDiv>
  );
}

export default Borders;