import { useContext, createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { filmSelector } from "../redux/selectors";

const AuthContext = createContext(); //tạo ra 1 cái kho
export const AuthContextProvider = ({ children }) => {
  const [play, setPlay] = useState();
  const [duration, setDuration] = useState();
  const check = useSelector(filmSelector);
  const [toggle, setToggle] = useState(true);
  const takeDuration = (dura) => {
    return dura;
  };

  // const [user, setUser] = useState({});
  // const googleSignIn = async () => {
  //   const provider = new GoogleAuthProvider();
  //    await signInWithPopup(auth, provider);
  // };
  // const dispatch = useDispatch();
  // const logOut = async () => {
  //   // if(user){
  //   signOut(auth);
  //   // }else{
  //   dispatch(logOutNormal(""));
  // };
  useEffect(() => {
    if(check.play!==undefined){
      setPlay(check.play);
      console.log(play);
    }
  }, [play]);

  useEffect(() => console.log("mounted"), [toggle]);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
  //     if (currentUser) {
  //       setUser(currentUser);
  //       const token = await currentUser.getIdToken();
  //       console.log(token);
  //       const data = await verifyTokenGoogle(token);
  //       if (data) {
  //         dispatch(addUserLogin(data));
  //         dispatch(setDataLogin(data));
  //       }
  //     }
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, [user]);

  return (
    <AuthContext.Provider
      value={{
        play,
        setPlayed: setPlay,
        takeDuration,
        duration,
        setToggle,
        toggle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const FilmAuth = () => {
  return useContext(AuthContext); //sử dụng kho
};
