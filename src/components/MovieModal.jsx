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

export default function MovieModal() {
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
        <X className="absolute right-5 top-5 cursor-pointer" />

        <div>
          <span>title</span> <button>Add to watchlist</button>
        </div>
        <div>
          {" "}
          <span>type</span> <span>star rating</span>
        </div>
        <div>
          {" "}
          <p>plot/ description</p>
          <ul>
            <li>dircetor</li>
            <li>time</li>
            <li>year</li>
          </ul>
        </div>
        <div>
          <h3>Cast</h3>
          <ul>
            <li>loop over cast</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
