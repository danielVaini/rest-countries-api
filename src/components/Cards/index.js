import React, { useEffect, useState } from 'react';

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
            <Card href="/" key={item.alpha2Code}>
              <img src={item.flag} alt="Flag"/>
              <div>
                <h3>{item.name}</h3>
                <br/>
                <p>Population: {item.population}</p>
                <p>Region: {item.region}</p>
                <p>Capital: {item.capital}</p>
              </div>
            </Card>
          )
        })}
      </Grid>
  );
}

export default Cards;