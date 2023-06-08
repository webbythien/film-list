import { useEffect } from "react";

const initState = {
  film:{
    id:"",
    Title:"",
    Nation:"",
    Image:"",
    Year:"",
  }
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "add/film": {
      const film = action.payload;
      let newState = {};
      const value = Object.assign(film,{})
      newState = {
        ...state,
        film: {...value},
      }
      return newState;
    }
    case "playPause/film": {
      const {toggle} = action.payload;
      const film = state.film
      let newState = {};
      const value = Object.assign(film,{play:toggle})
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
