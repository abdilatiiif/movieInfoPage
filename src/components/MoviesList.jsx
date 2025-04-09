import Movie from "./movie";

export default function MoviesList({ movies }) {
  // loop over movies here
  return (
    <div className="flex flex-wrap justify-center gap-6 ">
      {movies.map((movie) => (
        <Movie movie={movie} />
      ))}
    </div>
  );
}
