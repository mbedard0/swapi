import React, { useState, useEffect } from 'react'
import { getAllStarships } from '../../services/sw-api'

const Starships = (props) => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    getAllStarships()
    .then(starships => setStarships(starships.results))
  }, [])

  return (  
    <>
      <div>
        {starships.map((starship, idx) => 
          <div>{starship.name}</div>
        )}
      </div>
    </>
  );
}

export default Starships;