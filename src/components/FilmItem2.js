import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import styles from "./filmItem2.module.css";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FilmAuth } from "../context/FilmContext";
import { useDispatch } from "react-redux";
import { addFilm } from "../redux/actions";

function FilmItem2({ film }) {
  const { play, setToggle, toggle } = FilmAuth();
  const dispatch=useDispatch()
  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const navigate = useNavigate();
  const handleDetails = ()=>{
    dispatch(addFilm(film));
    navigate('/details')
  }
  useEffect(()=>{
    setToggle(false)
  },[])
  return (
    <>
      <Item
        onClick={handleDetails}
        style={{
          background: '#ffffff8c',
          borderRadius: "16px",
          backdropFilter: 'blur(7.1px)',
          backgroundImage: `url(${film.Poster})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          margin: "0 10px",
          marginBottom: "10%",
        }}
        className={`${styles.glass}`}
        // sx={{
        //   backgroundColor:'none',
        //   backgroundImage:`url(${film.Image})`,
        //   backgroundPosition: "center",
        //   backgroundSize: "cover",

        //   margin: "0 10px",
        //   mb: 8,

        // }}
      >
      </Item>
    </>
  );
}

export default FilmItem2;
