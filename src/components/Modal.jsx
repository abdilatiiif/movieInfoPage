import { X } from "lucide-react";

export default function Modal({
  handleClose,
  watched = [],
  handleDeleteMovie,
}) {
  console.log(watched);

  watched.map((m) => <MovieWatch movie={m} />);

  return (
    <div className="absolute z-30 flex justify-center w-full h-full border overlay backdrop-blur-sm">
      <div className="overflow-hidden rounded-xl flex flex-col absolute top-[200px] h-2/5 bg-[#202936] w-2/3">
        <X
          className="absolute cursor-pointer right-5 top-5"
          onClick={handleClose}
        />

        <div className="h-full m-4 overflow-auto ">
          {watched.map((m) => (
            <MovieWatch handleDeleteMovie={handleDeleteMovie} movie={m} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MovieWatch({ movie, handleDeleteMovie }) {
  return (
    <div className="bg-[#3A404AFF] flex justify-around items-center mb-3 rounded-xl overflow-auto">
      {" "}
      <img src={movie.Poster} alt={movie.Title} className="w-24" />
      <section className="flex flex-col items-center justify-center">
        <h3>{movie.Title}</h3>
        <aside>
          {" "}
          <span>movie.Year</span> * <span>{movie.Runtime} </span> *{" "}
          <span>{movie.Genre}</span>
        </aside>
      </section>
      <button
        onClick={() => handleDeleteMovie(movie.imdbID)}
        className="w-6 h-6 bg-red-300 rounded-full cursor-pointer hover:transition-all hover:scale-110 "
      >
        X
      </button>
    </div>
  );
}
