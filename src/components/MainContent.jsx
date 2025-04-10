import MoviesList from "./MoviesList";

export default function MainContent({ movies, isLoading, getMovieInfo }) {
  return (
    <>
      <header className="pl-10 text-4xl mt-10 mb-10">Movie Collections</header>
      <section className="flex justify-center z-20">
        {!isLoading && (
          <MoviesList movies={movies} getMovieInfo={getMovieInfo} />
        )}
      </section>
    </>
  );
}
