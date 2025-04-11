import { Star } from "lucide-react";

export default function Movie({ movie, getMovieInfo }) {
  // destructor object for matching details
  const { Title: title, Year: year, Poster: poster, Type: type } = movie;

  return (
    <div
      onClick={() => getMovieInfo(movie.imdbID)}
      style={{
        backgroundImage: `url(${poster})`,
        backgroundSize: "cover",
        filter: "brightness(90%)",
        backgroundPosition: "center",
        cursor: "pointer",
      }}
      className=" flex flex-col justify-end mt-5 p-5 border w-[400px] h-[400px] rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
    >
      <div className="">
        {" "}
        <h3 className=" text-3xl mb-3 font-bold bg-black p-2 ">{title}</h3>
      </div>
      <div className="flex justify-between items-center">
        <button className=" rounded-lg border-none text-white p-1 bg-purple-600 w-[100px]">
          {type}
        </button>
        <p className="mr-20 text-sm">{year}</p>
        <span className="flex items-center gap-4">
          {" "}
          <Star className="w-6 h-6 fill-yellow-300 text-yellow-300" />{" "}
          <span className="font-bold text-lg">{""}</span>{" "}
        </span>
      </div>
    </div>
  );
}
