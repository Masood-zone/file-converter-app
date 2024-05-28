import React from "react";
import { useFileContext } from "../../context";
import toast from "react-hot-toast";
import { useState } from "react";
import axios from "axios";
import Loader from "../loader";
import { API_KEY, BASE_URL } from "../../utils/root";

function Modal() {
  const [currentFile, setCurrentFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const { addFile, setResponse } = useFileContext();
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCurrentFile(file);
  };
  const handleSubmit = async () => {
    if (!currentFile) {
      return toast.error("Please select a file");
    }
    const formData = new FormData();
    formData.append("file", currentFile);
    setLoading(true);
    try {
      const response = await axios.post(
        `${BASE_URL}/convert/word-file/pdf-file`,
        formData,
        {
          headers: {
            "apy-token": API_KEY,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      addFile(currentFile, response.data);
      setLoading(false);
      setResponse(response.data);
      return response.data;
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box w-full h-auto">
        <h3 className="font-bold text-2xl">Upload file</h3>
        <p className="py-4">
          FireCracker let's you upload DOC, DOCX,and ODF documents into PDF
        </p>
        <form method="dialog" className="">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl text-secondary">
            ✕
          </button>
          <div className="w-full my-5">
            {/* md */}
            <input
              type="file"
              onChange={handleFileChange}
              className="file-input file-input-bordered file-input-md w-full max-w-full"
            />
          </div>
          {loading ? (
            <Loader isLoading={loading} />
          ) : (
            <button
              className="btn w-full px-5 text-lg bg-secondary text-white hover:bg-accent"
              onClick={() => handleSubmit()}
            >
              Upload
            </button>
          )}
        </form>
      </div>
    </dialog>
  );
}

export default Modal;
