import { useEffect } from "react";

const initState = {
  search: "",
  film: {
    id: "",
    Title: "",
    Nation: "",
    Image: "",
    Year: "",
  },
  allfilm: [],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "add/film": {
      const film = action.payload;
      let newState = {};
      const value = Object.assign(film, {});
      newState = {
        ...state,
        film: { ...value },
      };
      return newState;
    }
    case "add/allfilm": {
      const allfilm = action.payload;
      const newState = {
        ...state,
        allfilm: (state.allfilm = allfilm),
      };
      return newState;
    }
    case "delete/film": {
      const id = action.payload;
      const newState = {
        ...state,
        allfilm: state.allfilm.filter((item) => item.id !== id),
      };
      return newState;
    }
    case "search/film": {
      const search = action.payload;
      const newState = {
        ...state,
        search: action.payload,
      };
      return newState;
    }
    case "playPause/film": {
      const { toggle } = action.payload;
      const film = state.film;
      let newState = {};
      const value = Object.assign(film, { play: toggle });
      newState = {
        ...state,
        film: value,
      };
      return newState;
    }

    default:
      return state;
  }
};

export default rootReducer;
