import Image from "next/image";
import React from "react";
import Jumplinks from "./Jumplinks";
import styles from "./Hero.module.scss";
import cn from "classnames";
const Hero = () => {
  return (
    <div className={cn(styles.hero)}>
      <Image src="/logo.png" width={200} height={200} alt="RickyNMortyLogo" />
      <Image src="/highlightImage.png" width={200} height={200} alt="Sanchez" />
      <div className={cn(styles.heroText)}>
        Find out everything in one{" "}
        <span className={cn(styles.heroColoredText)}>place.</span>
      </div>
      <div className={cn(styles.heroDescription)}>
        Characters, locations, episodes and more.
      </div>
      <Jumplinks />
    </div>
  );
};

export default Hero;
