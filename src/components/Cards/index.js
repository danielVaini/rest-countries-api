import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

import { Grid, Card } from './styles';
import api from '../../server/api';

function Cards() {

const [countries, setCountries] = useState([])

useEffect(() => {
  api.get('/all').then((res) => {
    setCountries(res.data);
    console.log(res.data)
  })
}, [])

  return ( 
      <Grid>
        {countries.map(item => {
          return (
            <Link key={item.alpha2Code} to={`/flag/${item.alpha2Code}`} >
            <Card>
              <img src={item.flag} alt="Flag"/>
              <div>
                <h3>{item.name}</h3>
                <br/>
                <p>Population: {item.population}</p>
                <p>Region: {item.region}</p>
                <p>Capital: {item.capital}</p>
              </div>
            </Card>
            </Link>
          )
        })}
      </Grid>
  );
}

export default Cards;