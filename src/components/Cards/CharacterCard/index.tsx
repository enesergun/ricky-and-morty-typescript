import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Pulse, Skull, Alien, Heart } from "@/constants/icons";
import Link from "next/link";
import styles from "./CharacterCard.module.scss";
import cn from "classnames";
import useFavorites from "@/hooks/useFavorites";
import isCharacterFavorites from "@/helpers/isCharacterFavorites";
import executeFavorite from "@/utils/exevuteFavorite";

interface CharacterCardProps {
  item: any;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ item }) => {
  const [alreadyFavorite, setAlreadyFavorite] = useState(false);
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  useEffect(() => {
    setAlreadyFavorite(isCharacterFavorites(item.id, favorites));
  }, [favorites]);

  const handleAddFavorite = () => {
    executeFavorite(alreadyFavorite, addToFavorites, removeFromFavorites, item);
  };

  return (
    <div className={cn(styles.characterCard, "characterCardContainer")}>
      <div className={cn(styles.favorite)}>
        <div className={cn(styles.favoriteWrapper)}>
          <span onClick={() => handleAddFavorite()}>
            <Heart color={alreadyFavorite ? "red" : "transparent"} />
          </span>
        </div>
      </div>
      <Link href={`/characters/${item?.id}`}>
        <Image
          className={cn(styles.characterCardImage)}
          src={item?.image}
          width={250}
          height={150}
          alt="Character Image"
        />
        <div className={cn(styles.characterCardTitle)}>{item?.name}</div>
        <div className={cn(styles.characterCardInformation)}>
          <div className={cn(styles.characterCardInformationRow)}>
            {item?.status === "Alive" ? <Pulse /> : <Skull />}
            <span>{item?.status}</span>
          </div>
          <div className={cn(styles.characterCardInformationRow)}>
            <Alien />
            <span>{item?.species}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CharacterCard;
