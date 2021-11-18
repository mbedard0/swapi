import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllStarships } from '../../services/sw-api'

const Starships = (props) => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    getAllStarships()
    .then(starships => setStarships(starships.results))
  }, [])

  return (  
    <>
      {starships.length ? 
      <div class="starship-cards">
        {starships.map((starship, idx) =>
          <Link 
            to={{pathname: `/starship/${idx}` }}
            state= {{ starship }} 
            key={idx}>
          <div>{starship.name}</div>
          </Link>
        )}
      </div>
      :
      <p>Loading....</p>
      }
    </>
  );
}

export default Starships;