
export const addFilm = (data) => {
  return {
    type: "add/film",
    payload: data,
  };
};

export const setPausePlay = (data) => {
  return {
    type: "playPause/film",
    payload: data,
  };
};