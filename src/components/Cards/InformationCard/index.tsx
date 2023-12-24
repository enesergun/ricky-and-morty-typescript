import React from "react";
import cn from "classnames";
import styles from "./InformationCard.module.scss";
interface InformationCardProps {
  title: string | undefined;
  value: string | undefined;
  percentage50Width: boolean;
}

const InformationCard: React.FC<InformationCardProps> = ({
  title,
  value,
  percentage50Width,
}) => {
  return (
    <div
      className={cn(
        styles.informationCard,
        percentage50Width && styles.percentage50Width
      )}
    >
      <div className={cn(styles.informationCardTitle)}>{title}</div>
      <div className={cn(styles.informationCardValue)}>{value}</div>
    </div>
  );
};

export default InformationCard;
