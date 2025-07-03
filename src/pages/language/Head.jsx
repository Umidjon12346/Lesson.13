import React, { useState } from "react";
import { texts } from "../../../lang_text";
import PageOne from "./First";
import PageTwo from "./Second";
import { ThemeContext } from "../../components/ContextApi";

const Head = () => {
  console.log("hello");
  const [lang, setLang] = useState("en");

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "uz" : "en"));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        {texts[lang].pagehead}
      </h1>

      <div className="flex justify-center mb-8">
        <button
          onClick={toggleLang}
          className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition"
        >
          {lang === "en" ? "UZB" : "ENG"}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <PageOne theme={ThemeContext} lang={lang} texts={texts} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <PageTwo theme={ThemeContext} lang={lang} texts={texts} />
        </div>
      </div>
    </div>
  );
};

export default Head;
