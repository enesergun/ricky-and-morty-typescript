import React, { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./DetailTitle.module.scss";
import { Heart } from "@/constants/icons";
import useFavorites from "@/hooks/useFavorites";
import isCharacterFavorites from "@/helpers/isCharacterFavorites";
import executeFavorite from "@/utils/exevuteFavorite";

interface DetailTitleProps {
  title: string | undefined;
  favorite: boolean;
  item: {
    id: number;
  };
}

const DetailTitle: React.FC<DetailTitleProps> = ({ title, favorite, item }) => {
  const [alreadyFavorite, setAlreadyFavorite] = useState(false);
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  useEffect(() => {
    if (favorite) {
      setAlreadyFavorite(isCharacterFavorites(item?.id, favorites));
    }
  }, [favorites]);

  const handleAddFavorite = () => {
    executeFavorite(alreadyFavorite, addToFavorites, removeFromFavorites, item);
  };

  return (
    <div className={cn(styles.detailTitle)}>
      <div className={cn(styles.title)}>{title}</div>
      {favorite && (
        <div className={cn(styles.favorite)}>
          <div className={cn(styles.favoriteWrapper)}>
            <span onClick={() => handleAddFavorite()}>
              <Heart color={alreadyFavorite ? "red" : "transparent"} />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailTitle;
