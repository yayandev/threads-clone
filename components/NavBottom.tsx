"use client";
import Link from "next/link";
import { GoHomeFill, GoSearch } from "react-icons/go";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { AiFillHeart } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useModalAddPost } from "@/context/modalContext";

const links = [
  {
    icon: <GoHomeFill />,
    href: "/",
  },
  {
    icon: <GoSearch />,
    href: "/search",
  },
  {
    icon: <HiOutlinePencilAlt />,
    href: "/post",
  },
  {
    icon: <AiFillHeart />,
    href: "/activity",
  },
  {
    icon: <FaUser />,
    href: "/profile",
  },
];

const NavBottom = () => {
  const pathname = usePathname();
  const { setOpen } = useModalAddPost();

  return (
    <nav className="w-full  fixed bottom-0 p-4 z-[999] bg-[rgb(16,16,16)] flex justify-between items-center md:hidden">
      {links.map((link: any, index: number) => {
        if (link.href === "/post")
          return (
            <button
              key={index}
              onClick={() => setOpen(true)}
              className={`text-2xl md:text-3xl md:py-3 md:px-5 p-2 rounded hover:bg-gray-600 ${
                pathname === link.href ? "text-white" : "text-slate-500"
              }`}
            >
              {link.icon}
            </button>
          );
        return (
          <Link
            key={index}
            href={link.href}
            className={`text-2xl md:text-3xl md:py-3 md:px-5 p-2 rounded hover:bg-gray-600 ${
              pathname === link.href ? "text-white" : "text-slate-500"
            }`}
          >
            {link.icon}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBottom;
