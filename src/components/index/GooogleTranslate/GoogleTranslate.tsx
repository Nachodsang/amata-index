"use client";

import { setCookie } from "cookies-next";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function GoogleTranslate() {
  const [counter, setCounter] = useState(0);
  const router = useRouter();
  const pathName = usePathname();

  let count = 0;
  let g_gTranslateIsAdded = false;
  const googleTranslateElementInit = () => {
    if (!g_gTranslateIsAdded) {
      g_gTranslateIsAdded = true;

      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "auto",

          // autoDisplay: false,
          includedLanguages:
            "ja,en,ar,zh-CN,zh-TW,fr,de,hi,id,it,ko,lo,ms,pt,pa,ru,es,ta,vi,da,sv,no",
          layout: (window as any).google.translate.TranslateElement.InlineLayout
            .SIMPLE,
        },
        "google_translate_element"
      );
    }
  };

  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit&hl=en"
    );
    document.body.appendChild(addScript);

    (window as any).googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  return (
    <div className="">
      <div
        className=" z-20  w-full skiptranslate"
        id="google_translate_element"
      ></div>
    </div>
    // <div className="absolute bottom-[-20px] tablet1:top-0 right-0 ">
    //   <div className=" z-20  w-full" id="google_translate_element"></div>
    // </div>
  );
}
