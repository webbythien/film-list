import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { filmSelector } from "../redux/selectors";
import { Avatar, Box, Container, Modal, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import styles from "./filmItem2.module.css";
import CloseIcon from "@mui/icons-material/Close";
import Screen from "./Screen";
import { useState, CSSProperties } from "react";
import RingLoader from "react-spinners/RingLoader";
function Details() {
  const navigate = useNavigate();
  const newFilm = useSelector(filmSelector);
  React.useEffect(() => {
    document.body.style.backgroundImage = `url(${newFilm.Image})`;
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "transparent",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    boxShadow: "none",
    border: "none",
  }));

  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  React.useEffect(() => {
    document.body.style.backgroundImage = `none`;
    window.scrollTo(0, 0);
  }, [open]);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);

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

  return (
    <>
      {false ? (
        <div className={styles.loading}>
          <RingLoader
            color={"#F5EBEB"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div
          style={{
            backgroundImage: `url(${newFilm.Image})`,
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            paddingTop: "15%",
            marginBottom: "-10%",
          }}
        >
          <Box
            height="100vh"
            display={"flex"}
            flexDirection={"column"}
            sx={{ width: 1 }}
            style={{
              gap: "40%",
            }}
          >
            <div
              onClick={() => navigate(-1)}
              style={{
                width: "2%",
                marginTop: "-12%",
                marginLeft: "2%",
                padding: "10px",
                
                "@media (max-width: 700px)": {
                  width: "10%",
                  marginTop: "-5%",
                  marginLeft: "2%",
                },
              }}
              
              className={styles.glassDetail}
            >
              <ArrowBackIosNewIcon />
            </div>
            {!open ? (
              <Box sx={{ mx: "8%" }}>
                <Typography
                  className={styles.btnPlay}
                  alignItems="center"
                  fontSize={"20px"}
                  fontWeight={"bold"}
                  sx={{
                    width: "100px",
                    height: "50px",
                    display: "flex",
                    justifyContent: "center",
                    // padding: "px",
                    backgroundColor: "white",
                    borderRadius: "50px",
                    marginBottom: "2%",
                    marginLeft: "8%",
                  }}
                  onClick={handleOpen}
                >
                  <PlayArrowIcon fontSize="large" />
                  Play
                </Typography>
                <Box sx={{ flexGrow: 1, height: "300px" , display: { xs: "none", sm: "block" }}}>
                  <Grid
                    className={styles.glassDescrip}
                    container
                    spacing={2}
                    h-screen
                  >
                    <Grid
                      textAlign={"center"}
                      item
                      xs={4}
                      
                    >
                      <Item
                        style={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          margin: "0",
                        }}
                      >
                        <Typography
                          variant="h3"
                          alignItems="center"
                          color={"Black"}
                        >
                          {newFilm.Title}
                        </Typography>
                      </Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item>
                        <Typography variant="subtitle1" color={"black"}>
                          {newFilm.description}
                        </Typography>
                      </Item>
                    </Grid>
                    <Grid textAlign={"center"} item xs={2}>
                      <Item>
                        <div>
                          <Typography variant="inherit" color={"black"}>
                            {newFilm.Year}-{newFilm.Nation}
                          </Typography>
                        </div>
                        <div>
                          <Typography variant="inherit" color={"black"}>
                            {newFilm.Author}
                          </Typography>
                        </div>
                        <div style={{ marginTop: "25%" }} alignItems={"center"}>
                          <Avatar
                            className="App-logo"
                            style={{ margin: "0 auto" }}
                            sx={{ width: 100, height: 100 }}
                            alt={newFilm.Author}
                            src={newFilm.Avatar}
                          />
                        </div>
                      </Item>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            ) : (
              <div></div>
            )}
          </Box>
        </div>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={style.glassModal}>
          <CloseIcon className={styles.btnClose} onClick={handleClose} />
          <div style={{ marginLeft: "3%" }}>
            <Screen />
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default Details;
