import React, { useEffect, useState } from 'react';

import Menu from '../../components/Menu/index';
import { Container, ShowCard, Details, Text} from './styles';

import api from '../../server/api';
import { useParams } from 'react-router-dom';
import ButtonBack from '../../components/ButtonBack';


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
      <ButtonBack />
        <div className="flag">          
          <img src={country.flag}/>
        </div>
        <Details>
          
        </Details>
      </ShowCard>
    </Container>
   
  );
}

export default Flag;