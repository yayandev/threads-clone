"use client";
import { useModalAddPost } from "@/context/modalContext";
import Image from "next/image";

export default function Home() {
  const { setOpen } = useModalAddPost();
  return (
    <>
      <section className="max-w-xl mx-auto pb-3 border-b border-slate-600 md:block hidden">
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <Image
              src="/user.jpg"
              width={40}
              height={40}
              className="w-[40px] h-[40px] rounded-full"
              alt="user"
            />
            <p className="text-sm text-slate-600" onClick={() => setOpen(true)}>
              Start a thread...
            </p>
          </div>
          <button
            disabled
            className="p-2 px-3 cursor-not-allowed text-sm rounded border text-slate-600 border-slate-600"
          >
            Post
          </button>
        </div>
      </section>
    </>
  );
}
