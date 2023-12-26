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
import NoDataFound from "@/components/NoDataFound";
interface CharacterListProps {
  seeAll: string;
  page: string;
}

const FavoriteCharacterList: React.FC<CharacterListProps> = ({ seeAll, page }) => {
  const dispatch = useDispatch();
  const paginatedFavorites = useSelector(getPaginatedFavorites);

  useEffect(() => {
    dispatch(setCurrentPage(Number(page)));
  }, [page]);

  return (
    <div className={cn(styles.characterList)}>
      <div className={cn(styles.characterListCardWrapper)}>
        {paginatedFavorites.favorites.length === 0 && <NoDataFound />}
        {paginatedFavorites.favorites.map(
          (character: { id: React.Key | null | undefined }) => (
            <CharacterCard key={character.id} item={character} />
          )
        )}
      </div>
      {paginatedFavorites.favorites.length !== 0 && (
        <Pagination info={paginatedFavorites.info} />
      )}
    </div>
  );
};

export default FavoriteCharacterList;
