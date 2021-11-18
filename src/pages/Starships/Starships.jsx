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
      <div>
        {starships.map((starship, idx) =>
          <Link 
            to={{pathname: `/starship/${idx}` }}
            state= {{ starship }} 
            key={idx}>
          <div>{starship.name}</div>
          </Link>
        )}
      </div>
    </>
  );
}

export default Starships;