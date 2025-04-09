import Movie from "./movie";

export default function MoviesList({ movies }) {
  console.log(movies);
  // loop over movies here
  return (
    <div className="flex flex-wrap justify-center gap-6 ">
      {movies && movies.map((movie) => <Movie movie={movie} />)}
    </div>
  );
}
