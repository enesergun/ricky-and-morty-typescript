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
    <Link href="/locations/2">
      <div className={cn(styles.locationCard)}>
        <div className={cn(styles.locationCardIcon)}>
          <Planet size={48} />
        </div>
        <div>Planet</div>
        <div>Earth</div>
      </div>
    </Link>
  );
};

export default LocationCard;
