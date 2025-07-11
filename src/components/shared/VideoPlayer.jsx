import React from "react";

const VideoPlayer = () => {
  return (
    <div className="bg-black rounded-2xl overflow-hidden aspect-video max-w-3xl mx-auto">
      <div className="w-full h-full flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <div className="bg-blue-600 rounded-full p-4 inline-block mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">
            Mastering Spoken English
          </h3>
          <p className="text-blue-200">
            Your complete guide to confident communication
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
