import React, { useState } from "react";
import styles from "./HeroStyle.module.css";
import heroImg from "../../assets/Screenshot 2024-09-19 203435.png";
import lightMode from "../../assets/lightMode.svg";
import darkMode from "../../assets/darkMode.svg";
import gitHubLight from "../../assets/gitHubLight.svg";
import gitHubDark from "../../assets/gitHubDark.svg";
import instagramLight from "../../assets/instagramLight.svg";
import instagramDark from "../../assets/instagramDark.svg";
import linkedInLight from "../../assets/linkedInLight.svg";
import linkedInDark from "../../assets/linkedInDark.svg";
import CV from "../../assets/Profile.pdf";
import { useTheme } from "../../common/themeContent";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const [isRotated, setIsRotated] = useState(false);

  const themeIcon = theme === "light" ? lightMode : darkMode;
  const gitHubIcon = theme === "light" ? gitHubDark : gitHubLight;
  const instagramIcon = theme === "light" ? instagramDark : instagramLight;
  const linkedInIcon = theme === "light" ? linkedInDark : linkedInLight;

  const handleThemeToggle = () => {
    toggleTheme();
    setIsRotated(!isRotated);
  };

  return (
    <section
      id="hero"
      className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture"
        />
        <img
          className={`${styles.colorMode} ${isRotated ? styles.rotated : ""}`}
          src={themeIcon}
          alt="Colors mode icon"
          onClick={handleThemeToggle}
        />
      </div>

      <div className={styles.info}>
        <h1>
          Christoper
          <br />
          Chendra
        </h1>
        <h2>Android Developer</h2>
        <span>
          <a
            href="https://github.com/ChristoperChend"
            target="_blank"
            aria-label="GitHub profile">
            <img
              src={gitHubIcon}
              alt="GitHub icon"
            />
          </a>
          <a
            href="https://www.instagram.com/chr.chend/"
            target="_blank"
            aria-label="Instagram profile">
            <img
              src={instagramIcon}
              alt="Instagram icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/christoper-chendra/"
            target="_blank"
            aria-label="LinkedIn profile">
            <img
              src={linkedInIcon}
              alt="LinkedIn icon"
            />
          </a>
        </span>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aut
          nam aliquid odit, ut assumenda nemo in eveniet excepturi rerum
          voluptatum suscipit illo tempora exercitationem sint distinctio itaque
          quasi animi!
        </p>
        <a
          href={CV}
          download>
          <button
            className="hover"
            aria-label="cv">
            Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
