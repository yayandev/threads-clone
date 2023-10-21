import Suggestion from "@/components/Suggestion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search - Threads",
};

import { BsSearch } from "react-icons/bs";

const PageSearch = () => {
  return (
    <section className="max-w-xl mx-auto pb-3 space-y-5 p-3">
      <div className="flex w-full items-center gap-2 p-4 rounded-xl bg-[rgb(10,10,10)] border border-slate-600 text-slate-600 ">
        <button>
          <BsSearch />
        </button>
        <input
          type="text"
          autoFocus
          className="flex-1 bg-transparent focus:outline-none text-sm text-white"
          placeholder="Search"
        />
      </div>
      <Suggestion />
    </section>
  );
};

export default PageSearch;
