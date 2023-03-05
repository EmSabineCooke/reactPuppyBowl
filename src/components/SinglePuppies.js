import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import AllPuppies from "./AllPuppies";

const SinglePuppies = () => {
  const location = useLocation()
  const { puppy } = location.state

  const goBack = () => {
    AllPuppies();
  }
  return (
    <>
      <div id="singlePupPage">
        <h2>
          #{puppy.id}
          <br></br>
          Name: {puppy.name}
          <br></br>
          Breed: {puppy.breed}
        </h2>
        <h2></h2>
        <img id="puppy-img" src={puppy.imageUrl} />
        <br></br>
        <button onClick={goBack}>Go Back</button>
      </div>



    </>
  )


}
export default SinglePuppies