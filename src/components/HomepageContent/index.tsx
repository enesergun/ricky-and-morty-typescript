import React from "react";
import Locations from "@/components/Locations";
import cn from "classnames";
import styles from "./HomepageContent.module.scss";

const HomepageContent = () => {
  return (
    <div className={cn(styles.homepageContent)}>
      <Locations seeAll={"/locations"} />
    </div>
  );
};

export default HomepageContent;
