import React from "react";

function Loader() {
  return (
    <div className="bg-black/60 w-screen h-screen absolute flex items-center justify-center">
      <div className=" text-center">
        <p className="poppins text-white">Loading...</p>
      </div>
    </div>
  );
}

export default Loader;
