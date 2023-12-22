import React from "react";
import Link from "next/link";
import LinkCard from "@/components/Cards/LinkCard";
import cn from "classnames";
import styles from "./SectionTitle.module.scss";

interface SectionTitleProps {
  sectionId: string;
  title: string;
  seeAll?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  sectionId,
  title,
  seeAll,
}) => {
  return (
    <div
      className={cn(
        styles.sectionTitle,
        seeAll ? styles.haveSeeAll : styles.notHaveSeeAll
      )}
    >
      <div id={sectionId} className={cn(styles.sectionTitleHeader)}>
        {title}
      </div>
      {seeAll && (
        <Link href={seeAll}>
          <LinkCard title="See All" link={seeAll} />
        </Link>
      )}
    </div>
  );
};

export default SectionTitle;
