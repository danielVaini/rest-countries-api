import React from 'react';

import { Button, Arrow, Text } from './styles';

import { Link } from 'react-router-dom';

function ButtonBack() {
  return (
    <Button> 
      <Link to="/">
        <Arrow />
        <Text>Back</Text>
      </Link>
    </Button>
  );
}

export default ButtonBack;