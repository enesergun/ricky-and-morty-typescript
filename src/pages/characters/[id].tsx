import React from "react";
import Image from "next/image";
import CharacterInformation from "@/components/CharacterInformation";
import OtherCharacters from "@/components/OtherCharacters";
import type { GetServerSideProps } from "next";
import cn from "classnames";
import DetailTitle from "@/components/DetailTitle";
import { getCharacter } from "@/actions/getCharacter";

interface Props {
  character: any;
}

const CharacterDetail: React.FC<Props> = ({ character }) => {
  if (!character) {
    // Handle the case where character is null (error state or loading state)
    return <div>Error loading character data</div>;
  }

  return (
    <div className={cn("characterDetail")}>
      <div className={cn("characterDetail__informationWrapper")}>
        <Image
          className={cn("characterDetail__image")}
          src={character[0].image}
          width={375}
          height={200}
          alt="Character Image"
        />

        <div className={cn("characterDetail__informationContainer")}>
          <DetailTitle title={character[0].name} favorite={true} />
          <CharacterInformation title="Informations" data={character[0]} />
        </div>
      </div>
      <OtherCharacters title="Other Characters" />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const response = await getCharacter(query.id);

  // Check if the response is an error
  if ("isAxiosError" in response) {
    // Handle error, you can log it or return an error message
    return { props: { character: null } };
  }

  // Successfully fetched data
  return {
    props: {
      character: response.data,
    },
  };
};

export default CharacterDetail;
