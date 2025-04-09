import Movie from "./movie";

export default function MoviesList() {
  // loop over movies here
  return (
    <div className="flex justify-center gap-6 ">
      <Movie />
      <Movie />
      <Movie />
    </div>
  );
}
