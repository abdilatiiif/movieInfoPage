import { Star } from "lucide-react";

export default function Movie() {
  // loop over movies here
  return (
    <div className="flex flex-col justify-end p-5 border w-[400px] h-[400px] rounded-3xl">
      <div className="">
        {" "}
        <h3 className="text-3xl mb-3 font-bold">Movie name</h3>
      </div>
      <div className="flex justify-between items-center">
        <button className=" rounded-lg border-none text-white p-1 bg-purple-600 w-[80px]">
          Genre
        </button>
        <p className="mr-20 text-sm">2004</p>
        <span className="flex items-center gap-4">
          {" "}
          <Star className="w-6 h-6 fill-yellow-300 text-yellow-300" />{" "}
          <span className="font-bold text-lg">8.4</span>{" "}
        </span>
      </div>
    </div>
  );
}
