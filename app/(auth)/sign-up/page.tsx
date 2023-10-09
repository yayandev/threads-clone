import FormSignUp from "@/components/FormSignUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In - Threads",
};

const PageSignUp = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <FormSignUp />
    </section>
  );
};

export default PageSignUp;
