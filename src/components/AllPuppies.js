import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const cohortName = '2211-FTB-ET-WEB-AM';

const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

const AllPuppies = (props) => {
  console.log(props)
  const puppies = props.puppies;
  const setPuppies = props.setPuppies
  let result;
  useEffect(() => {
    const getPlayers = async () => {
      try {
        const response = await fetch(`${APIURL}/players`)
        result = await response.json();
        setPuppies(result.data.players)
      } catch (error) {
        console.error(error)
      }
    }
    getPlayers()
  }, [])

  const deletePuppy = (id) => {

    setPuppies(prevPuppies => prevPuppies.filter(puppy => puppy.id !== id));

  }

  const newPup = () => {

  }

  return (
    <>
      <SearchBar setPuppies={setPuppies} />
      <button id="newPuppyBtn">Add Puppy</button>
      {
        puppies.map(puppy => (
          <div class="allPups" key={puppy.id}>
            <div>
              <h2>{puppy.name}</h2>
              <p>#{puppy.id}</p>
            </div>
            <img src={puppy.imageUrl} />
            <Link to="/puppy" state={{ puppy: puppy }}>see details</Link>
            <button type="button" onClick={() => deletePuppy(puppy.id)}>delete from roster</button>
          </div>
        ))

      }

    </>



  )



}
export default AllPuppies;