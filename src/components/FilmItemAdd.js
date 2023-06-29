import React from "react";
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
import ControlPointTwoToneIcon from "@mui/icons-material/ControlPointTwoTone";
import LibraryAddRoundedIcon from '@mui/icons-material/LibraryAddRounded';
import FormAdd from "./FormAdd";
function FilmItemAdd() {
  const glasClass = `${styles.glass} container`;
  const { open,setOpen } = FilmAuth();
  const handleAdd = () => {
    setOpen(true)
  };
  return (
    <div>
      <Card
        className={glasClass}
        sx={{
          width: 500,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            className={styles.addItem}
            onClick={handleAdd}
          >
            <LibraryAddRoundedIcon  style={{ transform: "scale(4)", height: "120px" }}/>
          </div>
        </Box>
      </Card>
      <FormAdd/>
    </div>
  );
}

export default FilmItemAdd;
