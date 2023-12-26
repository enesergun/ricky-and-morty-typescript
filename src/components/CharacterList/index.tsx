import React, { useEffect } from "react";
import cn from "classnames";
import styles from "./CharacterList.module.scss";
import Pagination from "@/components/Elements/Pagination";
import CharacterCard from "../Cards/CharacterCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getPaginatedFavorites,
  getFavoritesCharacters,
  setCurrentPage,
} from "@/redux/features/characters/favoritesSlice";
interface CharacterListProps {
  seeAll: string;
  page: string;
}

const CharacterList: React.FC<CharacterListProps> = ({ seeAll, page }) => {
  const dispatch = useDispatch();
  const paginatedFavorites = useSelector(getPaginatedFavorites);
  const favorites = useSelector(getFavoritesCharacters);

  useEffect(() => {
    dispatch(setCurrentPage(Number(page)));
  }, [page]);

  return (
    <div className={cn(styles.characterList)}>
      <div className={cn(styles.characterListCardWrapper)}>
        {paginatedFavorites.favorites.map(
          (character: { id: React.Key | null | undefined }) => (
            <CharacterCard key={character.id} item={character} />
          )
        )}
      </div>
      <Pagination info={paginatedFavorites.info} />
    </div>
  );
};

export default CharacterList;
