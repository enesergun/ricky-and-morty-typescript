import React from "react";
import InformationCard from "@/components/Cards/InformationCard";
import cn from "classnames";
import style from "./CharacterInformation.module.scss";
interface CharacterInformationProps {
  title: string;
}

const CharacterInformation: React.FC<CharacterInformationProps> = ({
  title,
}) => {
  return (
    <div className={cn(style.characterInformation)}>
      <div className={cn(style.characterInformationTitle)}>{title}</div>
      <div className={cn(style.characterInformationWrapper)}>
        <InformationCard
          title={"Test"}
          value={"test"}
          percentage50Width={true}
        />
        <InformationCard
          title={"Test"}
          value={"test"}
          percentage50Width={true}
        />
        <InformationCard
          title={"Test"}
          value={"test"}
          percentage50Width={true}
        />
        <InformationCard
          title={"Test"}
          value={"test"}
          percentage50Width={true}
        />
        <InformationCard
          title={"Test"}
          value={"test"}
          percentage50Width={true}
        />
        <InformationCard
          title={"Test"}
          value={"test"}
          percentage50Width={true}
        />
      </div>
    </div>
  );
};

export default CharacterInformation;
