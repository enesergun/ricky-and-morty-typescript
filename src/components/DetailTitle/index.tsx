import React from "react";
import cn from "classnames";
import styles from "./DetailTitle.module.scss";

interface DetailTitleProps {
  title: string;
}

const DetailTitle: React.FC<DetailTitleProps> = ({ title }) => {
  return <div className={cn(styles.detailTitle)}>{title}</div>;
};

export default DetailTitle;
