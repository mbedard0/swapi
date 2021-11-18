import React, { useEffect } from 'react'
const baseUrl="https://swapi.dev/api"

export function getAllStarships() {
  return fetch(`${baseUrl}/starships`)
  .then(res => res.json())
}


// export const getAllStarships = async () => {
//   return fetch(`${baseUrl}/starships`)
//   .then(res => res.json())
// }