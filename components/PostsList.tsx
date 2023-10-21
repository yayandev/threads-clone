"use client";
import Image from "next/image";
import { BsChat, BsDot, BsHeart, BsSend, BsThreeDots } from "react-icons/bs";
import Spinner from "./Spinner";
import { formatRelativeTime } from "@/helpers/formatRelativeTime";
import { useDataThreads } from "@/context/DataThreads";
const PostsList = () => {
  const { data, error, isLoading }: any = useDataThreads();

  if (isLoading) {
    return (
      <div className="w-full flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full flex justify-center my-5">
        <h1 className="text-xl">Terjadi kesalahan!</h1>
      </div>
    );
  }

  return (
    <section className="max-w-xl mx-auto mt-3 mb-10">
      <div className="w-full flex flex-col gap-3">
        {data?.data?.map((item: any, index: number) => {
          let createdAt = new Date(item.createdAt);
          let createdAgo = formatRelativeTime(createdAt);

          return (
            <div className="w-full space-y-4 p-3" key={index}>
              <div className="w-full flex justify-between">
                <div className="flex gap-3">
                  <Image
                    src={item.author.image}
                    width={40}
                    height={40}
                    alt="user"
                    className="w-[40px] h-[40px] rounded-full"
                  />
                  <h1 className="text-sm font-semibold">
                    {item.author.username}
                  </h1>
                </div>
                <div className="flex gap-3 items-start">
                  <p className="text-xs">{createdAgo}</p>
                  <button className="font-bold text-xl">
                    <BsThreeDots />
                  </button>
                </div>
              </div>
              <div className="ml-2 p-3 border-l border-slate-600 space-y-2">
                <div className="w-full">
                  <p className="text-xs">{item.description}</p>
                </div>
                {item.images && (
                  <Image
                    src={`${item.images}`}
                    width={400}
                    height={400}
                    alt="post"
                    className="max-w-full"
                  />
                )}
              </div>
              <div className="flex justify-start gap-3 text-lg items-center">
                <button>
                  <BsHeart />
                </button>
                <button>
                  <BsChat />
                </button>
                <button>
                  <BsSend />
                </button>
              </div>
              <div className="flex gap-3 items-center text-sm text-slate-500">
                <button>10 replies</button>
                <span>
                  <BsDot />
                </span>
                <button>10 likes</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PostsList;
