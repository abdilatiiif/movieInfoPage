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
} from "lucide-react";

export default function MovieModal({ handleCloseMovie }) {
  return (
    <div className="overlay backdrop-blur-sm border w-full h-full absolute z-30 flex justify-center">
      <div className="overflow-hidden rounded-xl flex flex-col absolute top-[200px] h-2/5 bg-[#202936] w-2/3">
        <div
          style={{
            backgroundSize: "cover",
            backgroundImage:
              "url('https://rtvc-assets-radionica3.s3.amazonaws.com/s3fs-public/styles/articulo_760x422/public/2024-10/filters_quality%2895%29format%28webp%29.jpg?itok=43c0YITf')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            maskImage: "linear-gradient(black, transparent)",
          }}
          className="h-1/2 w-full"
        ></div>
        <X
          className="absolute right-5 top-5 cursor-pointer"
          onClick={() => handleCloseMovie()}
        />

        <div className="flex justify-between px-10">
          <span className="text-4xl font-bold">Title of the movie here</span>{" "}
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

        <div className="flex ">
          <div className="flex flex-col border bg-pink-400 flex-1">
            {" "}
            <p>
              • some text[ x] Create the Loader component: Display a simple
              loading indicator. • [x ] Create the ErrorMessage component:
              Display an error message to the user if something goes wrong.
              Phase 3: Displaying Search Results
            </p>
            <ul>
              <li>dircetor</li>
              <li>time</li>
              <li>year</li>
            </ul>
          </div>
          <div className=" flex-1 flex flex-col border bg-red-300 ">
            <h3>Cast</h3>
            <ul>
              <li>loop over cast</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
