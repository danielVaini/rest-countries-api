import React from 'react';

import { InputContainer,  SearchIcon} from './styles';
import api from '../../server/api';


function Search() {
 



  return (
    <InputContainer>
    <div className="search">
      <SearchIcon />
      <input type="text"  placeholder="Search For a country..."/>
    </div>
    <div className="select-regions">
      <select name="regions">
       <option value="">Africa</option>
       <option value="">Ameria</option>
       <option value="">Asia</option>
       <option value="">Europe</option>
       <option value="">Oceania</option>
      </select>
    </div>
    </InputContainer>
  );
}

export default Search;