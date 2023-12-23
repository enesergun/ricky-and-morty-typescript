import React from "react";
import cn from "classnames";
import style from "./OtherCharacters.module.scss";
import SummaryCharacterCard from "@/components/Cards/SummaryCharacterCard";
interface OtherCharactersProps {
  title: string;
}

const OtherCharacters: React.FC<OtherCharactersProps> = ({ title }) => {
  return (
    <div className={cn(style.otherCharacters)}>
      <div className={cn(style.otherCharactersTitle)}>{title}</div>
      <div className={cn(style.otherCharactersWrapper)}>
        <SummaryCharacterCard />
        <SummaryCharacterCard />
        <SummaryCharacterCard />
        <SummaryCharacterCard />
        <SummaryCharacterCard />
        <SummaryCharacterCard />
        <SummaryCharacterCard />
      </div>
    </div>
  );
};

export default OtherCharacters;
