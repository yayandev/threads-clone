"use client";

import { useState } from "react";

const Media = () => {
  const [tabs, setTabs] = useState("threads");
  return (
    <div className="w-full space-y-3">
      <div className="w-full flex text-sm md:text-lg">
        <button
          onClick={() => setTabs("threads")}
          className={`flex-1 border-b py-3 ${
            tabs === "threads"
              ? "text-white border-white"
              : "text-slate-600 border-slate-600"
          }`}
        >
          Threads
        </button>
        <button
          onClick={() => setTabs("replies")}
          className={`flex-1 border-b py-3 ${
            tabs === "replies"
              ? "text-white border-white"
              : "text-slate-600 border-slate-600"
          }`}
        >
          Replies
        </button>
        <button
          onClick={() => setTabs("reposts")}
          className={`flex-1 border-b py-3 ${
            tabs === "reposts"
              ? "text-white border-white"
              : "text-slate-600 border-slate-600"
          }`}
        >
          Reposts
        </button>
      </div>
      <div className="w-full">
        {tabs === "threads" ? (
          <div className="w-full">
            <h1 className="text-center">No threads</h1>
          </div>
        ) : tabs === "replies" ? (
          <div className="w-full">
            <h1 className="text-center">No replies</h1>
          </div>
        ) : (
          <div className="w-full">
            <h1 className="text-center">No reposts</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Media;
