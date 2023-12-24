import InformationCard from "@/components/Cards/InformationCard";
import DetailTitle from "@/components/DetailTitle";
import Characters from "@/components/Characters";
import React from "react";
import cn from "classnames";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import type { GetServerSideProps } from "next";
import {
  getSingleLocation,
  SingleLocationData,
} from "@/actions/getSingleLocation";

interface Props {
  location: SingleLocationData | null;
}

const LocationDetail = ({ location }: Props) => {
  return (
    <div className={cn("locationDetail", inter.className)}>
      <DetailTitle title={location?.name} favorite={false} />
      <div className={cn("locationDetail__informationWrapper")}>
        <InformationCard
          title={"Type"}
          value={location?.type}
          percentage50Width={false}
        />
        <InformationCard
          title={"Dimension"}
          value={location?.dimension}
          percentage50Width={false}
        />
      </div>
      <Characters seeAll={""} title="Residents" data={location?.residents} />
    </div>
  );
};
export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  
  const response = await getSingleLocation(query.id);

  // Check if the response is an error
  if ("isAxiosError" in response) {
    // Handle error, you can log it or return an error message

    return { props: { location: null } };
  }

  // Successfully fetched data
  return {
    props: {
      location: response.data,
    },
  };
};

export default LocationDetail;
