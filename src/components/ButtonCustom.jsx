import React from "react";

const ButtonCustom = ({ title, onClicks }) => {
  return (
    <>
      <div className="  flex justify-center items-center ">
        <button
          onClick={onClicks}
          className="border-r-2 mt-8  border-l-2 px-12 "
        >
          {title}
        </button>
      </div>
    </>
  );
};

export default ButtonCustom;
