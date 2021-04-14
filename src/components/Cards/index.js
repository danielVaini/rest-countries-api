import React, { useEffect, useState } from 'react';

import { Grid, Card } from './styles';
import api from '../../server/api';

function Cards() {

const [countrys, setCountrys] = useState([])

useEffect(() => {
  api.get('/all').then((res) => {
    setCountrys(res.data);
    console.log(res.data)
  })
}, [])

  return ( 
      <Grid>
        {countrys.map(item => {
          return (
            <Card key={item.alpha2Code}>
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