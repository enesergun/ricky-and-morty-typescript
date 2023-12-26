import React from "react";
import Image from "next/image";
import cn from "classnames";
import styles from "./NoDataFound.module.scss";
const NoDataFound = () => {
  return (
    <div className={cn(styles.nodatafound)}>
      <Image
        src={"/no-data-found.png"}
        width={250}
        height={150}
        alt="No Data Image"
      />
    </div>
  );
};

export default NoDataFound;
