import MoviesList from "./MoviesList";

export default function MainContent({ movies }) {
  return (
    <>
      <header className="text-4xl mt-10 mb-10">Movie Collections</header>
      <section className="flex justify-center">
        <MoviesList movies={movies} />
      </section>
    </>
  );
}
