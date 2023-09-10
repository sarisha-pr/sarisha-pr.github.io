import { useEffect, useState } from "react";

export const Advice = () => {
  const url = "https://api.adviceslip.com/advice";
  const [advice, setAdvice] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAdviceData = async () => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // add a delay to show the loading animation
        setTimeout(() => {
          setAdvice(data.slip);
          setIsLoading(false);
        }, 2000);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchAdviceData();
  }, []);

  return (
    <div className="min-h-screen bg-[#202733] flex justify-center items-center">
      <div className="relative container pb-8">
        <div
          className={`container md:max-w-[33.75rem] px-6 md:px-12 pt-10 md:pt-12 pb-16 md:pb-[4.5rem] rounded-[0.9375rem] shadow-[30px_50px_80px_rgba(0,0,0,0.10)] bg-[#313A48] ${
            isLoading ? "h-0 max-h-0" : ""
          }`}
        >
          {advice && !isLoading && (
            <>
              {/* Title */}
              <h1 className="pb-6 font-extrabold text-xs text-center text-[#53FFAA]">
                ADVICE #{advice["id"]}
              </h1>
              {/* End - Title */}

              {/* Content */}
              <p className="font-extrabold text-2xl text-center text-[#CEE3E9]">
                {advice["advice"]}
              </p>
              {/* End - Content */}

              {/* Border */}
              <div className="flex gap-4 items-center pt-6 md:pt-10">
                <span className="flex-grow h-[0.0625rem] bg-[#4F5D74]"></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                >
                  <rect width="6" height="16" rx="3" fill="#CEE3E9" />
                  <rect x="14" width="6" height="16" rx="3" fill="#CEE3E9" />
                </svg>
                <span className="flex-grow h-[0.0625rem] bg-[#4F5D74]"></span>
              </div>
              {/* End - Border */}
            </>
          )}
        </div>

        <button
          onClick={fetchAdviceData}
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 duration-300 ${
            isLoading ? "bottom-[calc((100%-2rem)/2)]" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            className={`duration-300 ${isLoading ? "animate-spin" : ""}`}
          >
            <circle cx="32" cy="32" r="32" fill="#53FFAA" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 20H40C42.2081 20.0025 43.9975 21.7919 44 24V40C43.9975 42.2081 42.2081 43.9975 40 44H24C21.7919 43.9975 20.0025 42.2081 20 40V24C20.0025 21.7919 21.7919 20.0025 24 20ZM26 36.5C26 37.3284 26.6716 38 27.5 38C28.3284 38 29 37.3284 29 36.5C29 35.6716 28.3284 35 27.5 35C26.6716 35 26 35.6716 26 36.5ZM27.5 29C26.6716 29 26 28.3284 26 27.5C26 26.6716 26.6716 26 27.5 26C28.3284 26 29 26.6716 29 27.5C29 28.3284 28.3284 29 27.5 29ZM30.5 32C30.5 32.8284 31.1716 33.5 32 33.5C32.8284 33.5 33.5 32.8284 33.5 32C33.5 31.1716 32.8284 30.5 32 30.5C31.1716 30.5 30.5 31.1716 30.5 32ZM36.5 38C35.6716 38 35 37.3284 35 36.5C35 35.6716 35.6716 35 36.5 35C37.3284 35 38 35.6716 38 36.5C38 37.3284 37.3284 38 36.5 38ZM35 27.5C35 28.3284 35.6716 29 36.5 29C37.3284 29 38 28.3284 38 27.5C38 26.6716 37.3284 26 36.5 26C35.6716 26 35 26.6716 35 27.5Z"
              fill="#202733"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Advice;
