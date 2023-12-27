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
  baseUrl: string | null;
}

const CharacterDetail: React.FC<Props> = ({ character, baseUrl }) => {
  return (
    <div className={cn("characterDetail")}>
      <div className={cn("characterDetail__informationWrapper")}>
        <Image
          className={cn("characterDetail__image")}
          src={character[0].image}
          width={375}
          height={200}
          priority={true}
          alt="Character Image"
        />

        <div className={cn("characterDetail__informationContainer")}>
          <DetailTitle
            title={character[0].name}
            favorite={true}
            item={character[0]}
          />
          <CharacterInformation title="Informations" data={character[0]} />
        </div>
      </div>
      <OtherCharacters title="Other Characters" character={character[0]} baseUrl={baseUrl} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req,
  query,
}) => {
  const baseUrl = `${req.headers["x-forwarded-proto"]}://${req.headers.host}`;
  const response = await getCharacter(baseUrl, query.id);
  // Check if the response is an error
  if ("isAxiosError" in response) {
    // Handle error, you can log it or return an error message
    return { props: { character: null, baseUrl } };
  }

  // Successfully fetched data
  return {
    props: {
      baseUrl,
      character: response.data,
    },
  };
};

export default CharacterDetail;
