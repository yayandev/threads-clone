import { Metadata } from "next";
import Image from "next/image";

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
          className="flex-1 bg-transparent focus:outline-none text-sm text-white"
          placeholder="Search"
        />
      </div>
      <div className="flex flex-col gap-3 ">
        <div className="flex justify-between gap-3">
          <Image
            src="/user.jpg"
            width={40}
            height={40}
            alt="user"
            className="w-[40px] h-[40px] rounded-full"
          />
          <div className="flex-1 space-y-1 border-b pb-3 border-slate-600">
            <div className="flex justify-between">
              <h1 className="font-semibold">yanz20.ig</h1>
              <button className="py-1 px-5  text-sm rounded-lg border border-slate-600">
                Follow
              </button>
            </div>
            <p className="text-sm">98 followers</p>
          </div>
        </div>
        <div className="flex justify-between gap-3">
          <Image
            src="/user.jpg"
            width={40}
            height={40}
            alt="user"
            className="w-[40px] h-[40px] rounded-full"
          />
          <div className="flex-1 space-y-1 border-b pb-3 border-slate-600">
            <div className="flex justify-between">
              <h1 className="font-semibold">yanz20.ig</h1>
              <button className="py-1 px-5  text-sm rounded-lg border border-slate-600">
                Follow
              </button>
            </div>
            <p className="text-sm">98 followers</p>
          </div>
        </div>
        <div className="flex justify-between gap-3">
          <Image
            src="/user.jpg"
            width={40}
            height={40}
            alt="user"
            className="w-[40px] h-[40px] rounded-full"
          />
          <div className="flex-1 space-y-1 border-b pb-3 border-slate-600">
            <div className="flex justify-between">
              <h1 className="font-semibold">yanz20.ig</h1>
              <button className="py-1 px-5  text-sm rounded-lg border border-slate-600">
                Follow
              </button>
            </div>
            <p className="text-sm">98 followers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageSearch;
