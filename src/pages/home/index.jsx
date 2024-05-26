import { PlusIcon } from "lucide-react";
import React from "react";

function Home() {
  return (
    <section className="pt-3 flex flex-col gap-4">
      <header className="flex items-center justify-between w-full px-4 pt-2 pl-10">
        <div>
          <h1 className="text-xl text-text-900 font-bold">Home</h1>
        </div>
        <div className="btn bg-white drop-shadow-md rounded-full hover:bg-transparent border-none px-6">
          <p>Upload File</p>
          <PlusIcon className="text-primary-500" />
        </div>
      </header>
      <section className="bg-slate-300 p-5 mt-6 mx-10 max-w-5xl">
        {/* Cards */}
      </section>
    </section>
  );
}

export default Home;
