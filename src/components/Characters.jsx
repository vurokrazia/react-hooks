import { useState, useReducer, useMemo, useRef, useCallback } from 'react'
import useCharacters from './../hooks/useCharacters'
import Search from './Search'
const API = 'https://rickandmortyapi.com/api/character';
const initialState = {
  favorites: []
}

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
    default:
      return state;
  }
}

const Characters = () => {


  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState('');
  const searchInput = useRef(null)
  const characters = useCharacters(API)


  const handleClick = favorite => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
  }

  // const handleSearch = () => {
  //   setSearch(searchInput.current.value)
  // }

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, [])

  // const filteredUsers = 
  // characters.filter((user => {
  //   return user.name.toLowerCase().includes(search.toLowerCase())
  // }))

  const filteredUsers = useMemo(() =>
    characters.filter((user => {
      return user.name.toLowerCase().includes(search.toLowerCase())
    }), [characters, search])

  )

  return (
    <div className="Characters">
      {favorites.favorites.map(favorite => (
        <ul key={favorite.id}>
          <li>{favorite.name}</li>
        </ul>
      ))}

      <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />

      {filteredUsers.map(character => (
        <div className="item" key={character.id}>
          <h2>{character.name}</h2>
          <button type="button" onClick={() => handleClick(character)}>Add to favorite</button>
        </div>
      ))}
    </div>
  );
}

export default Characters;