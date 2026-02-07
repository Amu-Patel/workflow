import { useState } from "react";

export default function Canvas({ children }) {
  const [scale, setScale] = useState(1);

  return (
    <div
      id="workflow-canvas"
      className="border h-[80vh] overflow-auto relative"
      style={{
        backgroundImage: "url('/ab.png')", // put image in public folder
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Zoom buttons */}
      <div className="absolute top-2 right-2 space-x-2 z-10">
        <button
          onClick={() => setScale((s) => s + 0.1)}
          className="px-3 py-1 bg-blue-600 text-white rounded"
        >
          +
        </button>

        <button
          onClick={() => setScale((s) => Math.max(0.5, s - 0.1))}
          className="px-3 py-1 bg-blue-600 text-white rounded"
        >
          -
        </button>
      </div>

      {/* Scaled content */}
      <div
        className="origin-top-left p-4 min-w-max"
        style={{ transform: `scale(${scale})` }}
      >
        {children}
      </div>
    </div>
  );
}
