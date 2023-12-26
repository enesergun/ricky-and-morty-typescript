import React from "react";
import cn from "classnames";
import styles from "./CharacterList.module.scss";
import Pagination from "@/components/Elements/Pagination";
import CharacterCard from "../Cards/CharacterCard";
import Filters from "@/components/Filters";
import NoDataFound from "@/components/NoDataFound";
interface CharacterListProps {
  seeAll: string;
  page: string;
  data: any;
}

const CharacterList: React.FC<CharacterListProps> = ({ data }) => {
  return (
    <div className={cn(styles.characterList)}>
      <Filters />
      <div className={cn(styles.characterListCardWrapper)}>
        {data?.results?.length === 0 && <NoDataFound />}
        {data?.results?.map(
          (character: { id: React.Key | null | undefined }) => (
            <CharacterCard key={character.id} item={character} />
          )
        )}
      </div>
      {data?.results?.length !== 0 && <Pagination info={data?.info} />}
    </div>
  );
};

export default CharacterList;
