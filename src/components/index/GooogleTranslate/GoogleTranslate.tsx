"use client";
import { useEffect } from "react";

export default function GoogleTranslate() {
  const googleTranslateElementInit = () => {
    new (window as any).google.translate.TranslateElement(
      {
        pageLanguage: "th",
        autoDisplay: false,
        includedLanguages: "th,en",
        layout: (window as any).google.translate.TranslateElement.InlineLayout
          .SIMPLE,
      },
      "google_translate_element"
    );
  };

  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    (window as any).googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  return (
    <div className="absolute top-0 right-0 ">
      <div className=" z-20  w-full" id="google_translate_element"></div>
    </div>
  );
}
