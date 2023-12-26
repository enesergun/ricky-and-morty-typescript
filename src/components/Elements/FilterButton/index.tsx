import React from "react";
import cn from "classnames";
import styles from "./FilterButton.module.scss";
import { useRouter } from "next/router";

interface FilterButtonProps {
  title: string;
  filterType: string;
  queryName: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  title,
  filterType,
  queryName,
}) => {
  const router = useRouter();

  const handleFilterToQuery = () => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, [filterType]: queryName },
    });
  };

  const removeQuery = () => {
    const { [filterType]: removedQuery, ...currentQuery } = router.query;
    router.push({
      pathname: router.pathname,
      query: currentQuery,
    });
  };

  const isQueryActive = router.query[filterType] === queryName;

  return (
    <div className={cn(styles.filtersButton)}>
      <span onClick={() => handleFilterToQuery()}>{title}</span>
      {isQueryActive && (
        <button className={styles.removeButton} onClick={removeQuery}>
          X
        </button>
      )}
    </div>
  );
};

export default FilterButton;
