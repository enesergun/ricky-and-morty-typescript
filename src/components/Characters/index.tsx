import React, { useEffect, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import cn from "classnames";
import styles from "./Characters.module.scss";
import CharacterSlider from "@/components/Swiper/CharacterSlider";
import { useDispatch } from "react-redux";
import {
  setCharactersInResidentsList,
  setAlreadyCalledResidentsOfLocation,
} from "@/redux/features/characters/charactersSlice";
import Filters from "@/components/Filters";
import NoDataFound from "../NoDataFound";
interface CharactersProps {
  seeAll: string;
  title?: string;
  data?: any;
  filter?: string;
  location: {
    name: string | undefined;
    url: string | undefined;
  };
}

const Characters: React.FC<CharactersProps> = ({
  seeAll,
  title = "Characters",
  data,
  filter,
  location,
}) => {
  const [filteredData, setFilteredData] = useState(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCharactersInResidentsList(data));
    dispatch(setAlreadyCalledResidentsOfLocation(location));
  }, []);
  useEffect(() => {
    if (filter) {
      const filteredArrOfData = data.filter(
        (element: { status: string }) => element.status.toLowerCase() === filter
      );
      setFilteredData(filteredArrOfData);
    } else {
      setFilteredData(data);
    }
  }, [filter]);

  return (
    <div className={cn(styles.characters)}>
      <Filters />
      <SectionTitle sectionId="characters" title={title} seeAll={seeAll} />
      <div className={cn(styles.sliderWrapper)}>
        {filteredData?.length === 0 && <NoDataFound />}
        <CharacterSlider data={filteredData} />
      </div>
    </div>
  );
};

export default Characters;
