// import {  Copy, Edit3 } from "lucide-react";

export default function BeforeAfter() {
  return (
    <section className="py-20 px-4 bg-tfwhite dark:bg-tfblack">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8  flex flex-col">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-tfblack dark:text-tfwhite">
            See the Difference
          </h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            TrueForm PDF transforms your scanned static documents into fully
            searchable and editable PDFs while maintaining the essence and
            appearance of your layout.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-around gap-2">
          <div className="flex-col mb-10">
            <div className="flex  justify-start  gap-3  items-center mb-4">
              <h3 className="text-xl font-bold text-[#2A3A6A] dark:text-white">
                Before
              </h3>
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                Scanned PDF
              </span>
            </div>
            <img
              draggable="false"
              alt="Before processing"
              className="w-[400px] h-[400px] "
              src="handwritten.webp"
            ></img>
          </div>

          <div className="flex-col  mb-10">
            <div className="flex justify-start  gap-3 items-center mb-4">
              <h3 className="text-xl font-bold text-[#2A3A6A] dark:text-white">
                After
              </h3>
              <span className="px-3 py-1 bg-[#ff8004]/20 text-[#ff8004] rounded-full text-sm">
                Converted PDF
              </span>
            </div>

            <img
              draggable="false"
              alt="after processing, "
              className="w-[400px] h-[400px] "
              src="converted.webp"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}
