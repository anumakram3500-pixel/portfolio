import React, { useState } from "react";

const Discription = () => {
  const text =
    "Anum – Unity Game Developer (3 Years) & Web Developer (1.5 Yearss Experienced in mobile game development, gameplay mechanics, UI systems, animations, Cinemachine, optimization. Also skilled in React.js, Next.js, Tailwind CSS, responsive UI, and API-based web apps.";

  const [showText, setShowText] = useState(false);

  const toogleHandler = () => {
    setShowText(!showText);
  };

  return (
    <>
      <div className=" bg-black w-full h-auto flex flex-col justify-center p-10">
        <h1 className=" text-white text-[18px] font-bold mb-5">
          SOFTWARE ENGINEERING
        </h1>
        <p className="  text-white text-[14px] mb-2">
          {showText ? text : text.slice(0, 270) + " ..."}
        </p>
        <div className=" flex justify-center ">
          <button
            onClick={toogleHandler}
            className="border-r-2 mt-8 text-white   border-l-2 px-8"
          >
            {showText ? "Show Less" : "Load More"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Discription;
