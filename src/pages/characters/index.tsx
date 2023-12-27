import React from "react";
import cn from "classnames";
import DetailTitle from "@/components/DetailTitle";
import type { GetServerSideProps, NextPage } from "next";
import CharacterList from "@/components/CharacterList";

import { getCharacters, CharacterData } from "@/actions/getCharacters";
interface CharactersProps {
  characters: CharacterData | null;
}

const Characters: NextPage<CharactersProps> = ({ characters }) => {
  return (
    <div className={cn("favorites")}>
      <DetailTitle
        title={"Characters"}
        favorite={false}
        item={{
          id: 0,
        }}
      />
      <CharacterList seeAll={""} page={""} data={characters} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<CharactersProps> = async ({
  req,
  query,
}) => {
  const baseUrl = `${req.headers['x-forwarded-proto']}://${req.headers.host}`;
  const response = await getCharacters(baseUrl, query.page, query.status);


  // Check if the response is an error
  if ("isAxiosError" in response) {
    // Handle error, you can log it or return an error message

    return { props: { characters: null } };
  }

  // Successfully fetched data
  return {
    props: {
      characters: response.data,
    },
  };
};

export default Characters;
