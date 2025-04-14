import { X } from "lucide-react";

export default function Modal({ handleClose, watched }) {
  console.log(watched);

  return (
    <div className="overlay backdrop-blur-sm border w-full h-full absolute z-30 flex justify-center">
      <div className="overflow-hidden rounded-xl flex flex-col absolute top-[200px] h-2/5 bg-[#202936] w-2/3">
        <X
          className="absolute right-5 top-5 cursor-pointer"
          onClick={() => handleClose()}
        />
      </div>
    </div>
  );
}
