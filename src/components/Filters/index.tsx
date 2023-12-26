import React from "react";
import styles from "./Filters.module.scss";
import { filters } from "@/constants/filters";
import FilterButton from "../Elements/FilterButton";
import cn from "classnames";

const Filters: React.FC = () => {
  return (
    <div className={cn(styles.filters)}>
      {filters.map((element) => (
        <FilterButton
          key={element.id}
          title={element.title}
          filterType="status"
          queryName={element.queryName}
        />
      ))}
    </div>
  );
};

export default Filters;
