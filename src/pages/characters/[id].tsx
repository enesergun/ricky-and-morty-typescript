import React from "react";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import CharacterInformation from "@/components/CharacterInformation";
import cn from "classnames";

const CharacterDetail = () => {
  return (
    <div className={cn("characterDetail")}>
      <Image
        className={cn("characterDetail__image")}
        src="https://rickandmortyapi.com/api/character/avatar/12.jpeg"
        width={300}
        height={200}
        alt="RickyNMortyLogo"
      />
      <SectionTitle sectionId="" title="Rick Sanchez" />
      <div className={cn('characterDetail__informationWrapper')}>
        <CharacterInformation title="Informations" />
        <CharacterInformation title="Episodes" />
      </div>
    </div>
  );
};

export default CharacterDetail;
