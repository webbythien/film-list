import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filmSelector, search } from "../redux/selectors";
import {
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
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
import {
  SearchFilm,
  addAllFilm,
  deleteFilm,
  updateFilm,
} from "../redux/actions";
import { FilmAuth } from "../context/FilmContext";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useFormik } from "formik";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import CheckIcon from "@mui/icons-material/Check";
import dayjs from "dayjs";
function FormUpdateFilm() {
  const { openUpdate, setOpenUpdate, open, setOpen, setReload } = FilmAuth();
  axios.defaults.baseURL = "https://649acbb7bf7c145d02397ce4.mockapi.io/api/";
  const film = useSelector(filmSelector);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "65%",
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 10,
    px: 4,
    pb: 10,
    margin: "1% auto",
  };

  const [loading, setLoading] = useState(true);
  const [promting, setPromting] = useState(false);
  const [itemDelete, setItemDelete] = useState(false);
  const handleClose = () => {
    if (isValue) {
      toast.error("Not Save Changed? You still want close tabs!!!");
      setPromting(true);
    } else if (year) {
      toast.error("Not Save Changed? You still want close tabs!!!");
      setPromting(true);
    } else {
      setOpenUpdate(false);
    }
  };
  const dispatch = useDispatch();
  const submit = (e) => {
    e.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      Title: film.Title,
      Image: film.Image,
      Nation: film.Nation,
      url: film.url,
      description: film.description,
      Avatar: film.Avatar,
      Author: film.Author,
      Facebook: film.Facebook,
      Poster: film.Poster,
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      Object.assign(values, { Year: `${year}` });
      console.log(values);
      const data = axios.put(`/film/${film.id}`, values);
      toast.promise(data, {
        loading: "Loading...",
        success: <b>Update {values.Title} Successfully...!</b>,
        error: <b>Update Fail!</b>,
      });
      data
        .then(async (data) => {
          const dataAll = await axios.get("/film");
          dispatch(addAllFilm(dataAll.data));
          setPromting(false);
          setOpenUpdate(false);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  const [year, setYear] = useState();
  const [isValue, setIsValue] = useState(null);
  const handleChange = (e) => {
    setIsValue(e.target.value);
  };
  const handleNotSaveChanges = () => {
    setPromting(false);
    setOpenUpdate(false);
    setIsValue("");
    formik.handleReset();
  };
  const handleContinueEdit = () => {
    setPromting(false);
    console.log(formik);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    setItemDelete(true);
  };

  const navigate = useNavigate();
  const handleDeleteItem = () => {
    const result = axios.delete(`/film/${film.id}`);
    toast.promise(result, {
      loading: "Loading...",
      success: <b>Delete {film.Title} Successfully...!</b>,
      error: <b>Delete Film Fail!</b>,
    });
    result
      .then(() => {
        handleNotSaveChanges();
        dispatch(deleteFilm(film.id));
        navigate("/");
      })
      .catch(() => {
        toast.error(`Cannot Delete ${film.Title} !!`);
      });
  };
  useEffect(() => {
    console.log(dayjs(new Date(`01-01-${year}`)));
  }, []);

  return (
    <div>
      <Toaster></Toaster>
      <Modal
        open={promting}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 40,
          }}
          className={style.glassModalAdd}
        >
          <div>
            <Typography
              style={{ color: "red", fontWeight: "900", fontSize: "20px" }}
            >
              Do You Want To Close? This not save changed
            </Typography>
          </div>
          <div style={{ display: "flex", gap: 100 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <CloseIcon
                style={{ padding: "10px" }}
                className={styles.btnClose}
                onClick={handleContinueEdit}
              />
              <Typography style={{ fontWeight: "700", fontSize: "20px" }}>
                No
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <CheckIcon
                style={{ padding: "10px" }}
                className={styles.btnClose}
                onClick={handleNotSaveChanges}
              />
              <Typography style={{ fontWeight: "700", fontSize: "20px" }}>
                Yes
              </Typography>
            </div>
          </div>
        </Box>
      </Modal>

      <Modal
        open={itemDelete}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 40,
          }}
          className={style.glassModalAdd}
        >
          <div>
              
            <Typography style={{ color: "red", fontWeight: "900", fontSize: "20px" }} >
              Do You Want To Delete {film.Title}? Are You Sure !!
            </Typography>
          </div>
          <div style={{ display: "flex", gap: 100 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <CloseIcon
                style={{ padding: "10px" }}
                className={styles.btnClose}
                onClick={() => {
                  setItemDelete(false);
                }}
              />
              <Typography style={{ fontWeight: "700", fontSize: "20px" }}>No</Typography>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <CheckIcon
                style={{ padding: "10px" }}
                className={styles.btnClose}
                onClick={handleDeleteItem}
              />
              <Typography style={{ fontWeight: "700", fontSize: "20px" }}>Yes</Typography>
            </div>
          </div>
        </Box>
      </Modal>
      <Modal
        open={openUpdate}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className={style.glassModalAdd}>
          <CloseIcon className={styles.btnClose} onClick={handleClose} />
          <div style={{ marginLeft: "3%" }}>
            <form onChange={handleChange} onSubmit={formik.handleSubmit}>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                <div className={styles.flexInputADD}>
                  <div>
                    <TextField
                      {...formik.getFieldProps("Title")}
                      type="text"
                      placeholder="Film's title"
                      label="Title"
                      required
                    />
                  </div>
                  <div>
                    <TextField
                      {...formik.getFieldProps("Image")}
                      type="text"
                      placeholder="Film's Image"
                      label="Image"
                      required
                    />
                  </div>
                </div>
                <div className={styles.flexInputADD}>
                  <div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label={"Year"}
                        views={["year"]}
                        openTo="year"
                        value={dayjs(film.Year)}
                        onChange={(newValue) => {
                          setYear(newValue.$y);
                        }}
                      />
                    </LocalizationProvider>
                  </div>
                  <div>
                    <TextField
                      {...formik.getFieldProps("Nation")}
                      type="text"
                      placeholder="Film's Nation"
                      label="Nation"
                      required
                    />
                  </div>
                </div>
                <div className={styles.flexInputADD}>
                  <div>
                    <TextField
                      {...formik.getFieldProps("url")}
                      type="text"
                      placeholder="Film's Video"
                      label="Link Video"
                      required
                    />
                  </div>
                  <div>
                    <TextField
                      {...formik.getFieldProps("description")}
                      type="text"
                      placeholder="Film's Description"
                      label="Description"
                      required
                      fullWidth
                      multiline
                      inputProps={{
                        style: {
                          overflow:'auto',
                          height: "100px",
                        },
                      }}
                    />
                  </div>
                </div>
                <div className={styles.flexInputADD}>
                  <div>
                    <TextField
                      {...formik.getFieldProps("Avatar")}
                      type="text"
                      placeholder="Film's Avatar"
                      label="Avatar"
                      required
                    />
                  </div>
                  <div>
                    <TextField
                      {...formik.getFieldProps("Author")}
                      type="text"
                      placeholder="Film's Author"
                      label="Author"
                      required
                    />
                  </div>
                </div>
                <div className={styles.flexInputADD}>
                  <div>
                    <TextField
                      {...formik.getFieldProps("Poster")}
                      type="text"
                      placeholder="Film's Poster"
                      label="Poster"
                      required
                    />
                  </div>
                  <div>
                    <TextField
                      {...formik.getFieldProps("Facebook")}
                      type="text"
                      placeholder="Author's Network Social"
                      label="Network Social"
                      required
                    />
                  </div>
                </div>
                <div className={styles.buttonAdd}>
                  <button className={styles.btn_savechange} type="submit">
                    Update Film
                  </button>
                </div>
                <div className={styles.buttonAdd}>
                  <button
                    className={styles.btn_savechange}
                    onClick={handleDelete}
                  >
                    Delete Film
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default FormUpdateFilm;
