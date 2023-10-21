"use client";
import { DataThreadsProvider } from "@/context/DataThreads";
import { SessionProvider } from "next-auth/react";
import React from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <DataThreadsProvider>{children}</DataThreadsProvider>
    </SessionProvider>
  );
};

export default Providers;
