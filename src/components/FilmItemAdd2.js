import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import styles from "./filmItem2.module.css";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FilmAuth } from "../context/FilmContext";
import { useDispatch } from "react-redux";
import { addFilm } from "../redux/actions";
import LibraryAddRoundedIcon from '@mui/icons-material/LibraryAddRounded';
import Screen from "./Screen";
import CloseIcon from "@mui/icons-material/Close";
import FormAdd from "./FormAdd";

function FilmItemAdd2() {
  const { open,setOpen } = FilmAuth();
  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "65%",
    bgcolor: "#ffffff8c",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 10,
    px: 4,
    pb: 10,
    margin: "1% auto",
  };
  const handleAdd = () => {
    setOpen(true)
  };

  const dispatch= useDispatch()
  return (
    <>
      <Item
        style={{
          background: "#ffffff8c",
          borderRadius: "16px",
          backdropFilter: "blur(7.1px)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          margin: "0 10px",
        }}
        className={`${styles.glass} ${styles.addItem}`}
        onClick={handleAdd}
      >
          <div
          style={{display:'flex',justifyContent:'center',alignItems:'center',transform:'translateY(100%)', marginBottom: "10%",}}
          >
            <LibraryAddRoundedIcon  style={{ transform: "scale(4)", height: "120px" }}/>
          </div>
      </Item>
        <FormAdd />
    </>
  );
}

export default FilmItemAdd2;
