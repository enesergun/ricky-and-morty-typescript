import InformationCard from "@/components/Cards/InformationCard";
import DetailTitle from "@/components/DetailTitle";
import Characters from "@/components/Characters";
import React from "react";
import cn from "classnames";
import { Inter } from "next/font/google";
import extractCharacterIds from "@/helpers/extractCharacterIds";
import type { GetServerSideProps } from "next";
import { getCharacter } from "@/actions/getCharacter";
import {
  getSingleLocation,
  SingleLocationData,
} from "@/actions/getSingleLocation";

interface Props {
  location: SingleLocationData | null;
  residentCharacters?: any;
  filter: string | any;
}
const inter = Inter({ subsets: ["latin"] });
const LocationDetail = ({ location, residentCharacters, filter }: Props) => {
  return (
    <div className={cn("locationDetail", inter.className)}>
      <DetailTitle
        title={location?.name}
        favorite={false}
        item={{
          id: 0,
        }}
      />
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
      <Characters
        seeAll={""}
        title="Residents"
        data={residentCharacters}
        filter={filter}
        location={{ name: location?.name, url: location?.url }}
      />
    </div>
  );
};
export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
  req,
  res,
}) => {
  try {
    const baseUrl = `${req.headers["x-forwarded-proto"]}://${req.headers.host}`;

    res.setHeader(
      "Cache-Control",
      "public, s-maxage=10, stale-while-revalidate=59"
    );
    const response = await getSingleLocation(baseUrl, query.id);

    // Check if the response is an error
    if ("isAxiosError" in response) {
      throw response; // Throw the error to be caught in the catch block
    }

    const extractedIds = extractCharacterIds(response.data.residents);
    const residentCharacters =
      response.data.residents.length > 0
        ? await getCharacter(baseUrl, extractedIds)
        : { data: [] };
    const filter = query.status || "";
    // Successfully fetched data
    return {
      props: {
        filter: filter,
        location: response.data,
        residentCharacters:
          "isAxiosError" in residentCharacters ? null : residentCharacters.data,
      },
    };
  } catch (error) {
    // Handle the error here, you can log it or handle it in a way that suits your application
    console.error("Error fetching data:", error);

    // Return null or an empty object if an error occurs
    return {
      props: {
        location: null,
        residentCharacters: null,
        filter: "",
      },
    };
  }
};

export default LocationDetail;
