import { createSelector } from "reselect";

export const filmSelector = (state) => {
  return state.film;
};

export const search = (state) => {
  return state.search;
};

export const allFilm = (state) => {
  return state.allfilm;
};

export const filmRemainingSelector = createSelector(
  allFilm,
  search,
  (filmList, searchText, ) => {
    if(searchText){
      const result =  filmList.filter((film) => {
        return (
          film.Title.toUpperCase().includes(searchText.toUpperCase())
        );
      });
      return result
    }else{
      return filmList.sort(compareID) 
    }
    
  }
);

function compareID( a, b ) {
  if ( Number.parseInt(a.id) < Number.parseInt(b.id) ){
    return 1;
  }
  if ( Number.parseInt(a.id) > Number.parseInt(b.id) ){
    return -1;
  }
  return 0;
}

function compare( a, b ) {
  if ( a.Title < b.Title ){
    return -1;
  }
  if ( a.Title > b.Title ){
    return 1;
  }
  return 0;
}