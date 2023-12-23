import React from "react";
import SectionTitle from "@/components/SectionTitle";
import LocationCard from "@/components/Cards/LocationCard";
import cn from "classnames";
import styles from "./Locations.module.scss";
import Pagination from "@/components/Elements/Pagination";
interface LocationsProps {
  seeAll: string;
}

const Locations: React.FC<LocationsProps> = ({ seeAll }) => {
  return (
    <div className={cn(styles.locations)}>
      <SectionTitle sectionId="locations" title="Locations" />
      <div className={cn(styles.locationsCardWrapper)}>
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
      </div>
      <Pagination
        info={{
          count: 826,
          pages: 42,
          next: true,
          prev: true,
        }}
      />
    </div>
  );
};

export default Locations;
