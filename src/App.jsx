import { Search } from "lucide-react";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";
import "/Users/abdilatif/Desktop/MovieInfoPage/src/styles/app.css";

import { useEffect, useState } from "react";

const API_KEY = "48fbb5a9";

/*
const tempMovies = [
  {
    title: "Dune: Part Two",
    rating: 8.8,
    image:
      "https://deadline.com/wp-content/uploads/2024/01/MCDDUPA_WB041-e1708041579639.jpg?w=800",
    genre: "Sci-Fi",
    year: 2024,
    duration: "166 min",
    director: "Denis Villeneuve",
    description:
      "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he must prevent a terrible future only he can foresee.",
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
  },
  {
    title: "Poor Things",
    rating: 8.4,
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
    genre: "Drama",
    year: 2023,
    duration: "141 min",
    director: "Yorgos Lanthimos",
    description:
      "The incredible tale about the fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter.",
    cast: ["Emma Stone", "Mark Ruffalo", "Willem Dafoe"],
  },
  {
    title: "The Zone of Interest",
    rating: 7.9,
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80",
    genre: "Drama",
    year: 2023,
    duration: "105 min",
    director: "Jonathan Glazer",
    description:
      "The commandant of Auschwitz, Rudolf Höss, and his wife Hedwig, strive to build a dream life for their family in a house and garden next to the camp.",
    cast: ["Christian Friedel", "Sandra Hüller", "Johann Karthaus"],
  },
  {
    title: "Oppenheimer",
    rating: 8.5,
    image:
      "https://images.unsplash.com/photo-1518544801976-3e159e50e5bb?auto=format&fit=crop&w=800&q=80",
    genre: "Biography",
    year: 2023,
    duration: "180 min",
    director: "Christopher Nolan",
    description:
      "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon"],
  },
  {
    title: "Past Lives",
    rating: 8.1,
    image:
      "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?auto=format&fit=crop&w=800&q=80",
    genre: "Romance",
    year: 2023,
    duration: "105 min",
    director: "Celine Song",
    description:
      "Nora and Hae Sung, two deeply connected childhood friends, are wrested apart after Nora's family emigrates from South Korea. Twenty years later, they are reunited for one fateful week.",
    cast: ["Greta Lee", "Teo Yoo", "John Magaro"],
  },
  {
    title: "The Holdovers",
    rating: 8.0,
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    genre: "Comedy-Drama",
    year: 2023,
    duration: "133 min",
    director: "Alexander Payne",
    description:
      "A cranky history teacher at a remote prep school is forced to remain on campus over the holidays with a troubled student who has no place to go.",
    cast: ["Paul Giamatti", "Dominic Sessa", "Da'Vine Joy Randolph"],
  },
];
*/

export default function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("batman");
  const [watched, setWatched] = [12];
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [imdbID, setImdbID] = useState("");

  function handleSearch(e) {
    setQuery(e.value);
  }

  function getMovieInfo(id) {
    setImdbID(id);
  }

  useEffect(() => {
    async function getMovie() {
      try {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`
        );
        const data = await res.json();

        imdbID && console.log(data);
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
            `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
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
    <div className="app">
      <NavBar watched={watched} onSearch={handleSearch} />

      {!isLoading ? (
        <MainContent
          movies={movies}
          isLoading={isLoading}
          getMovieInfo={getMovieInfo}
        />
      ) : (
        <p className="mt-10 text-3xl">Loading movies ⏳</p>
      )}

      {!movies.length > 0 && error}
    </div>
  );
}

//bg-gradient-to-br from-gray-900 to-gray-800
