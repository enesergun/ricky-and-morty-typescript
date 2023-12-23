import InformationCard from "@/components/Cards/InformationCard";
import DetailTitle from "@/components/DetailTitle";
import Characters from "@/components/Characters";
import React from "react";
import cn from "classnames";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const LocationDetail: React.FC = () => {
  return (
    <div className={cn("locationDetail", inter.className)}>
      <DetailTitle title="Earth (Replacement Dimension)" favorite={false} />
      <div className={cn("locationDetail__informationWrapper")}>
        <InformationCard
          title={"Planet"}
          value={"Earth"}
          percentage50Width={false}
        />
        <InformationCard
          title={"Planet"}
          value={"Earth"}
          percentage50Width={false}
        />
      </div>
      <Characters seeAll={""} title="Residents" />
    </div>
  );
};

export default LocationDetail;
