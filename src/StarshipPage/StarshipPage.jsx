import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router';
import { getStarshipDetails } from '../services/sw-api';

const StarshipPage = (props) => {
  const [starshipDetails, setStarshipDetails] = useState({})
  let location = useLocation()

  useEffect(() => {
    getStarshipDetails(location.state.starship.url)
    .then(starshipDetails => setStarshipDetails(starshipDetails))
  },[])

  return (  
    <>
      <div>
        <h1>{starshipDetails.name}</h1>
        <h3>{starshipDetails.model}</h3>
      </div>
    </>
  );
}

export default StarshipPage;