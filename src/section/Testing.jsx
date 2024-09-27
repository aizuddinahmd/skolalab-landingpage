import React from "react";

const test = () => {
  return (
    <div>
      <div className="relative">
        <div className="sticky top-0 h-screen bg-red-500 flex justify-center items-center">
          <div>
            <h1 className="text-4xl">First section Scroll</h1>
            <p className="text-2xl">Page scroll down</p>
          </div>
        </div>
        <div className="sticky top-0 h-screen bg-indigo-500 flex justify-center items-center">
          <div>
            <h1 className="text-4xl">Second section Scroll</h1>
            <p className="text-2xl">Page scroll down</p>
          </div>
        </div>

        <div className="sticky top-0 h-screen bg-green-500 flex justify-center items-center">
          <div>
            <h1 className="text-4xl">Third section Scroll</h1>
            <p className="text-2xl">Page scroll down</p>
          </div>
        </div>

        <div className="sticky top-0 h-screen bg-blue-500 flex justify-center items-center">
          <div>
            <h1 className="text-4xl">Fourth section Scroll</h1>
            <p className="text-2xl">Page scroll down</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default test;
