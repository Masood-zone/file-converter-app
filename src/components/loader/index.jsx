import React from "react";

function Loader({ isLoading }) {
  return isLoading ? (
    <button className="flex items-center gap-4 mx-auto" disabled>
      <div className="loader"></div>
      <span>Loading...</span>
    </button>
  ) : (
    ""
  );
}

export default Loader;
