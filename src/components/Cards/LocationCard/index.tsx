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
        <div>{location.type}</div>
        <div>{location.name}</div>
      </div>
    </Link>
  );
};

export default LocationCard;
