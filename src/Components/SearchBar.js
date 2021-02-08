import React from 'react';
import Button from '@material-ui/core/Button';
import { useGlobalContext } from '../Context';

const SearchBar = () => {
  const { handleSubmit, searchVid, setSearchVid } = useGlobalContext();
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='e.g cars'
          value={searchVid}
          onChange={(e) => setSearchVid(e.target.value)}
          className='search-bar'
        />
      </form>

      <div>
        <Button variant='contained' onClick={handleSubmit}>
          Search
        </Button>
      </div>
    </>
  );
};

export default SearchBar;
