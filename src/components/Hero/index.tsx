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
          layout="responsive"
          width={150}
          height={150}
          className={cn(styles.image)}
          alt="Sanchez"
          loading="eager"
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
