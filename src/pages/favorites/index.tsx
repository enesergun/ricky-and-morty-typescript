import React from "react";
import cn from "classnames";
import DetailTitle from "@/components/DetailTitle";
import CharacterList from "@/components/CharacterList";
import type { GetServerSideProps, NextPage } from "next";

interface FavoritesProps {
  page: any;
}

const Favorites: NextPage<FavoritesProps> = ({ page }) => {
  return (
    <div className={cn("favorites")}>
      <DetailTitle title={"My Favorites"} favorite={false} />
      <CharacterList seeAll="" page={page} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<FavoritesProps> = async ({
  query,
}) => {
  const page: any = query.page || "1"; // Specify the type of the page variable

  return {
    props: {
      page,
    },
  };
};

export default Favorites;
