import React from "react";
import cn from "classnames";
import style from "./OtherCharacters.module.scss";
import SummaryCharacterCard from "@/components/Cards/SummaryCharacterCard";
import { useSelector } from "react-redux";
import { getCharactersInResidentsList } from "@/redux/features/characters/charactersSlice";
import NoDataFound from "../NoDataFound";
interface OtherCharactersProps {
  title: string;
  character: object;
}

const OtherCharacters: React.FC<OtherCharactersProps> = ({
  title,
  character,
}) => {
  const getOtherCharactersWithSameCharacter =
    (character: any) => (store: { characters: { residents: any[] } }) => {
      return store.characters.residents.filter(
        (element) =>
          element.id !== character.id &&
          element.status === character.status &&
          element.location.name === character.location.name
      );
    };
  const charactersInList: Array<any> = useSelector(
    getOtherCharactersWithSameCharacter(character)
  );
  return (
    <div className={cn(style.otherCharacters)}>
      <div className={cn(style.otherCharactersTitle)}>{title}</div>
      <div className={cn(style.otherCharactersWrapper)}>
        {charactersInList.length === 0 && <NoDataFound />}
        {charactersInList.map((element) => (
          <SummaryCharacterCard key={element.id} data={element} />
        ))}
      </div>
    </div>
  );
};

export default OtherCharacters;
