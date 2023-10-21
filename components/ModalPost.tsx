"use client";
import Image from "next/image";
import { Fragment, SyntheticEvent, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useModalAddPost } from "@/context/modalContext";
import { BsTrash } from "react-icons/bs";
import Spinner from "./Spinner";
import { useDataThreads } from "@/context/DataThreads";
import axios from "axios";

const ModalPost = () => {
  const { mutate } = useDataThreads();
  const { open, setOpen } = useModalAddPost();
  const [msg, setMsg] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [imagePriview, setImagePriview] = useState("");

  const [values, setValues] = useState({
    description: "",
    file: "",
  });

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setValues({ ...values, file: file });
    setImagePriview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    let formdata = new FormData();
    formdata.append("description", values.description);

    if (values.file) {
      formdata.append("file", values.file);
    }

    const res = await axios.post("/api/threads", formdata);

    const data = res.data;

    if (data.success) {
      mutate();
      setMsg(data.message);
      setValues({
        description: "",
        file: "",
      });
      setImagePriview("");
    } else {
      setError(true);
      setMsg(data.message);
    }

    console.log(data);
    setIsLoading(false);
    setOpen(false);
  };

  const cancelButtonRef = useRef(null);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative  z-[9999]"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-[9999] w-screen overflow-y-auto sm:mb-0 mb-40">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg  text-left shadow-xl transition-all sm:my-8 w-full sm:w-full sm:max-w-lg ">
                <form onSubmit={handleSubmit}>
                  <h1 className="text-center font-bold text-white my-2">
                    New thread
                  </h1>
                  <div className="bg-[#181818] px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <Image
                        src="/user.jpg"
                        width={40}
                        height={40}
                        className="w-[40px] h-[40px] rounded-full"
                        alt="user"
                      />
                      <div className="mt-3 w-full text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className=" text-sm font-semibold leading-6 text-white"
                        >
                          yanz20.ig
                        </Dialog.Title>
                        <div className="mt-2 w-full space-y-3">
                          <input
                            className="w-full border-none bg-transparent focus:outline-none overflow-y-auto text-sm"
                            autoFocus
                            placeholder="Start a thread"
                            type="text"
                            value={values.description}
                            onChange={(e) =>
                              setValues({
                                ...values,
                                description: e.target.value,
                              })
                            }
                            required
                          />

                          {imagePriview ? (
                            <div className="w-full my-2 space-y-2">
                              <button className="p-2 bg-red-500 ">
                                <BsTrash />
                              </button>
                              <img
                                src={`${imagePriview}`}
                                alt=""
                                className="w-full"
                              />
                            </div>
                          ) : (
                            <div>
                              <label htmlFor="image" className="cursor-pointer">
                                <svg
                                  aria-label="Attach media"
                                  className="x1lliihq x1n2onr6"
                                  color="rgb(119, 119, 119)"
                                  fill="rgb(119, 119, 119)"
                                  height="20"
                                  role="img"
                                  viewBox="0 0 24 24"
                                  width="20"
                                >
                                  <title>Attach media</title>
                                  <g>
                                    <path
                                      clipRule="evenodd"
                                      d="M2.00207 9.4959C1.65132 7.00019 1.47595 5.75234 1.82768 4.73084C2.13707 3.83231 2.72297 3.05479 3.50142 2.50971C4.38639 1.89005 5.63425 1.71467 8.12996 1.36392L10.7047 1.00207C13.2004 0.651325 14.4482 0.47595 15.4697 0.827679C16.3682 1.13707 17.1458 1.72297 17.6908 2.50142C17.9171 2.82454 18.0841 3.19605 18.2221 3.65901C17.7476 3.64611 17.2197 3.64192 16.6269 3.64055C16.5775 3.5411 16.5231 3.44881 16.4621 3.36178C16.0987 2.84282 15.5804 2.45222 14.9814 2.24596C14.3004 2.01147 13.4685 2.12839 11.8047 2.36222L7.44748 2.97458C5.78367 3.20841 4.95177 3.32533 4.36178 3.73844C3.84282 4.10182 3.45222 4.62017 3.24596 5.21919C3.01147 5.90019 3.12839 6.73209 3.36222 8.3959L3.97458 12.7531C4.15588 14.0431 4.26689 14.833 4.50015 15.3978C4.50083 16.3151 4.50509 17.0849 4.53201 17.7448C4.13891 17.4561 3.79293 17.1036 3.50971 16.6991C2.89005 15.8142 2.71467 14.5663 2.36392 12.0706L2.00207 9.4959Z"
                                      fill="currentColor"
                                      fillRule="evenodd"
                                    ></path>
                                    <g id="Frame 290280">
                                      <g clipPath="url(#clip0_16905_4767)">
                                        <rect
                                          fill="none"
                                          height="15.5"
                                          rx="3.75"
                                          stroke="currentColor"
                                          strokeWidth="1.5"
                                          width="15.5"
                                          x="6.75"
                                          y="5.8894"
                                        ></rect>
                                        <path
                                          d="M6.6546 17.8894L8.59043 15.9536C9.1583 15.3857 10.0727 15.3658 10.6647 15.9085L12.5062 17.5966C12.9009 17.9584 13.5105 17.9451 13.8891 17.5665L17.8181 13.6376C18.4038 13.0518 19.3536 13.0518 19.9394 13.6375L22.0663 15.7644"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeLinejoin="round"
                                          strokeWidth="1.5"
                                        ></path>
                                        <circle
                                          cx="10.75"
                                          cy="9.8894"
                                          fill="currentColor"
                                          r="1.25"
                                        ></circle>
                                      </g>
                                    </g>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_16905_4767">
                                      <rect
                                        fill="white"
                                        height="17"
                                        rx="4.5"
                                        width="17"
                                        x="6"
                                        y="5.1394"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                              </label>
                              <input
                                type="file"
                                onChange={handleFileChange}
                                value={values.file}
                                className="hidden"
                                accept="image/*"
                                id="image"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#181818] px-4 py-3 flex gap-3 justify-end">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="disabled:opacity-75 py-2 px-3 rounded border border-slate-600 text-white"
                    >
                      {isLoading ? <Spinner /> : "Posts"}
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ModalPost;
