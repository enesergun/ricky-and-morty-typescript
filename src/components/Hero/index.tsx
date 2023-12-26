import Image from "next/image";
import React from "react";
import Jumplinks from "./Jumplinks";
import styles from "./Hero.module.scss";
import cn from "classnames";
const Hero = () => {
  return (
    <div className={cn(styles.hero)}>
      <div className={cn(styles.imageContainer)}>
        <Image
          src="/highlightImage.png"
          layout="fill"
          className={cn(styles.image)}
          alt="Sanchez"
        />
      </div>
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
