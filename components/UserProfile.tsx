"use client";
import Image from "next/image";
import Media from "@/components/Media";
import { BsInstagram } from "react-icons/bs";
import Spinner from "./Spinner";
import useSWR from "swr";
import { fetcher } from "@/utils/swr";
import { useSession } from "next-auth/react";

const UserProfile = ({ username }: { username: string }) => {
  const { data: session, status } = useSession();
  const me = session?.user;

  const { data, error, isLoading } = useSWR(`/api/users/${username}`, fetcher);

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

  const user = data?.data;

  if (!user) {
    return (
      <section className="max-w-xl mx-auto pb-3 space-y-5 p-3 flex justify-center h-[50vh] items-center">
        <h1>USER NOT FOUND!</h1>
      </section>
    );
  }

  return (
    <section className="max-w-xl mx-auto pb-3 space-y-5 p-3">
      <div className="flex w-full justify-between items-center">
        <div className="space-y-1">
          <h1 className="font-bold text-xl">{user?.name}</h1>
          <h3 className="text-sm">{user?.username}</h3>
        </div>
        <Image
          width={80}
          height={80}
          alt="user"
          src={`${user?.image}`}
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

export default UserProfile;
