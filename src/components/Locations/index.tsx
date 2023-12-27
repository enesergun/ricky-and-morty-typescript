import React from "react";
import SectionTitle from "@/components/SectionTitle";
import LocationCard from "@/components/Cards/LocationCard";
import cn from "classnames";
import styles from "./Locations.module.scss";
import Pagination from "@/components/Elements/Pagination";
interface LocationsProps {
  seeAll: string;
  locations:
    | {
        info: any;
        results: any;
      }
    | any;
}

const Locations: React.FC<LocationsProps> = ({ seeAll, locations }) => {
  return (
    <div className={cn(styles.locations)}>
      <div className={cn(styles.locationsCardWrapper)}>
        {locations?.results?.map((location: any) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
      <Pagination info={locations?.info} />
    </div>
  );
};

export default Locations;
