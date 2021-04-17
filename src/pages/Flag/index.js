import React from 'react';

import Menu from '../../components/Menu/index';
import { ShowCard, Img, Details, Text} from './styles';

function Flag() {
  return (
    <>
      <Menu />
      <ShowCard>
        <Img />
        <Details>
          <Text>Name:</Text>
          <Text>Region:</Text>
          <Text>Population:</Text>
        </Details>
      </ShowCard>
    </>
  );
}

export default Flag;