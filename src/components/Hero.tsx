import React, { useEffect, useState } from "react";
// import { useMutation } from "@tanstack/react-query";

import { UploadCloud } from "lucide-react";
// import axios from "axios";

// async function uploadFile(file: File) {
//   const endpoint = import.meta.env.SERVER_URL || "http://localhost:7777/";
//   const formData = new FormData();
//   formData.append("uploadedFile", file);
//   const response = await axios.post(endpoint, formData);

//   return response.data;
// }

function handleButtonClick() {
  document.getElementById("file-input")?.click();
}

export default function Hero() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isConverted, setIsConverted] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  //   const { mutate, isPending, data, error } =  useMutation(dd,uploadFile)

  const handleFileInput = (file: File) => {
    setFile(null);
    setIsProcessing(false);
    setMessage(null);
    setIsConverted(false);

    const validTypes = [
      "application/pdf",
      "image/jpeg",
      "image/jpg",
      "image/png",
    ];

    if (!validTypes.includes(file.type)) {
      setMessage("Please upload a PDF, JPG, or PNG file.");
      return;
    }
    setFile(file);
    setIsProcessing(true);
    setMessage(`${file.name}" is being processed`);

    // In a real app, you would handle the file upload and conversion here
    setTimeout(() => {
      setMessage(`${file.name}" finished processing`);
      setIsProcessing(false);
      setIsConverted(true);
    }, 2000);
  };

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;

    if (files && files[0]) {
      handleFileInput(files[0]);
    }
  }

  useEffect(() => {
    let dragCounter = 0;

    const handleDragEnter = (e: DragEvent) => {
      e.preventDefault();
      dragCounter++;
      if (dragCounter === 1) setIsDragging(true);
    };

    const handleDragOver = (e: DragEvent) => {
      e.preventDefault(); // Essential for enabling drop
    };

    const handleDragLeave = (e: DragEvent) => {
      e.preventDefault();
      dragCounter--;
      if (dragCounter === 0) setIsDragging(false);
    };

    const handleDrop = (e: DragEvent) => {
      e.preventDefault();
      dragCounter = 0;
      setIsDragging(false);
      if (e.dataTransfer?.files?.[0]) {
        handleFileInput(e.dataTransfer.files[0]);
      }
    };

    document.addEventListener("dragenter", handleDragEnter);
    document.addEventListener("dragover", handleDragOver);
    document.addEventListener("dragleave", handleDragLeave);
    document.addEventListener("drop", handleDrop);

    return () => {
      //removes the event listeners before the component unmounts (is removed from the DOM)
      document.removeEventListener("dragenter", handleDragEnter);
      document.removeEventListener("dragover", handleDragOver);
      document.removeEventListener("dragleave", handleDragLeave);
      document.removeEventListener("drop", handleDrop);
    };
  }, []);

  return (
    <section className="bg-tfwhite dark:bg-tfblack min-h-[85vh] pt-18 flex flex-col justify-start  gap-24">
      {/* Drag overlay */}
      {isDragging && (
        <div className="fixed z-50 inset-0 backdrop-blur-sm bg-tfblue/20  flex items-center justify-center ">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
            <UploadCloud className="w-16 h-16 mx-auto mb-4 text-tforange" />
            <h2 className="text-2xl font-bold text-[#2A3A6A] dark:text-white">
              Drop your file anywhere
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              We accept PDF, JPG, and PNG files
            </p>
          </div>
        </div>
      )}
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

      <div className="panel flex items-center justify-center rounded-3xl w-[85%] sm:w-[60%] mx-auto bg-gray-200  dark:bg-gray-800  border-3 border-gray-400  dark:border-gray-700  border-dashed py-6 ">
        <div className=" flex flex-col items-center justify-center px-6 ">
          <input
            type="file"
            id="file-input"
            className="hidden"
            onChange={handleFileChange}
          />
          <button
            disabled={isProcessing}
            onClick={handleButtonClick}
            className={`bg-tforange  md:text-xl text-white font-bold rounded-xl py-6 px-5 sm:px-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tforange transition-colors cursor-pointer hover:bg-orange-500
              `}
          >
            {isProcessing ? (
              <div className="flex items-center  flex-col ">
                <svg
                  className="animate-spin -ml-1 mr-2 w-6 h-6 md:w-9 md:h-9  text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span> Coverting...</span>
              </div>
            ) : (
              <div className="flex items-center  flex-col ">
                <UploadCloud className="w-6 h-6 md:w-9 md:h-9 inline"></UploadCloud>
                <span> Click here to convert a PDF!</span>
              </div>
            )}
          </button>
          {message && !isProcessing && !isConverted && (
            <p className="text-sm  md:text-lg mt-4 text-red-600 dark:text-red-400 font-semibold ">
              {message}
            </p>
          )}
          {message && isProcessing && file && (
            <p className="text-sm  md:text-lg mt-4 text-orange-600 font-semibold dark:text-orange-400">
              {message}
            </p>
          )}
          {message && isConverted && (
            <p className="text-sm  md:text-lg mt-4 text-green-600   font-semibold dark:text-green-400  ">
              {message}
            </p>
          )}
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
