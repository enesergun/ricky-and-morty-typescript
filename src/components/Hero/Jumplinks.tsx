import React from "react";
import { jumplinks } from "@/constants/jumplinks";
import LinkCard from "@/components/Cards/LinkCard";
import styles from "./Hero.module.scss";
import cn from "classnames";
const Jumplinks = () => {
  return (
    <div className={cn(styles.jumplinks)}>
      {jumplinks?.map((element) => (
        <LinkCard key={element.id} title={element.title} link={element.link} />
      ))}
    </div>
  );
};

export default Jumplinks;
