import React from "react";
import Locations from "@/components/Locations";
import cn from "classnames";
import styles from "./HomepageContent.module.scss";

interface HomepageContentProps {
  locations: any; // Replace 'any' with the actual type of your locations object
}

const HomepageContent: React.FC<HomepageContentProps> = ({ locations }) => {
  return (
    <div className={cn(styles.homepageContent)}>
      <Locations seeAll={"/locations"} locations={locations} />
    </div>
  );
};

export default HomepageContent;
