import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Grid, CardContainer, Card, InputContainer, SearchIcon } from './styles';
import api from '../../server/api';

function Cards() {

  const [countries, setCountries] = useState([])
  
  const [newCountry, setNewCountry] = useState([])
  useEffect(() => {
    api.get(`/all`).then((res) => {
      setCountries(res.data);
     setNewCountry(res.data);
    })
   
  }, [])

  function selectIndex() {
    let select = document.querySelector('#regions');
    let option = select.options[select.selectedIndex];
    let value = option.text;

    if (value !== "All") {
      setNewCountry(countries.filter(item => item.region === value))
    } else {
      setNewCountry(countries)
    }
  }


  function selectInput() {
    let input = document.querySelector("#search-in");
    setNewCountry(countries.filter(item => item.name.includes(input.value)))
    
    
    
  }



  return (
    <CardContainer>
      <InputContainer>
        <div className="search">
          <SearchIcon />
          <input type="text" placeholder="Search For a country..." id="search-in" onChange={() => selectInput()}/>
        </div>
        <div className="select-regions">
          <select id="regions" onChange={() => selectIndex()}>
            <option value="All" >All</option>
            <option value="Americas" >Americas</option>
            <option value="Africa" >Africa</option>
            <option value="Asia" >Asia</option>
            <option value="Europe" >Europe</option>
            <option value="Oceania" >Oceania</option>
          </select>

        </div>
      </InputContainer>
      <Grid>

        {
          newCountry.map(item => {
            return (
              <Link key={item.name} to={`/flag/${item.alpha2Code}`}>
                <Card>
                  <div className="flag">
                    <img src={item.flag} alt="Flag" />
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

          })


        }

      </Grid>
    </CardContainer>
  );
}

export default Cards;