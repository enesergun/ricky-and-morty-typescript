import { Planet } from "@/constants/icons";
import Link from "next/link";
import React from "react";
import styles from "./Location.module.scss";
import cn from "classnames";

interface LocationCardProps {
  location: {
    // Define the structure of the location object
    // Example:
    id: number;
    name: string;
    type: string;
    residents: Array<string>;
    // ...
  };
}

const LocationCard: React.FC<LocationCardProps> = ({ location }) => {
  return (
    <Link href={`/locations/${location.id}`}>
      <div className={cn(styles.locationCard)}>
        <div className={cn(styles.locationCardIcon)}>
          <Planet size={48} />
        </div>
        <div className={cn(styles.informationAboutLocation)}>
          <div className={cn(styles.informationWrapper)}>
            <span className={cn(styles.informationTitle)}>Name:</span>
            <span className={cn(styles.informationValue)}>{location?.name}</span>
          </div>
          <div className={cn(styles.informationWrapper)}>
            <span className={cn(styles.informationTitle)}>Type:</span>
            <span>{location?.type}</span>
          </div>
          <div className={cn(styles.informationWrapper)}>
            <span className={cn(styles.informationTitle)}>ResidentCount:</span>
            <span>{location?.residents?.length}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LocationCard;
