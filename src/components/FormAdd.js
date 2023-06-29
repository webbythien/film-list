import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filmSelector } from "../redux/selectors";
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
import { SearchFilm } from "../redux/actions";
import { FilmAuth } from "../context/FilmContext";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useFormik } from "formik";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import CheckIcon from "@mui/icons-material/Check";
function FormAdd() {
  const { open, setOpen } = FilmAuth();
  axios.defaults.baseURL = "https://649acbb7bf7c145d02397ce4.mockapi.io/api/";

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
  const handleClose = () => {
    if (isValue) {
      toast.error("Not Save Changed? You still want close tabs!!!");
      setPromting(true);
    } else {
      setOpen(false);
    }
  };
  const dispatch = useDispatch();
  const submit = (e) => {
    e.preventDefault();
  };

  const formik = useFormik({
    initialValues: {},
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      Object.assign(values, { Year: `${year}` });
      // values = Object.assign(values, {
      //   avatar: file || user.avatar || "",
      // });
      // let updatePromise = updateUser(values);
      // console.log(values);
      // toast.promise(updatePromise, {
      //   loading: "Updating...",
      //   success: <b>Update Successfully...!</b>,
      //   error: <b>Could not Update!</b>,
      // });
      // updatePromise.then((res) => {
      //   dispatch(updateData(res.data.data));
      // });
      console.log(values);
      const data = axios.post(`/film`, values);
      toast.promise(data, {
        loading: "Loading...",
        success: <b>Add {values.Title} Successfully...!</b>,
        error: <b>Add {values.Title} Fail!</b>,
      });
      data
        .then(() => {
          setPromting(false);
          setOpen(false);
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
  useEffect(() => {}, [promting]);
  const handleNotSaveChanges = () => {
    setPromting(false);
    setOpen(false);
    setIsValue('')
    formik.handleReset()
  };

  const handleContinueEdit = () => {
    setPromting(false);
    console.log(formik);
  };
  return (
    <div>
      <Toaster></Toaster>
      <Modal
        open={promting}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:40}} className={style.glassModalAdd}>
        <div><Typography>Do You Want To Close? This not save changed</Typography></div>
        <div style={{display:'flex',gap:100}}>
          <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}  >
            <CloseIcon
            style={{padding:'10px'}}
              className={styles.btnClose}
              onClick={handleContinueEdit}
            />
            <Typography>No</Typography>
          </div>
          <div style={{display:'flex',alignItems:'center',flexDirection:'column'}} >
            <CheckIcon
            style={{padding:'10px'}}
              className={styles.btnClose}
              onClick={handleNotSaveChanges}
            />
            <Typography>Yes</Typography>
          </div>
          </div>
        </Box>
      </Modal>
      <Modal
        open={open}
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
                        label={'"year"'}
                        views={["year"]}
                        openTo="year"
                        values={year}
                        onChange={(newValue) => setYear(newValue.$y)}
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
                    Add New Film
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

export default FormAdd;
