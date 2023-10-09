import Media from "@/components/Media";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Profile - Threads",
};

import { BsInstagram } from "react-icons/bs";
const PageProfile = () => {
  return (
    <section className="max-w-xl mx-auto pb-3 space-y-5 p-3">
      <div className="flex w-full justify-between items-center">
        <div className="space-y-1">
          <h1 className="font-bold text-xl">Yayan Faturrohman</h1>
          <h3 className="text-sm">yanz20.ig</h3>
        </div>
        <Image
          width={80}
          height={80}
          alt="user"
          src="/user.jpg"
          className="w-[80px] h-[80px] rounded-full"
        />
      </div>
      <div className="w-full text-sm">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, sequi.
        </p>
      </div>
      <div className="w-full flex justify-between px-5">
        <button className="text-sm text-slate-600">100 followers</button>
        <button className="text-2xl">
          <BsInstagram />
        </button>
      </div>
      <Media />
    </section>
  );
};

export default PageProfile;
