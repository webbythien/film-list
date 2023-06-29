import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useDispatch, useSelector } from "react-redux";
import { filmRemainingSelector, filmSelector } from "../redux/selectors";
import { motion } from "framer-motion";
import { FilmAuth } from "../context/FilmContext";
import { ToggleButton, ToggleButtonGroup, Modal } from "@mui/material";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import backgroundIma from "../background/background_original_2.jpg";
import { SearchFilm, addFilm } from "../redux/actions";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Screen from "./Screen";
import Search from "./Search";
import styles from "./allscrenn.module.css";
import { useNavigate } from "react-router-dom";
const pages = ["Products", "Pricing", "Blog"];
function ResponsiveAppBar() {
  const { play, setToggle, toggle, setPlayed, openUpdate } = FilmAuth();
  const newFilm = useSelector(filmSelector);
  const filmRemaining = useSelector(filmRemainingSelector);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [search, setSearch] = React.useState(null);
  const handleSearch = (e) => {
    setSearch(e.target.value);
    dispatch(SearchFilm(e.target.value));
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    window.open(newFilm.Facebook, "_blank");
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //--------------------------------------------
  // const avatarRoll = document.querySelector('.avatar-roll');
  // const cdThumbAnimate = avatarRoll.animate([
  //   {transform: 'rotate(360deg)'}],{
  //     duration:10000,
  //     iterations: Infinity
  //   })

  //   cdThumbAnimate.pause();; // Duration in milliseconds

  // const duration = 36000; // Duration in milliseconds
  // const spinsPerDuration = 10; // Number of complete spins during the duration
  // const totalRotation = 360 * spinsPerDuration; // Total rotation in degrees
  // const controls = useAnimation();
  //----------------------------- sửa
  const [view, setView] = React.useState(false);
  const dispatch = useDispatch();
  const handleChange = (event, nextView) => {
    if (nextView !== null) {
      setView(nextView);
      setToggle(nextView);
    }
  };
  const [showListSearch, setShowListSearch] = React.useState(false);
  function compare( a, b ) {
    if ( a.Title < b.Title ){
      return -1;
    }
    if ( a.Title > b.Title ){
      return 1;
    }
    return 0;
  }
  React.useEffect(() => {
    setShowListSearch(filmRemaining.sort(compare));
  }, [search]);
  React.useEffect(() => {
    setView(toggle);

    if (!toggle) {
      // document.body.style.backgroundImage = `url(https://wpassets.brainstation.io/app/uploads/2017/04/13100509/Netflix-Background.jpg)`;
      document.body.style.background = "black";
      document.title = "Lab 4 List Film";
      const newFavicon = document.createElement("link");
      newFavicon.rel = "icon";
      newFavicon.href =
        "https://cdn.vox-cdn.com/thumbor/sW5h16et1R3au8ZLVjkcAbcXNi8=/0x0:3151x2048/2000x1333/filters:focal(1575x1024:1576x1025)/cdn.vox-cdn.com/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png";
      document.head.appendChild(newFavicon);
      setPlayed(false);
      dispatch(addFilm({}));
    }
  }, [toggle]);
  const navigate = useNavigate();

  const handleDetails = (film) => {
    dispatch(addFilm(film));
    navigate("/details");
  };
  return (
    <>
      {search && !openUpdate ? (
        <div
          style={{
            position: "fixed",
            width: "398px",
            height: "400px",
            background: "white",
            right: 145,
            top: 80,
            zIndex: 9990,
            overflow: "auto",
            borderRadius: "0 0 16px 16px",
          }}
        >
          {showListSearch.map((item) => (
            <div
              className={styles.divSearchContain}
              onClick={() => handleDetails(item)}
            >
              <div className={styles.containImg}>
                <img
                  className={styles.searchElementImg}
                  src={item.Poster}
                  alt={item.Title}
                />
              </div>
              <div className={styles.elementSearch}>
                <Typography>{item.Title}</Typography>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}

      <AppBar style={{ background: "#A7727D" }} position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <LibraryMusicIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />

            {toggle ? (
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                {newFilm.Title}
              </Typography>
            ) : (
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Hello User
              </Typography>
            )}

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              ></IconButton>
            </Box>

            <LibraryMusicIcon
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            ></Typography>
            {toggle ? (
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Button
                  key={newFilm.id}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {newFilm.Author}
                </Button>
              </Box>
            ) : (
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Button
                  key={newFilm.id}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Show List Film
                </Button>
              </Box>
            )}

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <ToggleButtonGroup value={view} exclusive onChange={handleChange}>
                <ToggleButton value={true} aria-label="list">
                  <ViewSidebarIcon />
                </ToggleButton>
                <ToggleButton value={false} aria-label="module">
                  <ViewModuleIcon />
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <div
                style={{
                  display: "flex",
                  gap: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <TextField
                    onChange={handleSearch}
                    value={search}
                    id="outlined-required"
                    label="Search"
                    style={{ width: "400px" }}
                    InputProps={{
                      placeholder: `Enter film's name`,
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  {/* // */}
                  <Menu
                    sx={{
                      mt: "80px",
                      boxShadow: "none",
                      cursor: "pointer",
                      height: "500px",
                      transform: "translateX(2%)",
                    }}
                    anchorEl={anchorElUser}
                    id="menu-appbar"
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  ></Menu>
                </div>
                <Tooltip title={newFilm.Author}>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <motion.div
                      style={{ width: "100px", height: "100px" }} // Adjust size as per your requirement
                    >
                      {toggle ? (
                        <Avatar
                          className={`${play ? "App-logo" : ""} avatar-roll`}
                          sx={{ width: 100, height: 100 }}
                          alt={newFilm.Author || "Netflix"}
                          src={newFilm.Avatar}
                        />
                      ) : (
                        <Avatar
                          className={`App-logo avatar-roll`}
                          sx={{ width: 100, height: 100 }}
                          alt="Netflix"
                          src="https://cdn.vox-cdn.com/thumbor/sW5h16et1R3au8ZLVjkcAbcXNi8=/0x0:3151x2048/2000x1333/filters:focal(1575x1024:1576x1025)/cdn.vox-cdn.com/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png"
                        />
                      )}
                    </motion.div>
                  </IconButton>
                </Tooltip>
              </div>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                // open={Boolean(anchorElUser)}
                // onClose={handleCloseUserMenu}
              >
                {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default ResponsiveAppBar;
