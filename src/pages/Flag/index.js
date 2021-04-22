import React, { useEffect, useState } from 'react';

import Menu from '../../components/Menu/index';
import { Container, ShowCard, Details, Text} from './styles';

import api from '../../server/api';
import { useParams } from 'react-router-dom';
import ButtonBack from '../../components/ButtonBack';


function Flag() {

  const { code } = useParams();
  const [country, setCountry] = useState([])

  const [currencie, setCurrencie] = useState('')
  const [languages, setLanguages] = useState([])
 

  useEffect(() =>{
    api.get(`/alpha/${code}`).then((res) =>{
     setCountry(res.data);
     console.log(res.data)
     setCurrencie(res.data.currencies.map(item => item.name))
     setLanguages(res.data.languages.map((item, index) => {
     if(index > 0){
       return ", " + item.name
     }else {
       return item.name
     }
     }))
    })
  }, [])


  return (
    <Container>
      <Menu />
      <ShowCard>
      <div >
      <ButtonBack />

        <div className="flag">          
          <img src={country.flag}/>
        <Details>
          <h1>{country.name}</h1>
          <div>
            <p><strong>Native Name: </strong>{country.nativeName}</p>
            <p><strong>Population: </strong>{country.population}</p>
            <p><strong>Region: </strong>{country.region}</p>
            <p><strong>Sub Region: </strong>{country.subregion}</p>
            <p><strong>Capital: </strong>{country.capital}</p>
          </div>
          <p><strong>Top Level Domain: </strong>{country.topLevelDomain}</p>
          <p><strong>Currencies: </strong>{currencie}</p>
          <p><strong>Languages: </strong>{languages}</p>
        </Details>
        </div>
      </div>
      </ShowCard>
    </Container>
   
  );
}

export default Flag;