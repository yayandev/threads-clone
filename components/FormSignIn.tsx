"use client";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { SyntheticEvent, useState } from "react";
import Link from "next/link";
import Spinner from "./Spinner";

const FormSignIn = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [Error, setError] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  const url = searchParams.get("callbackUrl");

  const callbackUrl = url || "/";

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const res: any = await signIn("credentials", {
      redirect: false,
      username: values.username,
      password: values.password,
    });

    if (!res?.error) {
      router.push(callbackUrl);
    } else {
      setError("Username atau password salah");
      setIsLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm w-full p-3 rounded space-y-3"
    >
      <h1 className="text-center font-bold text-sm">
        Log in to continue Threads
      </h1>
      {Error && (
        <p className={`font-semibold text-center text-sm text-red-500`}>
          {Error}
        </p>
      )}
      <input
        required
        onChange={(e) => setValues({ ...values, username: e.target.value })}
        value={values.username}
        type="text"
        placeholder="Username"
        className="focus:outline-none w-full p-3 rounded-xl bg-[#1e1e1e]"
      />
      <input
        onChange={(e) => setValues({ ...values, password: e.target.value })}
        value={values.password}
        required
        type="password"
        placeholder="Password"
        className="focus:outline-none w-full p-3 rounded-xl bg-[#1e1e1e]"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="p-3 rounded-xl w-full bg-white text-slate-600"
      >
        {isLoading ? <Spinner /> : "Log in"}
      </button>
      <p className="text-xs text-center">
        Dont have an account?{" "}
        <Link href="/sign-up" className="text-blue-600 text-sm">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default FormSignIn;
