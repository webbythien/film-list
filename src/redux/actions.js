
export const addFilm = (data) => {
  return {
    type: "add/film",
    payload: data,
  };
};

export const addAllFilm = (data) => {
  return {
    type: "add/allfilm",
    payload: data,
  };
};

export const SearchFilm = (data) => {
  return {
    type: "search/film",
    payload: data,
  };
};

export const deleteFilm = (id) => {
  return {
    type: "delete/film",
    payload: id,
  };
};

export const updateFilm = (id) => {
  return {
    type: "update/film",
    payload: id,
  };
};
export const setPausePlay = (data) => {
  return {
    type: "playPause/film",
    payload: data,
  };
};