import React from "react";
import styles from "./allscrenn.module.css";
import FilmList from "./FilmList";
import Screen from "./Screen";
import { FilmAuth } from "../context/FilmContext";
import ResponsiveAppBar from "./ResponsiveAppBar";
function FilmScrenn() {
  const { play, setToggle, toggle } = FilmAuth();

  return (
    <>
      <ResponsiveAppBar />
      {toggle ? (
        <div className={styles.background_change}>
          <div className={styles.flex_div}>
            <Screen />
            <FilmList />
          </div>
        </div>
      ) : (
        <FilmList />
      )}
    </>
  );
}

export default FilmScrenn;
