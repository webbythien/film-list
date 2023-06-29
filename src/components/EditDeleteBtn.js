import React, { useEffect, useState } from "react";
import styles from "./filmItem2.module.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Typography, Modal, Box } from "@mui/material";
import { FilmAuth } from "../context/FilmContext";
import FormAdd from "./FormAdd";
import FormUpdateFilm from "./FormUpdateFilm";
import { useDispatch, useSelector } from "react-redux";
import { SearchFilm, addFilm } from "../redux/actions";
import { search } from "../redux/selectors";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
function EditDeleteBtn(film) {
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
  const [openList, setOpenList] = useState(false);
  const { openUpdate, setOpenUpdate, checkDelete, setCheckDelete } = FilmAuth();
  const dispatch = useDispatch();
  const handleMoreBtn = (event) => {
    event.stopPropagation();
    setOpenList(!openList);
  };

  const handleUpdate = (event) => {
    event.stopPropagation();
    dispatch(addFilm(film.film));
    setOpenUpdate(true);
  };

  return (
    <>
      {openUpdate && <FormUpdateFilm />}
      <div onClick={handleUpdate} className={styles.moreBtn}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <div className={styles.editBtn}>
            <ModeEditOutlineIcon />
          </div>
          {/* phần này ko liên quan */}
          {openList && (
            <div
              style={{
                position: "fixed",
                width: "100px",
                height: "fit-content",
                background: "black",
                right: 0,
                top: 45,
                zIndex: 999999999,
                overflow: "auto",
                margin: "-1px 0 0 -1px",
                borderRadius: "10px",
              }}
              className={styles.moreList}
            >
              <div onClick={handleUpdate} className={styles.editDeleteText}>
                <Typography style={{ color: "white", backgroundColor: "grey" }}>
                  Edit
                </Typography>
              </div>
              {/* <div onClick={()=>(setCheckDelete(true))} className={styles.editDeleteText}>
                <Typography style={{ color: "white", backgroundColor: "grey" }}>
                  Delete
                </Typography>
              </div> */}
              {/* phần này ko liên quan */}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default EditDeleteBtn;
