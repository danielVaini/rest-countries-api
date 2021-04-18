import React, { useEffect, useState } from 'react';

import Menu from '../../components/Menu/index';
import { Container, ShowCard, Img, Details, Text} from './styles';

import api from '../../server/api';
import { useParams } from 'react-router-dom';


function Flag() {

  const { code } = useParams();
  const [country, setCountry] = useState([])

  useEffect(() =>{
    api.get(`/alpha/${code}`).then((res) =>{
     setCountry(res.data);
    })
  }, [])


  return (
    <Container>
      <Menu />
      <ShowCard>
        <Img src={country.flag}/>
        <Details>
          <Text>Name: {country.name}</Text>
          <Text>Region: {country.region}</Text>
          <Text>Population: {country.population}</Text>
        </Details>
      </ShowCard>
    </Container>
   
  );
}

export default Flag;