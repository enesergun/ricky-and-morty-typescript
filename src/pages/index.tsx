import Hero from "@/components/Hero";
import { Inter } from "next/font/google";
import cn from "classnames";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={cn(inter.className)}>
      <Hero />
    </main>
  );
}
