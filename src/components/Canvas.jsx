import { useState } from "react";

export default function Canvas({ children }) {
  const [scale, setScale] = useState(1);

  return (
    <div className="border h-[80vh] overflow-hidden relative bg-gray-50">
      <div className="absolute top-2 right-2 space-x-2 z-10">
        <button onClick={() => setScale((s) => s + 0.1)} className="btn-blue">+</button>
        <button onClick={() => setScale((s) => Math.max(0.5, s - 0.1))} className="btn-blue">-</button>
      </div>

      <div
        className="origin-top-left p-4"
        style={{ transform: `scale(${scale})` }}
      >
        {children}
      </div>
    </div>
  );
}
