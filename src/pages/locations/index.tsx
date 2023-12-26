import React from "react";
import cn from "classnames";
import DetailTitle from "@/components/DetailTitle";
import type { GetServerSideProps, NextPage } from "next";
import CharacterList from "@/components/CharacterList";
import Locations from "@/components/Locations";
import { getLocation, LocationData } from "@/actions/getLocation";
interface Props {
  locations: LocationData | null;
}

const locationsPage: NextPage<Props> = ({ locations }) => {
  return (
    <div className={cn("favorites")}>
      <DetailTitle
        title={"Locations"}
        favorite={false}
        item={{
          id: 0,
        }}
      />
      <Locations seeAll={"/locations"} locations={locations} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const response = await getLocation(query.page);

  // Check if the response is an error
  if ("isAxiosError" in response) {
    // Handle error, you can log it or return an error message

    return { props: { locations: null } };
  }

  // Successfully fetched data
  return {
    props: {
      locations: response.data,
    },
  };
};

export default locationsPage;
