import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import Container from "@mui/material/Container";
import { filmSelector } from "../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { setPausePlay } from "../redux/actions";
import { FilmAuth } from "../context/FilmContext";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import styles from "./allscrenn.module.css";
import { flexbox } from "@mui/system";
import backgroundIma from "../background/background_original_2.jpg";
import backgroundBlack from "../background/Black_Colour.svg.png";
import Description from "./Description";
function Screen() {
  const { takeDuration, play, setPlayed, toggle } = FilmAuth();
  const dispatch = useDispatch();
  const [film, setFilm] = useState();
  // const [play,setPlay]=useState()
  const newFilm = useSelector(filmSelector);

  // console.log(play);
  useEffect(() => {
    document.title = newFilm.Author
      ? `${newFilm.Title} - ${newFilm.Author}`
      : "Love Story";

    // const newFavicon = document.createElement("link");
    // newFavicon.rel = "icon";
    // newFavicon.href = newFilm.Avatar; // Replace with the path to your favicon.ico file
    // document.head.appendChild(newFavicon);

    document.body.style.backgroundImage = `url(${newFilm.Image})`;
  }, [play]);

  useEffect(() => {
    if (!toggle) {
      document.body.style.backgroundImage = `url(${backgroundBlack})`;
    } else {
      document.body.style.backgroundImage = `url(${backgroundIma})`;
    }
  }, [toggle]);

  const handlePause = () => {
    setPlayed(false);
  };
  const handlePlay = () => {
    setPlayed(true);
  };

  const check = newFilm.description;
  return (
    <Box
      sx={{ flexDirection: "column", alignContent: "center", width: "auto" }}
    >
      {/* <header className='header__section'>
        <p className='header__text'>{newFilm.Title}</p>
      </header> */}
      <Container
        className="container-screen"
        sx={{
          marginBottom: "5%",
          marginLeft: "2%",
          width: "100%",
        }}
        fixed
        maxWidth="md"
      >
        <div className="playerDiv">
          <ReactPlayer
            onProgress={(progress) => {
              takeDuration(progress.playedSeconds);
            }}
            controls
            className="video"
            onPause={handlePause}
            onPlay={handlePlay}
            playing={play}
            width={"100%"}
            url={newFilm.url}
            onChange={(e) => console.log(e)}
          />
        </div>
      </Container>
      {check ? (
        <Card
          key={newFilm.id}
          className={styles.glass}
          sx={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            width: "90%",
            marginLeft: "1.8%",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <div style={{width:'100%'}}>
            <Description newFilm={newFilm} />
          </div>
          <CardMedia
            component="img"
            sx={{ width: 100 }}
            // image={film.Image}
            // alt={film.Title}
          />
        </Card>
      ) : (
        ""
      )}
    </Box>
  );
}

export default Screen;
