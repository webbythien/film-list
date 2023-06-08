import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { useDispatch, useSelector } from "react-redux";
import { addFilm } from "../redux/actions";
import PauseIcon from "@mui/icons-material/Pause";
import { setPausePlay } from "../redux/actions";
import { filmSelector } from "../redux/selectors";
import { FilmAuth } from "../context/FilmContext";
import styles from "./allscrenn.module.css";
function FilmItem({ film }) {
  const { play: playcontex, setPlayed,setToggle } = FilmAuth();
  const dispatch = useDispatch();
  const pauseRef = useRef();
  const newFilm = useSelector(filmSelector);
  const [play, setPlay] = useState(newFilm.play || false);
  const [ref, setRef] = useState();

  //phair luu state thg trc do
  const handlePlay = () => {
    dispatch(addFilm(film));
    setPlay(true);
    setPlayed(true);
  };
  const handlePause = (e) => {
    setPlay(false);
    setPlayed(false);
  };

  const glasClass = `${styles.glass} container`;
  return (
    <Card
      key={newFilm.id}
      className={glasClass}
      sx={{
        width: 500,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5" sx={{ width: 300 }}>
            {film.Title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {film.Nation} - {film.Year}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            <SkipPreviousIcon />
          </IconButton>
          <IconButton aria-label="play/pause">
            {playcontex && play ? (
              <PauseIcon onClick={handlePause} sx={{ height: 38, width: 38 }} />
            ) : (
              <PlayArrowIcon
                onClick={handlePlay}
                sx={{ height: 38, width: 38 }}
              />
            )}
          </IconButton>
          <IconButton aria-label="next">
            <SkipNextIcon />
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        image={film.Poster}
        alt={film.Title}
      />
    </Card>
  );
}

export default FilmItem;
