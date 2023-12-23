import React from "react";
import cn from "classnames";
import styles from "./DetailTitle.module.scss";
import { Heart } from "@/constants/icons";

interface DetailTitleProps {
  title: string;
  favorite: boolean;
}

const DetailTitle: React.FC<DetailTitleProps> = ({ title, favorite }) => {
  return (
    <div className={cn(styles.detailTitle)}>
      <div className={cn(styles.title)}>{title}</div>
      {favorite && (
        <div className={cn(styles.favorite)}>
          <div className={cn(styles.favoriteWrapper)}>
            <span onClick={() => {}}>
              <Heart color="transparent" />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailTitle;
