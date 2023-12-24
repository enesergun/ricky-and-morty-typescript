import React from "react";
import cn from "classnames";
import DetailTitle from "@/components/DetailTitle";
import CharacterList from "@/components/CharacterList";

const Favorites = () => {
  return (
    <div className={cn("favorites")}>
      <DetailTitle title={"My Favorites"} favorite={false} />
      <CharacterList seeAll=""/>
    </div>
  );
};

export default Favorites;
