import React from "react";
import SectionTitle from "@/components/SectionTitle";
import LocationCard from "@/components/Cards/LocationCard";
import cn from "classnames";
import styles from "./CharacterList.module.scss";
import Pagination from "@/components/Elements/Pagination";
import CharacterCard from "../Cards/CharacterCard";
interface CharacterListProps {
  seeAll: string;
}

const CharacterList: React.FC<CharacterListProps> = ({ seeAll }) => {
  return (
    <div className={cn(styles.characterList)}>
      <div className={cn(styles.characterListCardWrapper)}>
        <CharacterCard item={undefined} />
        <CharacterCard item={undefined} />
        <CharacterCard item={undefined} />
        <CharacterCard item={undefined} />
        <CharacterCard item={undefined} />
        <CharacterCard item={undefined} />
        <CharacterCard item={undefined} />
        <CharacterCard item={undefined} />
        <CharacterCard item={undefined} />
        <CharacterCard item={undefined} />
        <CharacterCard item={undefined} />
        <CharacterCard item={undefined} />
        <CharacterCard item={undefined} />
        <CharacterCard item={undefined} />
        <CharacterCard item={undefined} />
      </div>
      <Pagination
        info={{
          count: 826,
          pages: 42,
          next: true,
          prev: true,
        }}
      />
    </div>
  );
};

export default CharacterList;
