"use client";
import { fetcher } from "@/utils/swr";
import { useContext, createContext, useState } from "react";
import useSWR from "swr";

export const DataThreadsContext = createContext({
  data: null,
  mutate: () => {},
  error: null,
  isLoading: false,
});

export const useDataThreads = () => useContext(DataThreadsContext);

export const DataThreadsProvider = ({ children }: any) => {
  const { data, error, isLoading, mutate } = useSWR("/api/threads", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return (
    <DataThreadsContext.Provider value={{ data, mutate, error, isLoading }}>
      {children}
    </DataThreadsContext.Provider>
  );
};
