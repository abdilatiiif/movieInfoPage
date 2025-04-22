import "/Users/abdilatif/Desktop/MovieInfoPage/src/styles/navbar.css";

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

export default function NavBar({ onSearch, watched = [0], openWatchList }) {
  return (
    <nav className="flex items-center justify-between pt-10 pl-10 pr-10">
      <div className="flex items-center justify-center gap-4 transition-all cursor-pointer hover:scale-110">
        <Film className="w-8 h-8 text-[#832FEAFF]" />
        <div className="text-2xl ">MovieInfoPage</div>
      </div>
      <div className="flex gap-4">
        <div className="relative flex ">
          <Search className="absolute w-5 h-5 cursor-pointer left-2 top-3" />
          <input
            onChange={(e) => onSearch(e.target)}
            type="text"
            placeholder=" Search movies..."
            className="cursor-pointer border-none rounded-full p-[8px] pl-8 w-[250px] bg-[#202936] transition-all focus:outline-none focus:ring focus:border-red-200 ring-purple-500 outline-purple-500"
          />
        </div>
        <div className="flex items-center relative bg-[#9C59EE] rounded-full hover:bg-[#842EEEFF] transition-all">
          <List className="absolute w-5 h-5 cursor-pointer left-2" />
          <button
            onClick={() => openWatchList()}
            className=" cursor-pointer ml-2 p-[8px] w-[150px] "
          >
            Watchlist <span>({watched && watched.length})</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
