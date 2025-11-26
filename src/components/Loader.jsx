import React from "react";
import "../App.css";
const Loader = () => {
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center  bg-[#E5E5E5] z-50">
        {/* Loader CSS ke sath */}
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default Loader;
