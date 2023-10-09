import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Activity -  Threads",
};

const PageActivity = () => {
  return (
    <section className="max-w-xl mx-auto pb-3 space-y-5 p-3">
      <div className="w-full flex flex-col gap-3">
        <div className="flex gap-3 items-start">
          <Image
            src="/user.jpg"
            width={40}
            height={40}
            alt="user"
            className="w-[40px] h-[40px] rounded-full"
          />
          <div className="flex-1 flex justify-between items-center pb-2 border-b border-slate-600">
            <div className="space-y-1">
              <h1>yanz20.ig</h1>
              <p className="text-sm text-slate-600">Followed you</p>
            </div>
            <div>
              <button className="px-3 py-1 text-sm border border-slate-600 rounded">
                Follow back
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageActivity;
