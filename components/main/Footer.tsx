import React from "react";
import { RxGithubLogo } from "react-icons/rx";

export const Footer: React.FC = () => {
  return (
    <div className="w-full h-full backdrop-blur-sm bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-center flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                kalpeshshirudkar@gmail.com
              </span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Kalpesh Shirudkar 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};
Footer.displayName = "Footer";
