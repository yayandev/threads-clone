"use client";
import PostsList from "@/components/PostsList";
import Spinner from "@/components/Spinner";
import { useModalAddPost } from "@/context/modalContext";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { setOpen } = useModalAddPost();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <section className="max-w-xl mx-auto pb-3 space-y-5 p-3 flex justify-center h-[50vh] items-center">
        <Spinner />
      </section>
    );
  }
  
  return (
    <>
      <section className="max-w-xl mx-auto pb-3 border-b border-slate-600 md:block hidden">
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <Image
              src={`/${session?.user?.image}`}
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
      <PostsList />
    </>
  );
}
