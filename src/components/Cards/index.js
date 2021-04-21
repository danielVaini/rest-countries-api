import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Grid, CardContainer, Card, InputContainer, SearchIcon } from './styles';
import api from '../../server/api';

function Cards() {

  const [countries, setCountries] = useState([])
  const [search, setSeacrch] = useState('all')
  
  useEffect(() => {
    api.get(`/${search}`).then((res) => {
      setCountries(res.data);
    })
  }, [])

  function getValue() {
    let select = document.querySelector('select');
    let option = select.children[select.selectedIndex];
    let valueSelect = option.textContent;
    
    setSeacrch(valueSelect);
  }

  return (
    <CardContainer>
        <InputContainer>
          <div className="search">
            <SearchIcon />
            <input type="text"  placeholder="Search For a country..."/>
          </div>
          <div className="select-regions">
            <select id="regions" onChange={() => getValue()}>
              <option value="all" selected>All</option>
              <option value="Africa">Africa</option>
              <option value="America">Ameria</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
       </InputContainer>
      <Grid>

        {countries.map((item) => {
          return (

            <Link to={`/flag/${item.alpha2Code}`}>
            <Card>
              <div className="flag">
                <img src={item.flag} alt="Flag"/>
              </div>
              <div className="description">
                <h2>{item.name}</h2>
                <div className="info">
                  <p><strong>Population: </strong> {item.population}</p>
                  <p><strong>Region: </strong> {item.region}</p>
                  <p><strong>Capital: </strong>{item.capital}</p>
                </div>
              </div>
            </Card>
          </Link>
            )
        })}
        </Grid>
    </CardContainer>
  );
}

export default Cards;