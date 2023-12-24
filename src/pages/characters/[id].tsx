import React from "react";
import Image from "next/image";
import CharacterInformation from "@/components/CharacterInformation";
import OtherCharacters from "@/components/OtherCharacters";

import cn from "classnames";
import DetailTitle from "@/components/DetailTitle";

const CharacterDetail = () => {
  return (
    <div className={cn("characterDetail")}>
      <div className={cn("characterDetail__informationWrapper")}>
        <Image
          className={cn("characterDetail__image")}
          src="https://rickandmortyapi.com/api/character/avatar/12.jpeg"
          width={375}
          height={200}
          alt="RickyNMortyLogo"
        />

        <div className={cn("characterDetail__informationContainer")}>
          <DetailTitle title="Rick Sanchez" favorite={true} />
          <CharacterInformation title="Informations" />
        </div>
      </div>
      <OtherCharacters title="Other Characters" />
    </div>
  );
};

export default CharacterDetail;
