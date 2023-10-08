import Image from "next/image";
import { BsChat, BsDot, BsHeart, BsSend, BsThreeDots } from "react-icons/bs";
const PostsList = () => {
  return (
    <section className="max-w-xl mx-auto mt-3 mb-10">
      <div className="w-full flex flex-col gap-3">
        <div className="w-full space-y-4 p-3">
          <div className="w-full flex justify-between">
            <div className="flex gap-3">
              <Image
                src="/user.jpg"
                width={40}
                height={40}
                alt="user"
                className="w-[40px] h-[40px] rounded-full"
              />
              <h1 className="text-sm font-semibold">yanz20.ig</h1>
            </div>
            <div className="flex gap-3 items-start">
              <p className="text-xs">10h</p>
              <button className="font-bold text-xl">
                <BsThreeDots />
              </button>
            </div>
          </div>
          <div className="w-full">
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, eos?
            </p>
          </div>
          <div className="ml-2 p-3 border-l border-slate-600">
            <Image
              src={"/post.jpg"}
              width={400}
              height={400}
              alt="post"
              className="max-w-full"
            />
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
        <div className="w-full space-y-4 p-3">
          <div className="w-full flex justify-between">
            <div className="flex gap-3">
              <Image
                src="/user.jpg"
                width={40}
                height={40}
                alt="user"
                className="w-[40px] h-[40px] rounded-full"
              />
              <h1 className="text-sm font-semibold">yanz20.ig</h1>
            </div>
            <div className="flex gap-3 items-start">
              <p className="text-xs">10h</p>
              <button className="font-bold text-xl">
                <BsThreeDots />
              </button>
            </div>
          </div>
          <div className="w-full">
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, eos?
            </p>
          </div>
          <div className="ml-2 p-3 border-l border-slate-600">
            <Image
              src={"/post.jpg"}
              width={400}
              height={400}
              alt="post"
              className="max-w-full"
            />
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
        <div className="w-full space-y-4 p-3">
          <div className="w-full flex justify-between">
            <div className="flex gap-3">
              <Image
                src="/user.jpg"
                width={40}
                height={40}
                alt="user"
                className="w-[40px] h-[40px] rounded-full"
              />
              <h1 className="text-sm font-semibold">yanz20.ig</h1>
            </div>
            <div className="flex gap-3 items-start">
              <p className="text-xs">10h</p>
              <button className="font-bold text-xl">
                <BsThreeDots />
              </button>
            </div>
          </div>
          <div className="w-full">
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, eos?
            </p>
          </div>
          <div className="ml-2 p-3 border-l border-slate-600">
            <Image
              src={"/post.jpg"}
              width={400}
              height={400}
              alt="post"
              className="max-w-full"
            />
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
      </div>
    </section>
  );
};

export default PostsList;
