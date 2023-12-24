import React from "react";
import Image from "next/image";
import cn from "classnames";
import styles from "./Layout.module.scss";
import { useRouter } from "next/router";
import { Arrow } from "@/constants/icons";
import Link from "next/link";

const Header = () => {
  const router = useRouter();

  return (
    <div
      className={cn(
        styles.header,
        router.route === "/" && styles.homepageNavbar
      )}
    >
      {router.route !== "/" && (
        <div className={cn(styles.backWrapper)} onClick={() => router.back()}>
          <Arrow />
        </div>
      )}
      <Link href="/">
        <Image src="/logo.png" width={150} height={150} alt="RickyNMortyLogo" />
      </Link>
    </div>
  );
};

export default Header;
