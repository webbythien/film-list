import React, { useEffect, useState } from "react";
import FilmItem from "./FilmItem";
import styles from "./allscrenn.module.css";
import { FilmAuth } from "../context/FilmContext";
import FilmItem2 from "./FilmItem2";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import imageBackground1 from "../imageList/imageBackground1.png";
import video1 from "../imageList/video1.mp4";
import avatar1 from "../imageList/z4418293152453_17856ff602dae2c53ad4fcce62747c7d.jpg";
import imageBackground2 from "../imageList/DALATBackground2.png";
import video2 from "../imageList/video2.mp4";
import video3 from "../imageList/video3.mp4";
import avatar2 from "../imageList/z4418218122806_81a441bf63e2a1f17af30fef2a14ab2b.jpg";
import avatar3 from "../imageList/z4418218113862_b2628c9a781f25a872aaefdd15ea4d01.jpg";
import axios from "axios";
import Loading from "./Loading";
import FilmItemAdd from "./FilmItemAdd";
import FilmItemAdd2 from "./FilmItemAdd2";
import { useDispatch, useSelector } from "react-redux";
import { addAllFilm } from "../redux/actions";
import { allFilm, filmRemainingSelector } from "../redux/selectors";
import { Toaster } from "react-hot-toast";
function FilmList() {
 
  axios.defaults.baseURL = 'https://649acbb7bf7c145d02397ce4.mockapi.io/api/';
  const films = [
    {
      id: '2',
      Image: `${imageBackground1}`,
      Title: "Dalat Trip",
      Year: "2023",
      Nation: "Dalat Vietnam",
      url: `${video1}`,
      description:
        "Dalat or Da Lat is the capital city of Lam Dong province, Vietnam. Da Lat is the City of Flowers and honeymooners with lovely French villas, the fresh air, the beautiful waterfalls and gorgeous lakes sits in a lush and green valley of postcard beauty. ",
      Avatar: `https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/321790483_995274834782640_5233605753255069396_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=A_hakQKd7uMAX_EoTAU&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfC2ip5luE57bdm-bFQP48AMwZdoJQwwA5QtkMdixWzO6w&oe=64882C0D`,
      Author: "Ngọc Huyền - Hoàng Thiên",
      Facebook: "https://www.facebook.com/Hoangthien004",
      Poster: `${avatar1}`,
    },
    {
      id: '3',
      Image: `${imageBackground2}`,
      Title: "Dalat Trip",
      Year: "2023",
      Nation: "Dalat-Vietnam",
      url: `${video2}`,
      description:
        "Dalat or Da Lat is the capital city of Lam Dong province, Vietnam. Da Lat is the City of Flowers and honeymooners with lovely French villas, the fresh air, the beautiful waterfalls and gorgeous lakes sits in a lush and green valley of postcard beauty. ",
      Avatar: `https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/321790483_995274834782640_5233605753255069396_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=A_hakQKd7uMAX_EoTAU&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfC2ip5luE57bdm-bFQP48AMwZdoJQwwA5QtkMdixWzO6w&oe=64882C0D`,
      Author: "Ngọc Huyền - Hoàng Thiên",
      Facebook: "https://www.facebook.com/Hoangthien004",
      Poster: `${avatar2}`,
    },
    {
      id: '4',
      Image: `${imageBackground2}`,
      Title: "Dalat Trip",
      Year: "2023",
      Nation: "Dalat-Vietnam",
      url: `${video3}`,
      description:
        "Dalat or Da Lat is the capital city of Lam Dong province, Vietnam. Da Lat is the City of Flowers and honeymooners with lovely French villas, the fresh air, the beautiful waterfalls and gorgeous lakes sits in a lush and green valley of postcard beauty. ",
      Avatar: `https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/321790483_995274834782640_5233605753255069396_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=A_hakQKd7uMAX_EoTAU&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfC2ip5luE57bdm-bFQP48AMwZdoJQwwA5QtkMdixWzO6w&oe=64882C0D`,
      Author: "Ngọc Huyền - Hoàng Thiên",
      Facebook: "https://www.facebook.com/Hoangthien004",
      Poster: `${avatar3}`,
    },
    {
      id: '1',
      Image:
        "https://newsmd2fr.keeng.net/tiin/archive/imageslead/2023/03/15/90_3a78b163de1af7cb09405815b608ec7b.jpeg",
      Title: "Ưng Quá Chừng",
      Year: "2023",
      Nation: "Vietnam",
      url: "https://youtu.be/4qNALNWoGmI",
      description: `"Ưng Quá Chừng" is a captivating music video by Amee, a talented singer from Vietnam. Released in [insert release year], the video showcases a visually stunning and emotionally charged narrative that perfectly complements the song's powerful lyrics.`,
      Avatar:
        "https://i.scdn.co/image/c9c69ce9acac56733079ebf6326b80f72913c858",
      Author: "Amee",
      Facebook: "https://www.facebook.com/ameest319",
      Poster:
        "https://dt.muvi.vn/test/thumbnails/song/2023/03/28/artworks-c50r8eqmm2lxm78x-qpupzg-t500x500_20230328111338.jpg",
    },
    {
      id:' 5',
      Image:
        "https://preview.redd.it/new-poster-for-transformers-rise-of-the-beasts-v0-7q84w29raqra1.jpg?auto=webp&s=fe8d57c18cdd9b9a66b945fa9e17e705158d97f3",
      Title: "Transformers: Rise of the Beasts",
      Year: "2023",
      Nation: "USA",
      url: "https://www.youtube.com/watch?v=ZtuFgnxQMrA",
      description: `Rise of the Beasts is “the best Transformers movie yet.” See it on the biggest screen possible this Thursday. Watch the final trailer now.
      Returning to the action and spectacle that have captured moviegoers around the world, Transformers: Rise of the Beasts will take audiences on a ‘90s globetrotting adventure with the Autobots and introduce a whole new faction of Transformers – the Maximals – to join them as allies in the existing battle for earth. Directed by Steven Caple Jr. and starring Anthony Ramos and Dominique Fishback, the film arrives in theatres June 9, 2023.`,
      Avatar:
        "https://yt3.googleusercontent.com/PONSj7yNZXmRc_whSU8ihBrDAAeoWMXPXaeAdYYLldEXK4YjXPFw0Uiox6KdDOcujYqhjHSd=s176-c-k-c0x00ffffff-no-rj",
      Author: "Paramount Pictures",
      Facebook: "https://www.youtube.com/@paramountpictures",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZTNiNDA4NmMtNTExNi00YmViLWJkMDAtMDAxNmRjY2I2NDVjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    },
    {
      id: '6',
      Image:
        "https://images2.thanhnien.vn/528068263637045248/2023/6/4/universal-poster-1685866292781850298627.jpg",
      Title: "Oppenheimer",
      Year: "2023",
      Nation: "USA",
      url: "https://www.youtube.com/watch?v=uYPbbksJxIg",
      description: `
      Written and directed by Christopher Nolan, Oppenheimer is an IMAX®-shot epic thriller that thrusts audiences into the pulse-pounding paradox of the enigmatic man who must risk destroying the world in order to save it. 
       
      The film stars Cillian Murphy as J. Robert Oppenheimer and Emily Blunt as his wife, biologist and botanist Katherine “Kitty” Oppenheimer. Oscar® winner Matt Damon portrays General Leslie Groves Jr., director of the Manhattan Project, and Robert Downey, Jr. plays Lewis Strauss, a founding commissioner of the U.S. Atomic Energy Commission. `,
      Avatar:
        "https://yt3.googleusercontent.com/_xmrueXlQyPmO379bSt2BjirLWXxNOUoQn1jV0DpOlxxeCGlx9Z2L9HxfoWMgdsdIyGFh17W1A=s176-c-k-c0x00ffffff-no-rj",
      Author: "Universal Pictures",
      Facebook: "https://www.youtube.com/@UniversalPictures",
      Poster: "https://posterspy.com/wp-content/uploads/2023/03/OPPEN-15.jpg",
    },
    {
      id: '7',
      Image:
        "https://genk.mediacdn.vn/2019/11/12/1-1573571042465953988347.jpeg",
      Title: "Avengers: Endgame",
      Year: "2019",
      Nation: "USA",
      url: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
      description:
        "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
      Avatar:
        "https://yt3.googleusercontent.com/fGvQjp1vAT1R4bAKTFLaSbdsfdYFDwAzVjeRVQeikH22bvHWsGULZdwIkpZXktcXZc5gFJuA3w=s176-c-k-c0x00ffffff-no-rj",
      Author: "Marvel",
      Facebook: "https://www.youtube.com/@marvel",
      Poster:
        "https://cdn.marvel.com/content/2x/MLou2_Payoff_1-Sht_Online_DOM_v7_Sm.jpg",
    },
    {
      id: '8',
      Image: "https://i.ytimg.com/vi/QMxo3p7m0_4/maxresdefault.jpg",
      Title: "Moana Live Action",
      Year: "2024",
      Nation: "USA",
      url: "https://www.youtube.com/watch?v=iZWeVQl2KpE",
      description:
        "The live-action remake of Moana was first announced on April 3, 2023, by the animated film's star Dwayne “The Rock” Johnson, who voiced the shapeshifting demigod Maui. Posting across all socials, Johnson shared a special announcement video filmed on the island of Oahu where he grew up.",
      Avatar:
        "https://yt3.googleusercontent.com/hPeWHgaHPCSJOMy20xsfOfjojubHxbsoQC_5sFAy96E_5_EkXEOf49EUntgIQL_6yb79ndyW=s176-c-k-c0x00ffffff-no-rj",
      Author: "Cinematic Pro Studio",
      Facebook: "https://www.youtube.com/@CinematicProStudio",
      Poster: "https://collinsrace1.files.wordpress.com/2023/04/moana2-1.jpg",
    },
    {
      id: '9',
      Image:
        "https://static2.vieon.vn/vieplay-image/carousel_web_v4/2023/03/13/76qfvn15_1920x1080-titanic_1920_1080.jpeg",
      Title: "Titanic",
      Year: "2011",
      Nation: "USA",
      url: "https://www.youtube.com/watch?v=kVrqfYjkTdQ",
      description:
        "A boy and a girl from differing social backgrounds meet during the ill-fated maiden voyage of the RMS Titanic.",
      Avatar: "https://static.independent.co.uk/2022/12/27/09/newFile-2.jpg ",
      Author: "James Cameron",
      Facebook: "",
      Poster: "https://m.media-amazon.com/images/I/91WlTjCgu4L.jpg",
    },
    {
      id: '10',
      Image:
        "https://genk.mediacdn.vn/2018/3/31/photo-1-15224620607731943989009.jpeg",
      Title: "READY PLAYER ONE",
      Year: "2017",
      Nation: "USA",
      url: "https://www.youtube.com/watch?v=cSp1dM2Vj48",
      description:
        "The film is set in 2045, with the world on the brink of chaos and collapse.  But the people have found salvation in the OASIS, an expansive virtual reality universe created by the brilliant and eccentric James Halliday (Mark Rylance).  When Halliday dies, he leaves his immense fortune to the first person to find a digital Easter egg he has hidden somewhere in the OASIS, sparking a contest that grips the entire world.  When an unlikely young hero named Wade Watts (Tye Sheridan) decides to join the contest, he is hurled into a breakneck, reality-bending treasure hunt through a fantastical universe of mystery, discovery and danger.",
      Avatar:
        "https://yt3.googleusercontent.com/Dd84-7pxMM5DvXGwsEoLv5NMdyeEJnGxhe0rtDuJslFN3YUKCOhN5R7n8--B6g33kPNV2Pv8Q28=s176-c-k-c0x00ffffff-no-rj",
      Author: "Warner Bros. Pictures",
      Facebook: "https://www.youtube.com/@WarnerBrosPictures",
      Poster:
        "https://i.etsystatic.com/12729518/r/il/6958c2/2049055905/il_570xN.2049055905_jsq6.jpg",
    },
    {
      id: '11',
      Image:
        "https://www.hollywoodreporter.com/wp-content/uploads/2023/04/SpiderManAcrossTheSpiderVerse_TheSpot_01-1.jpg?w=1296",
      Title: "SPIDER-MAN: ACROSS THE SPIDER-VERSE",
      Year: "2023",
      Nation: "USA",
      url: "https://www.youtube.com/watch?v=shW9i6k8cB0",
      description:
        "Miles Morales returns for the next chapter of the Oscar®-winning Spider-Verse saga, Spider-Man™: Across the Spider-Verse. After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must redefine what it means to be a hero so he can save the people he loves most.",
      Avatar:
        "https://yt3.googleusercontent.com/S4VWNJnJF_21DlC_tXhDYg6jyr4E9tJMlwn6kx49HPrh8uqNnQ3vZrIoDaaW2irhhsb-lTFQKA=s176-c-k-c0x00ffffff-no-rj",
      Author: "Sony Pictures Entertainment ",
      Facebook: "https://www.youtube.com/@sonypictures",
      Poster:
        "https://images2.thanhnien.vn/528068263637045248/2023/6/1/spider-man-across-the-spider-verse-poster-16850724641101103572976-168564586504456671684.jpg",
    },
    {
      id: '12',
      Image: "https://i.ytimg.com/vi/DQAHg4e9-wk/maxresdefault.jpg",
      Title: "GODZILLA x KONG: The New Empire",
      Year: "2024",
      Nation: "USA",
      url: "https://www.youtube.com/watch?v=0hTWFlmh9UQ",
      description:
        "In 2021, the entertainment universe Monsterverse brought the blockbusterGodzilla vs. Kong,a global entertainment event as well as a popular popular culture product. Two famous Titans on the big screen confront each other, thereby shaking the global box office. Godzilla x Kong: The New Empireis the 5th film in the Monsterverse series, and this time, two famous Titans will join hands and face a threat that could destroy all life on the planet.",
      Avatar:
        "https://yt3.googleusercontent.com/hPeWHgaHPCSJOMy20xsfOfjojubHxbsoQC_5sFAy96E_5_EkXEOf49EUntgIQL_6yb79ndyW=s176-c-k-c0x00ffffff-no-rj",
      Author: "Cinematic Pro Studio",
      Facebook: "https://www.youtube.com/@CinematicProStudio",
      Poster:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f452aa2c-0c64-4bbf-b065-942b8dbda8bb/dfv1c3k-6e648d98-6732-45f2-80d2-99a44e19d7e1.jpg/v1/fill/w_728,h_1097,q_70,strp/godzilla_x_kong___the_new_empire_by_diamonddead_art_dfv1c3k-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTUwNyIsInBhdGgiOiJcL2ZcL2Y0NTJhYTJjLTBjNjQtNGJiZi1iMDY1LTk0MmI4ZGJkYThiYlwvZGZ2MWMzay02ZTY0OGQ5OC02NzMyLTQ1ZjItODBkMi05OWE0NGUxOWQ3ZTEuanBnIiwid2lkdGgiOiI8PTEwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.BYqdaE9cMD4HyKRDrehRsQUS7DxcoGFqr-XFFcP4gPE",
    },
    {
      id: '13',
      Image: "https://i.ytimg.com/vi/DQAHg4e9-wk/maxresdefault.jpg",
      Title: "GODZILLA x KONG: The New Empire",
      Year: "2024",
      Nation: "USA",
      url: "https://www.youtube.com/watch?v=0hTWFlmh9UQ",
      description:
        "In 2021, the entertainment universe Monsterverse brought the blockbusterGodzilla vs. Kong,a global entertainment event as well as a popular popular culture product. Two famous Titans on the big screen confront each other, thereby shaking the global box office. Godzilla x Kong: The New Empireis the 5th film in the Monsterverse series, and this time, two famous Titans will join hands and face a threat that could destroy all life on the planet.",
      Avatar:
        "https://yt3.googleusercontent.com/hPeWHgaHPCSJOMy20xsfOfjojubHxbsoQC_5sFAy96E_5_EkXEOf49EUntgIQL_6yb79ndyW=s176-c-k-c0x00ffffff-no-rj",
      Author: "Cinematic Pro Studio",
      Facebook: "https://www.youtube.com/@CinematicProStudio",
      Poster:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f452aa2c-0c64-4bbf-b065-942b8dbda8bb/dfv1c3k-6e648d98-6732-45f2-80d2-99a44e19d7e1.jpg/v1/fill/w_728,h_1097,q_70,strp/godzilla_x_kong___the_new_empire_by_diamonddead_art_dfv1c3k-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTUwNyIsInBhdGgiOiJcL2ZcL2Y0NTJhYTJjLTBjNjQtNGJiZi1iMDY1LTk0MmI4ZGJkYThiYlwvZGZ2MWMzay02ZTY0OGQ5OC02NzMyLTQ1ZjItODBkMi05OWE0NGUxOWQ3ZTEuanBnIiwid2lkdGgiOiI8PTEwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.BYqdaE9cMD4HyKRDrehRsQUS7DxcoGFqr-XFFcP4gPE",
    },
  ];
  const { play, setToggle, toggle, open, setOpen,checkDelete } = FilmAuth();
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    marginTop: "20%",
    color: theme.palette.text.secondary,
  }));
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const filmRemaining = useSelector(filmRemainingSelector);
  useEffect(() => {
    const test = async () => {
      const dataPromise = axios.get("/film");
      dataPromise
        .then((data) => {
          setLoading(false);
          dispatch(addAllFilm(data.data));
        })
        .catch(() => {
          console.log("Cannot Get List Film");
        });
    };
    test();
  }, [open]);


  return (
    <>
      {toggle ? (
        loading ? (
          <div
            style={{
              background: "#104474",
              height: "100vh",
              width: "100vw",
              marginTop: "-100px",
              marginBottom: "-200px",
              marginLeft: "-100px",
              zIndex: 1,
            }}
          >
            <Loading />
          </div>
        ) : (
          <div className={styles.filmItem}>
            <div style={{ marginBottom: "20px" }}>
              <FilmItemAdd />
            </div>
            {filmRemaining.map((film, index) => {
              return (
                <div key={film.id}>
                  <FilmItem film={film} />;
                </div>
              );
            })}
          </div>
        )
      ) : loading ? (
        <div style={{ background: "#104474", height: "100vh", width: "100vw" }}>
          <Loading />
        </div>
      ) : (
        <Grid
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
          margin={"0 auto"}
          mt={"10%"}
          ml={"1%"}
        >
          <Toaster></Toaster>
          <FilmItemAdd2 />
          {filmRemaining.map((film, index) => {
            return (
              <div key={film.id}>
                <FilmItem2 film={film} />;
              </div>
            );
          })}
        </Grid>
      )}
    </>
  );
}

export default FilmList;
