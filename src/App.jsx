import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";
import "/Users/abdilatif/Desktop/MovieInfoPage/src/styles/app.css";

import { useEffect, useState } from "react";
import MovieModal from "./components/MovieModal";
import Modal from "./components/Modal";

const API_KEY = "48fbb5a9";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("batman");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [imdbID, setImdbID] = useState("");
  const [selected, setSeleced] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [watched, setWatched] = useState(() => {
    const storedWatchList = localStorage.getItem("watched");
    if (storedWatchList === null || storedWatchList === "undefined") {
      return [];
    }
    return JSON.parse(storedWatchList);
  });

  function handleDeleteMovie(id) {
    console.log("clicked", id);
    setWatched((prevWatched) =>
      prevWatched.filter((movie) => movie.imdbID !== id)
    );
    console.log(watched);
  }

  function handleClose() {
    setImdbID("");
    setSeleced("");
    setShowModal(false);
  }

  function handleAddWatch(id) {
    async function getMovie() {
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
        );
        const data = await res.json();

        console.log(data);

        setWatched((w) => [...w, data]);
      } catch (error) {
        console.log("could`t get the movie", error);
        throw new Error("no info of the movie");
      } finally {
        setError("no info");
      }
    }
    getMovie();
    openWatchList();

    console.log(watched);
  }

  function openWatchList() {
    if (!watched.length > 0) {
      console.log("empty watchlist");
    } else {
      console.log("open watchlist modal");
      setShowModal(true);
    }
  }

  function getMovieInfo(id) {
    setImdbID(id);
    console.log("open modal");

    // slow scroll top of the page
    document.body.scrollTop = 0;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [watched]);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    });
  }, []);

  useEffect(() => {
    async function getMovie() {
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`
        );
        const data = await res.json();

        imdbID && setSeleced(data);
      } catch (error) {
        console.log("could`t get the movie", error);
        throw new Error("no info of the movie");
      } finally {
        setError("no info");
      }
    }
    getMovie();
  }, [imdbID]);

  // Get movies function
  useEffect(() => {
    const controller = new AbortController();

    async function getMovies() {
      try {
        setIsLoading(true);
        setMovies([]);
        if (query.length > 2) {
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
          );
          const data = await res.json();

          if (data.Response === "False") {
            throw new Error("No movie was found ⛔️");
          }
          setMovies(data.Search);
        }
      } catch (error) {
        if (error.name === "Error") {
          setError("no movie found", error);
        }
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();

    return () => {
      controller.abort();
    };
  }, [query]);

  //Get that movie

  return (
    <div className="relative">
      {imdbID && (
        <MovieModal
          movie={selected}
          handleAddWatch={handleAddWatch}
          handleClose={handleClose}
        />
      )}

      {watched && showModal && (
        <Modal
          handleDeleteMovie={handleDeleteMovie}
          handleClose={handleClose}
          watched={watched}
        />
      )}
      <NavBar
        watched={watched}
        setQuery={setQuery}
        openWatchList={openWatchList}
      />
      {!isLoading ? (
        <MainContent
          movies={movies}
          isLoading={isLoading}
          getMovieInfo={getMovieInfo}
        />
      ) : (
        <p className="mt-10 text-3xl">Loading movies ⏳</p>
      )}
      {movies.length === 0 && error}
    </div>
  );
}
