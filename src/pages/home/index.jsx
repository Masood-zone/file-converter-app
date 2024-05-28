import { PlusIcon } from "lucide-react";
import React from "react";
import Modal from "../../components/modal";
import { useFileContext } from "../../context";
import NoFilesNotice from "../../components/notfound";
import Card from "../../components/card";

function Home() {
  const { file, removeFile } = useFileContext();
  console.log(file);
  return (
    <section className="pt-3 flex flex-col gap-4 px-10">
      <header className="flex items-center justify-start w-full pt-2">
        <div className="text-left flex-1">
          <h1 className="text-2xl text-black font-bold">Home</h1>
        </div>
        {/* Modal button and component */}
        <div className="btn bg-white drop-shadow-xl  rounded-full hover:bg-transparent border-none px-6">
          <button
            className="text-secondary flex items-center justify-between gap-2"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Upload File
            <PlusIcon className="text-primary" />
          </button>
        </div>
        <Modal />
      </header>
      <section className="p-5 mt-6 w-full flex flex-col gap-5">
        {/* Check if there are files */}
        {file.length === 0 ? (
          <div>
            <NoFilesNotice />
          </div>
        ) : (
          // Render the files
          file.map((file) => (
            <Card
              key={file.file.name}
              data={file.response}
              file={file.file}
              handleRemove={removeFile}
            />
          ))
        )}
      </section>
    </section>
  );
}

export default Home;
