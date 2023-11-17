"use client";
// Initialization for ES Users
import {
  Input,
  Timepicker,
  initTE,
  Datepicker,
  Ripple,
  Sidenav,
  Dropdown,
  Modal,
  Carousel,
} from "tw-elements";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useContext, useEffect } from "react";
import { LogInContext } from "@/contexts/LogInContext";
const TwElementCom = () => {
  const { logInState }: any = useContext(LogInContext);
  const instanceMode = Sidenav.getInstance(
    document.getElementById("sidenav-2")
  );
  const modes = ["over", "push"];

  modes.forEach((mode) => {
    const modeSwitch = document.getElementById(mode);
    if (modeSwitch) {
      modeSwitch.addEventListener("click", () => {
        const instance = Sidenav.getInstance(
          document.getElementById("sidenav-2")
        );
        instance.changeMode(mode);
        modes.forEach((el) => {
          if (el === mode) {
            ["text-blue-600", "border-blue-600"].forEach((item) =>
              modeSwitch.classList.remove(item)
            );
            modeSwitch.className +=
              " bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-700 border-transparent";
          } else {
            const node = document.getElementById(el);
            if (node) {
              node.className += " text-blue-600 border-blue-600";
              [
                "bg-blue-600",
                "text-white",
                "hover:bg-blue-700",
                "active:bg-blue-800",
                "focus:bg-blue-700",
                "border-transparent",
              ].forEach((item) => node.classList.remove(item));
            }
          }
        });
      });
    }
  });

  const router = useRouter();
  const pathName = usePathname();
  useEffect(() => {
    initTE({
      Input,
      Timepicker,
      Datepicker,

      Ripple,
      Dropdown,

      // Modal,
      Carousel,
    });
  }, [router, Link]);

  useEffect(() => {
    initTE({
      Modal,
      Input,
      Sidenav,
    });
    console.log("1234");
  }, [pathName, logInState]);
  const init = () => {
    initTE({ Input });
  };

  return (
    <div className="hidden">
      <button type="button" id="initTw" onClick={init}>
        twelemtnt
      </button>
      <div className="relative" data-te-dropdown-ref>
        <button
          className="flex items-center whitespace-nowrap rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          type="button"
          id="dropdownMenuButton1"
          data-te-dropdown-toggle-ref
          aria-expanded="false"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Dropdown button
          <span className="ml-2 w-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>
        <ul
          className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
          aria-labelledby="dropdownMenuButton1"
          data-te-dropdown-menu-ref
        >
          <li>
            <a
              className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
              href="#"
              data-te-dropdown-item-ref
            >
              Action
            </a>
          </li>
          <li>
            <a
              className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
              href="#"
              data-te-dropdown-item-ref
            >
              Another action
            </a>
          </li>
          <li>
            <a
              className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
              href="#"
              data-te-dropdown-item-ref
            >
              Something else here
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TwElementCom;
