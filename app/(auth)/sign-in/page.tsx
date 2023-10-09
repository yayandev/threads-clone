import FormSignIn from "@/components/FormSignIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In - Threads",
};

const PageSignIn = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <FormSignIn />
    </section>
  );
};

export default PageSignIn;
