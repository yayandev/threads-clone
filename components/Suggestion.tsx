"use client";
import { fetcher } from "@/utils/swr";
import Image from "next/image";
import useSWR from "swr";
import Spinner from "./Spinner";
import Link from "next/link";
import { useSession } from "next-auth/react";
const Suggestion = () => {
  const { data: session, status }: any = useSession();
  const id = session?.user?.id;

  const { data, error, isLoading } = useSWR(`/api/suggestion/${id}`, fetcher, {
    revalidateOnFocus: false,
  });

  if (error) {
    return (
      <section className="max-w-xl mx-auto pb-3 space-y-5 p-3 flex justify-center h-[50vh] items-center">
        <h1>Something went wrong</h1>
      </section>
    );
  }

  if (isLoading || status === "loading") {
    return (
      <section className="max-w-xl mx-auto pb-3 space-y-5 p-3 flex justify-center h-[50vh] items-center">
        <Spinner />
      </section>
    );
  }

  return (
    <div className="flex flex-col gap-3 ">
      {data?.data?.map((user: any) => {
        return (
          <div key={user?.id} className="flex justify-between gap-3">
            <Link href={`/${user?.username}`}>
              <Image
                src={user?.image}
                width={40}
                height={40}
                alt="user"
                className="w-[40px] h-[40px] rounded-full"
              />
            </Link>
            <div className="flex-1 space-y-1 border-b pb-3 border-slate-600">
              <div className="flex justify-between">
                <Link href={`/${user?.username}`}>
                  <h1 className="font-semibold">{user?.username}</h1>
                </Link>
                <button className="py-1 px-5  text-sm rounded-lg border border-slate-600">
                  Follow
                </button>
              </div>
              <p className="text-sm">{user?._count?.followers} followers</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Suggestion;
