// Unlock Your Documents
// Instantly transform any scanned PDF into a fully searchable, editable, and lightweight file.

// Remake your scanned document in its trueform
// Convert scanned PDFs and handwritten notes into searchable, editable, compressed digital PDFs — powered by OCR and AI.

//     Everything You Need, Nothing You Don't
// TrueForm PDF is packed with powerful features to make your documents better.

// Smart Conversion
// Our AI-powered engine intelligently recognizes text, layouts, and tables for perfect conversions every time.
// Full-Text Searchability
// Go beyond images. Our OCR makes every word in your document searchable, saving you hours of manual searching.
// Optimized Compression
// Get the smallest possible file size without sacrificing quality, making your documents easy to store and share.
// Handwritten Note Support
// Even your handwritten notes are captured and made searchable. Never lose a brilliant idea again.

import { UploadCloud } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-tfwhite dark:bg-tfblack min-h-[85vh] pt-18 flex flex-col justify-start  gap-24">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
          Unlock Your Document's{" "}
          <span className="text-tforange ">trueform</span>
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Convert scanned PDFs and handwritten notes into searchable, editable,
          compressed digital PDFs powered by OCR and AI.
        </p>
      </div>

      <div className="panel flex items-center justify-center rounded-3xl w-[85%] sm:w-[60%] mx-auto bg-gray-200  dark:bg-gray-800  border-3 border-gray-400  dark:border-gray-700  border-dashed py-6">
        <div className=" flex flex-col items-center justify-center px-6 ">
          <button className="bg-tforange  md:text-xl text-white font-bold rounded-xl py-4 px-5 sm:px-10 flex items-center  flex-col">
            <UploadCloud className="w-6 h-6 md:w-9 md:h-9 inline"></UploadCloud>
            Click here to convert a PDF!
          </button>
                  <p className="mt-4  text-sm md:text-lg text-gray-700 max-w-3xl mx-auto
          text-tfblack dark:text-tfwhite">
            or drag & drop anywhere on this page
          </p>
        </div>
      </div>
    </section>
  );
}
