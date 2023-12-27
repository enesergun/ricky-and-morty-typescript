import React, { useEffect } from "react";
import cn from "classnames";
import style from "./OtherCharacters.module.scss";
import SummaryCharacterCard from "@/components/Cards/SummaryCharacterCard";
import { useDispatch, useSelector } from "react-redux";
import { getAlreadyCalledResidentsOfLocation } from "@/redux/features/characters/charactersSlice";
import NoDataFound from "../NoDataFound";

import handleResidents from "@/utils/handleResidents";
interface OtherCharactersProps {
  title: string;
  character: any;
  baseUrl: string | null;
}

const OtherCharacters: React.FC<OtherCharactersProps> = ({
  title,
  character,
  baseUrl,
}) => {
  const dispatch = useDispatch();
  const residentsList = useSelector(getAlreadyCalledResidentsOfLocation);
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

  useEffect(() => {
    if (character.location.name !== residentsList.name) {
      handleResidents(baseUrl, character, dispatch);
    }
  }, []);

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
