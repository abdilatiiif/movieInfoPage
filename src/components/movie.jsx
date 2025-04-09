import { Star } from "lucide-react";

export default function Movie({ movie }) {
  console.log(movie);
  // loop over movies here

  return (
    <div
      style={{
        backgroundImage: `url(${movie.image})`,
        backgroundSize: "cover",
        filter: "brightness(120%)",
        backgroundPosition: "center",
      }}
      className=" flex flex-col justify-end mt-5 p-5 border w-[400px] h-[400px] rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
    >
      <div className="">
        {" "}
        <h3 className=" text-3xl mb-3 font-bold">{movie.title}</h3>
      </div>
      <div className="flex justify-between items-center">
        <button className=" rounded-lg border-none text-white p-1 bg-purple-600 w-[100px]">
          {movie.genre}
        </button>
        <p className="mr-20 text-sm">{movie.year}</p>
        <span className="flex items-center gap-4">
          {" "}
          <Star className="w-6 h-6 fill-yellow-300 text-yellow-300" />{" "}
          <span className="font-bold text-lg">{movie.rating}</span>{" "}
        </span>
      </div>
    </div>
  );
}
