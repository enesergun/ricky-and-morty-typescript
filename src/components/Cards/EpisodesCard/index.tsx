import { TvBox } from "@/constants/icons";
import React from "react";
import styles from "./Episodes.module.scss";
import cn from "classnames";
const EpisodesCard = () => {
  return (
    <div className={cn(styles.episodesCard)}>
      <div>
        <TvBox />
      </div>
      <div>Ricksy Business</div>
    </div>
  );
};

export default EpisodesCard;
