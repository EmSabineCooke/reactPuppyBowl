import React, { useState } from "react";
import { useLocation } from 'react-router-dom';

const SearchBar = (props) => {
  console.log(props)
  const setPuppies = props.setPuppies;
  console.log(typeof setPuppies)
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();
    console.log(name + breed);
    setPuppies(prevPuppies => prevPuppies.filter(puppy => {
      return puppy.name.toLowerCase() === name.toLowerCase() || puppy.breed.toLowerCase() === breed.toLowerCase()
    }));
  }

  return (
    <>
      <form id="search-dog"
        onSubmit={searchHandler}>
        <label class="s-dog">
          name:
          <input
            onChange={(e) => {
              setName(e.target.value)
            }}
            name="name"
            id="name"
            type='string'
            value={name} />
        </label>
        <label class="s-dog">
          breed:
          <input
            onChange={(e) => {
              setBreed(e.target.value)
            }}
            breed="breed"
            id="breed"
            type='string'
            value={breed} />

        </label>
        <button type="submit" form="search-dog">Submit</button>

      </form>

    </>
  )


}
export default SearchBar