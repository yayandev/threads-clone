"use client";
import Image from "next/image";
import Link from "next/link";
import { GoHomeFill, GoSearch } from "react-icons/go";
import { CgDetailsMore } from "react-icons/cg";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { AiFillHeart } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { usePathname } from "next/navigation";

function MenuSide() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="hover:text-white text-slate-600 font-bold text-2xl md:text-3xl md:py-3 md:px-5 p-2 rounded ">
          <CgDetailsMore />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-slate-700 shadow-lg focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              <a
                href="#"
                className={
                  "block w-full px-4 py-2 text-left text-sm text-white"
                }
              >
                Account settings
              </a>
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                <button
                  type="submit"
                  className={
                    "block w-full px-4 py-2 text-left text-sm text-white"
                  }
                >
                  Sign out
                </button>
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

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

const NavTop = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 p-4 z-[999] backdrop-blur w-full flex justify-between items-center">
      <div className="md:hidden block"></div>
      <Link href={"/"}>
        <Image src={"/logo-threads.png"} width={40} height={40} alt="Logo" />
      </Link>
      <div className="md:flex hidden gap-10 items-center  font-bold">
        {links.map((link: any, index: number) => (
          <Link
            key={index}
            href={link.href}
            className={`text-2xl md:text-3xl md:py-3 md:px-5 p-2 rounded hover:bg-gray-600 ${
              pathname === link.href ? "text-white" : "text-slate-500"
            }`}
          >
            {link.icon}
          </Link>
        ))}
      </div>
      <MenuSide />
    </nav>
  );
};

export default NavTop;
