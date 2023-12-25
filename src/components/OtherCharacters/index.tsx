import React from "react";
import cn from "classnames";
import style from "./OtherCharacters.module.scss";
import SummaryCharacterCard from "@/components/Cards/SummaryCharacterCard";
import { useSelector } from "react-redux";
import { getCharactersInResidentsList } from "@/redux/features/characters/charactersSlice";
interface OtherCharactersProps {
  title: string;
}

const OtherCharacters: React.FC<OtherCharactersProps> = ({ title }) => {
  const charactersInList: Array<any> = useSelector(
    getCharactersInResidentsList
  );

  

  return (
    <div className={cn(style.otherCharacters)}>
      <div className={cn(style.otherCharactersTitle)}>{title}</div>
      <div className={cn(style.otherCharactersWrapper)}>
        {charactersInList.map((element) => (
          <SummaryCharacterCard key={element.id} data={element} />
        ))}
      </div>
    </div>
  );
};

export default OtherCharacters;
