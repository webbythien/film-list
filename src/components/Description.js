import React from "react";
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
function Description({ newFilm }) {
  const { takeDuration, play, setPlayed, toggle } = FilmAuth();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Typography
          align="left"
          component="div"
          variant="h4"
          sx={{
            width: "auto",
            fontWeight: "bold",
            marginBottom: "2%",
            paddingBottom: "1%",
            borderBottom: "1px black solid",
          }}
        >
          {toggle ? (
            `${newFilm.Title} - ${newFilm.Author}`
          ) : (
              <div>{newFilm.Title}</div>
          )}
        </Typography>
        <Typography
          align="left"
          variant="subtitle1"
          color="text.secondary"
          component="div"
        >
          {newFilm.description}
        </Typography>
      </CardContent>
      <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}></Box>
    </Box>
  );
}

export default Description;
