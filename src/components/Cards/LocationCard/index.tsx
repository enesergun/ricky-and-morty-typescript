import { Planet } from "@/constants/icons";
import Link from "next/link";
import React from "react";
import styles from "./Location.module.scss";
import cn from "classnames";
interface PlanetProps {
  size: number;
}

const LocationCard: React.FC = () => {
  return (
    <div className={cn(styles.locationCard)}>
      <Link href="/locations/2">
        <div className={cn(styles.locationCardIcon)}>
          <Planet size={48} />
        </div>
        <div>Planet</div>
        <div>Earth</div>
      </Link>
    </div>
  );
};

export default LocationCard;
