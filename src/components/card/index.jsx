import React from "react";
import { formatFileSize } from "../../utils/sizeFormatter";

function Card({ file, handleRemove, data }) {
  const downloadFile = () => {
    const link = data.data;
    window.open(link, "_blank");
  };
  return (
    <div key={file.lastModified} className="card card-side bg-white border">
      <button
        onClick={() => handleRemove(file.name)}
        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl text-secondary"
      >
        ✕
      </button>
      <figure className="w-64 h-auto border-r">
        <img
          src="https://th.bing.com/th/id/R.6a0bc62be6a107a200fe1ab5fabed4b8?rik=3U7STjKBPrW3PA&pid=ImgRaw&r=0"
          alt="document-icon"
          className="skeleton"
        />
      </figure>
      <div className="card-body">
        {/* Notice to the user */}
        <h2 className="card-title">File name: {file.name}</h2>
        {/* Describe the file extract for him a little bit */}
        <p>Type: {file.type}</p>
        <p>Size: {formatFileSize(file.size)}</p>
        <p>Click the download button to download it</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => {
              downloadFile();
            }}
            className="btn bg-primary text-white hover:bg-secondary"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
