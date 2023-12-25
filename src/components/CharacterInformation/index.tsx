import React from "react";
import InformationCard from "@/components/Cards/InformationCard";
import cn from "classnames";
import style from "./CharacterInformation.module.scss";
interface CharacterInformationProps {
  title: string;
  data: {
    gender: string;
    status: string;
    species: string;
    origin: {
      name: string;
    };
    location: {
      name: string;
    };
    type: string;
  };
}

const CharacterInformation: React.FC<CharacterInformationProps> = ({
  title,
  data,
}) => {
  return (
    <div className={cn(style.characterInformation)}>
      <div className={cn(style.characterInformationTitle)}>{title}</div>
      <div className={cn(style.characterInformationWrapper)}>
        <InformationCard
          title={"Status"}
          value={data?.status}
          percentage50Width={true}
        />
        <InformationCard
          title={"Gender"}
          value={data?.gender}
          percentage50Width={true}
        />
        <InformationCard
          title={"Species"}
          value={data?.species}
          percentage50Width={true}
        />
        <InformationCard
          title={"Origin"}
          value={data?.origin.name}
          percentage50Width={true}
        />
        <InformationCard
          title={"Location"}
          value={data?.location.name}
          percentage50Width={true}
        />
        <InformationCard
          title={"Type"}
          value={data?.type}
          percentage50Width={true}
        />
      </div>
    </div>
  );
};

export default CharacterInformation;
