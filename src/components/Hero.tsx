import  { useEffect, useState } from "react";

import { UploadCloud } from "lucide-react";
// const [isProcessing, setIsProcessing] = useState(false);

export default function Hero() {



  return (
    <section className="bg-tfwhite dark:bg-tfblack min-h-[85vh] pt-18 flex flex-col justify-start  gap-24">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
          Unlock Your Document's{" "}
          <span className="text-tforanged ">trueform</span>
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Convert scanned PDFs and handwritten notes into searchable, editable,
          compressed digital PDFs powered by OCR and AI.
        </p>
      </div>

      <div className="panel flex items-center justify-center rounded-3xl w-[85%] sm:w-[60%] mx-auto bg-gray-200  dark:bg-gray-800  border-3 border-gray-400  dark:border-gray-700  border-dashed py-6">
        <div className=" flex flex-col items-center justify-center px-6 ">
          <button
            className={`bg-tforange  md:text-xl text-white font-bold rounded-xl py-4 px-5 sm:px-10 flex items-center  flex-col focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tforange transition-colors
              `}
          >
            <UploadCloud className="w-6 h-6 md:w-9 md:h-9 inline"></UploadCloud>
            Click here to convert a PDF!
          </button>
          <p
            className="mt-4  text-sm md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto
           "
          >
            or drag & drop anywhere on this page
          </p>
        </div>
      </div>
    </section>
  );
}
