import React, { useEffect, useState } from 'react';

import Menu from '../../components/Menu/index';
import { Container, Layout} from './styles';

import api from '../../server/api';
import { useParams } from 'react-router-dom';
import ButtonBack from '../../components/ButtonBack';


function Flag() {

  const { code } = useParams();
  const [country, setCountry] = useState([])

  const [currencie, setCurrencie] = useState('')
  const [languages, setLanguages] = useState([])
  const [borders, setBorders] = useState([]);
 

  useEffect(() =>{
    api.get(`/alpha/${code}`).then((res) =>{
     setCountry(res.data);
     console.log(res.data);
     setCurrencie(res.data.currencies.map(item => item.name))
     setLanguages(res.data.languages.map((item, index) => {
     if(index > 0){
       return ", " + item.name
     }else {
       return item.name
     }
     }))
     setBorders(res.data.borders);
    })
  }, [])


  return (
    <Container>
      <Menu />
      <ButtonBack />
      <Layout>
        <div className="img-container">
          <img src={country.flag} alt="Flag"/>
        </div>
        <div className="details">
          <h1>{country.name}</h1>
          <div className="details-container">
            <div>
              <p><strong>Native Name: </strong>{country.nativeName}</p>
              <p><strong>Population: </strong>{country.population}</p>
              <p><strong>Region: </strong>{country.region}</p>
              <p><strong>Sub Region: </strong>{country.subRegion}</p>
              <p><strong>Capital: </strong>{country.capital}</p>
            </div>
            <div>
              <p><strong>Top Level Domain: </strong>{country.topLevelDomain}</p>
              <p><strong>Currencies: </strong>{currencie}</p>
              <p><strong>Languaegs: </strong>{languages}</p>

            </div>
          </div>
          <p><strong>Borders: </strong></p>
        </div>
      </Layout>
    </Container>
   
  );
}

export default Flag;