import React, { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { uploadFile } from "../api";

import { UploadCloud } from "lucide-react";

function handleButtonClick() {
  document.getElementById("file-input")?.click();
}

export default function Hero() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
// make the response a link in a seperate component on the left side or above the pane to download the pdf file when you click it show the pdf file in a new tab
  const { mutate, isPending, isSuccess, isError, error } = useMutation({
    mutationFn: uploadFile,
    onSuccess: (data) => {
      console.log("Upload successful:", data);
    },
    onError: (error) => {
      console.error("Upload error:", error);
    },
  });

  const handleFileInput = (selectedFile: File): void => {
    const validTypes = [
      "application/pdf",
      "image/jpeg",
      "image/jpg",
      "image/png",
    ];

    if (!validTypes.includes(selectedFile.type)) {
      alert("Please upload a PDF, JPG, or PNG file."); // Using alert for simplicity
      return;
    }
    setFile(selectedFile);
    mutate(selectedFile);
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
      if (dragCounter === 0) setIsDragging(false);
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
    <section className="bg-tfwhite dark:bg-tfblack flex min-h-[85vh] flex-col justify-start gap-24 pt-18">
      {/* Drag overlay */}
      {isDragging && (
        <div className="bg-tfblue/20 fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
          <div className="rounded-lg bg-white p-8 text-center shadow-lg dark:bg-gray-800">
            <UploadCloud className="text-tforange mx-auto mb-4 h-16 w-16" />
            <h2 className="text-2xl font-bold text-[#2A3A6A] dark:text-white">
              Drop your file anywhere
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              We accept PDF, JPG, and PNG files
            </p>
          </div>
        </div>
      )}
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
          Unlock Your Document's{" "}
          <span className="text-tforanged">trueform</span>
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-700 dark:text-gray-300">
          Convert scanned PDFs and handwritten notes into searchable, editable,
          compressed digital PDFs powered by OCR and AI.
        </p>
      </div>

      <div className="panel mx-auto flex w-[85%] items-center justify-center rounded-3xl border-3 border-dashed border-gray-400 bg-gray-200 py-6 sm:w-[60%] dark:border-gray-700 dark:bg-gray-800">
        <div className="flex flex-col items-center justify-center px-6">
          <input
            type="file"
            id="file-input"
            className="hidden"
            onChange={handleFileChange}
            accept=".pdf,.jpg,.jpeg,.png"
          />
          <button
            disabled={isPending}
            onClick={handleButtonClick}
            className={`bg-tforange focus:ring-tforange cursor-pointer rounded-xl px-5 py-6 font-bold text-white transition-colors hover:bg-orange-500 focus:ring-2 focus:ring-offset-2 focus:outline-none sm:px-10 md:text-xl`}
          >
            {isPending ? (
              <div className="flex flex-col items-center">
                <svg
                  className="mr-2 -ml-1 h-6 w-6 animate-spin text-white md:h-9 md:w-9"
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
                <span>Converting...</span>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <UploadCloud className="inline h-6 w-6 md:h-9 md:w-9"></UploadCloud>
                <span>Click here to add your file</span>
              </div>
            )}
          </button>

          {isError && (
            <p className="mt-4 text-sm font-semibold text-red-600 md:text-lg dark:text-red-400">
              Error: {error.message}
            </p>
          )}

          {isPending && file && (
            <p className="mt-4 text-sm font-semibold text-orange-600 md:text-lg dark:text-orange-400">
              Processing "{file.name}"...
            </p>
          )}

          {isSuccess && file && (
            <p className="mt-4 text-sm font-semibold text-green-600 md:text-lg dark:text-green-400">
              "{file.name}" finished processing!
            </p>
          )}

          <p className="mx-auto mt-4 max-w-3xl text-sm text-gray-700 md:text-lg dark:text-gray-300">
            or drag & drop anywhere on this page
          </p>
        </div>
      </div>
    </section>
  );
}
