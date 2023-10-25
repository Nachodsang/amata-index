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
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const TwElementCom = () => {
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
  useEffect(() => {
    initTE({
      Input,
      Timepicker,
      Datepicker,
      Ripple,
      Sidenav,
      Dropdown,
      Modal,
      Carousel,
    });
  }, [router.pathname]);
  const init = () => {
    initTE({ Input });
  };

  return (
    <div className="hidden">
      <button type="button" id="initTw" onClick={init}>
        twelemtnt
      </button>
    </div>
  );
};

export default TwElementCom;
