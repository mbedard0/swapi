import React, { useEffect } from 'react'
const baseUrl="https://swapi.dev/api/starships"

export function getAllStarships() {
  return fetch(`${baseUrl}`)
  .then(res => res.json())
}

// export const getAllStarships = async () => {
//   return fetch(`${baseUrl}/starships`)
//   .then(res => res.json())
// }

export function getStarshipDetails(apiUrl) {
  return fetch(`${apiUrl}`)
  .then(res => res.json())
}
