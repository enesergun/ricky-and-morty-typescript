import Link from "next/link";
import React from "react";
import styles from "./LinkCard.module.scss";
import cn from "classnames";
interface LinkCardProps {
  title: string;
  link: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ title, link }) => {
  return (
    <Link href={link} passHref>
      <div className={cn(styles.linkCard)}>{title}</div>
    </Link>
  );
};

export default LinkCard;
