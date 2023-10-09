"use client";
import { useState, SyntheticEvent } from "react";
import Link from "next/link";
import axios from "axios";
import Spinner from "./Spinner";

const FormSignUp = () => {
  const [values, setValues] = useState({
    name: "",
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [notif, setNotif] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await axios.post("/api/sign-up", {
      name: values.name,
      username: values.username,
      password: values.password,
    });

    if (res.data.success) {
      setMessage(res.data.message);
      setNotif("success");
      setValues({
        name: "",
        username: "",
        password: "",
      });
    } else {
      setMessage(res.data.message);
      setNotif("error");
    }
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm w-full p-3 rounded space-y-3"
    >
      <h1 className="text-center font-bold text-sm">
        Sign up to continue Threads
      </h1>
      {message && (
        <p
          className={`font-semibold text-center text-sm ${
            notif === "success" ? "text-green-500" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}
      <input
        required
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        type="text"
        placeholder="Full Name"
        className="focus:outline-none w-full p-3 rounded-xl bg-[#1e1e1e]"
      />
      <input
        required
        value={values.username}
        onChange={(e) => setValues({ ...values, username: e.target.value })}
        type="text"
        placeholder="Username"
        className="focus:outline-none w-full p-3 rounded-xl bg-[#1e1e1e]"
      />
      <input
        required
        value={values.password}
        onChange={(e) => setValues({ ...values, password: e.target.value })}
        type="password"
        placeholder="Password"
        className="focus:outline-none w-full p-3 rounded-xl bg-[#1e1e1e]"
      />
      <button
        disabled={isLoading}
        type="submit"
        className="disabled:opacity-80 p-3 rounded-xl w-full bg-white text-slate-600"
      >
        {isLoading ? <Spinner /> : "Sign up"}
      </button>
      <p className="text-xs text-center">
        Have an account?{" "}
        <Link href="/sign-in" className="text-blue-600 text-sm">
          Sign in
        </Link>
      </p>
    </form>
  );
};

export default FormSignUp;
