// hooks/useFavorites.ts
import { useDispatch, useSelector } from 'react-redux';

import { getFavoritesCharacters, addToFavorites, removeFromFavorites } from '@/redux/features/characters/favoritesSlice';

interface UseFavorites {
  favorites: any;
  addToFavorites: (character: object) => void;
  removeFromFavorites: (character: object) => void;
}

const useFavorites = (): UseFavorites => {
  const dispatch = useDispatch();
  const favorites = useSelector(getFavoritesCharacters);

  const addToFavoritesHandler = (character: object) => {
    dispatch(addToFavorites(character));
  };

  const removeFromFavoritesHandler = (character: object) => {
    dispatch(removeFromFavorites(character));
  };

  return {
    favorites,
    addToFavorites: addToFavoritesHandler,
    removeFromFavorites: removeFromFavoritesHandler,
  };
};

export default useFavorites;
