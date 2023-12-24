import Hero from "@/components/Hero";
import HomepageContent from "@/components/HomepageContent";
import { Inter } from "next/font/google";
import cn from "classnames";
const inter = Inter({ subsets: ["latin"] });
import type { GetServerSideProps } from "next";
import { getLocation, LocationData } from "@/actions/getLocation";

interface Props {
  locations: LocationData | null;
}

export default function Home({ locations }: Props) {
  return (
    <main className={cn(inter.className)}>
      <Hero />
      <HomepageContent locations={locations} />
    </main>
  );
}

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
