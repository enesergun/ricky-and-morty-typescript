import React from "react";
import cn from "classnames";
import styles from "./InformationCard.module.scss";
interface InformationCardProps {
  title: string;
  value: string;
}

const InformationCard: React.FC<InformationCardProps> = ({ title, value }) => {
  return (
    <div className={cn(styles.informationCard)}>
      <div className={cn(styles.informationCardTitle)}>{title}</div>
      <div className={cn(styles.informationCardValue)}>{value}</div>
    </div>
  );
};

export default InformationCard;
