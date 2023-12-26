import React, { useEffect, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import cn from "classnames";
import styles from "./Characters.module.scss";
import CharacterSlider from "@/components/Swiper/CharacterSlider";
import { useDispatch } from "react-redux";
import { setCharactersInResidentsList } from "@/redux/features/characters/charactersSlice";
import Filters from "@/components/Filters";
interface CharactersProps {
  seeAll: string;
  title?: string;
  data?: any;
  filter?: string;
}

const Characters: React.FC<CharactersProps> = ({
  seeAll,
  title = "Characters",
  data,
  filter,
}) => {
  const [filteredData, setFilteredData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCharactersInResidentsList(data));
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
      <div className={styles.sliderWrapper}>
        <CharacterSlider data={filteredData} />
      </div>
    </div>
  );
};

export default Characters;
