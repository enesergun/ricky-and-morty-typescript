import React from "react";
import SectionTitle from "@/components/SectionTitle";
import LocationCard from "@/components/LocationCard";
import cn from "classnames"
import styles from "./Locations.module.scss"
interface LocationsProps {
  seeAll: string;
}

const Locations: React.FC<LocationsProps> = ({ seeAll }) => {
  return (
    <div className={cn(styles.locations)}>
      <SectionTitle sectionId="locations" title="Locations" seeAll={seeAll} />
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
    </div>
  );
};

export default Locations;
