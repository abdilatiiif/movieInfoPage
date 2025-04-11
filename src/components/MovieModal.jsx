import {
  Film,
  Search,
  Star,
  X,
  Clock,
  Calendar,
  Ticket,
  BookmarkPlus,
  BookmarkCheck,
  List,
  Timer,
} from "lucide-react";

export default function MovieModal({ handleCloseMovie, movie }) {
  /* .split(",").map((n) => (
        <li className="bg-[#394050] p-2 rounded-lg">{n}</li>
    ))
*/
  return (
    <div className="overlay backdrop-blur-sm border w-full h-full absolute z-30 flex justify-center">
      <div className="overflow-hidden rounded-xl flex flex-col absolute top-[200px] h-2/5 bg-[#202936] w-2/3">
        <div
          style={{
            backgroundImage: `url(${movie.Poster})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            maskImage: "linear-gradient(black, transparent)",
          }}
          className="h-1/2 w-full"
        ></div>
        <X
          className="absolute right-5 top-5 cursor-pointer"
          onClick={() => handleCloseMovie()}
        />

        <div className="flex justify-between px-10">
          <span className="text-4xl font-bold">{movie.Title}</span>{" "}
          <button className="flex justify-center items-center gap-2 p-2 px-4 bg-[#9D58F0] rounded-full transition-all cursor-pointer hover:scale-110">
            {" "}
            <BookmarkPlus className="w-4 h-4" /> <p>Add to watchlist</p>
          </button>
        </div>
        <div className=" mt-5 flex items-center pl-10 gap-4">
          {" "}
          <span className=" bg-[#9D58F0] rounded-full p-1 text-sm w-20 text-center">
            Type
          </span>{" "}
          <span className="flex items-center gap-2">
            {" "}
            <Star className=" text-yellow-400 fill-yellow-400 w-6 h-6" />{" "}
            <p className="text-md font-bold">9.4</p>
          </span>
        </div>

        <div className="flex bg-transparent ">
          <div className="flex flex-col flex-1 p-10">
            {" "}
            <p className="mb-10">{movie.Plot}</p>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-2">
                {" "}
                <Ticket /> <p>Dircetor: {movie.Director}</p>
              </li>
              <li className="flex gap-2">
                {" "}
                <Timer /> <p>Duration: {movie.Runtime}</p>
              </li>
              <li className="flex gap-2">
                {" "}
                <Calendar /> <p>Release Year: {movie.Year}</p>
              </li>
            </ul>
          </div>
          <div className=" flex-1 flex flex-col p-10 ">
            <h3 className="text-2xl font-bold mb-4">Cast</h3>
            <ul className="flex flex-col gap-2">{movie.Actors}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}
