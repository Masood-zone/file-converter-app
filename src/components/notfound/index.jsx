import React from "react";

function NoFilesNotice() {
  return (
    <aside className="flex flex-col items-center justify-center gap-4 w-full h-auto p-5 rounded-xl bg-primary shadow-xl">
      <h1 className="text-7xl max-md:text-3xl py-4 text-black font-bold">
        There are no files here...
      </h1>
      <p className="text-xl text-black py-2">
        Click the upload button to upload a file
      </p>
      <button
        className="text-black flex items-center justify-between gap-2 btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Upload File +
      </button>
    </aside>
  );
}

export default NoFilesNotice;
