// import html2canvas from "html2canvas";

// export default function Header({ onUndo, onRedo }) {
//   async function saveAsImage() {
//     const canvasArea = document.getElementById("workflow-canvas");
//     if (!canvasArea) return;

//     const canvas = await html2canvas(canvasArea);
//     const link = document.createElement("a");
//     link.download = "workflow.png";
//     link.href = canvas.toDataURL();
//     link.click();
//   }

//   return (
//     <div className="flex items-center justify-between mx-8 mt-2 px-6 py-3 bg-white shadow rounded-md">
//       <h1 className="text-2xl font-bold">⚡️Workflow Builder</h1>

//       <div className="space-x-3">
//         <button
//           onClick={onUndo}
//           className="px-4 py-2 bg-gray-400 text-white rounded"
//         >
//           ↺
//         </button>

//         <button
//           onClick={onRedo}
//           className="px-4 py-2 bg-gray-400 text-white rounded"
//         >
//         ↻
//         </button>

//         <button
//           onClick={saveAsImage}
//           className="px-4 py-2 bg-blue-600 text-white rounded"
//         >
//         ⎙ Save
//         </button>
//       </div>
//     </div>
//   );
// }

import html2canvas from "html2canvas";

export default function Header({ onUndo, onRedo }) {
  async function saveAsImage() {
    const canvasArea = document.getElementById("workflow-canvas");
    if (!canvasArea) return;

    const canvas = await html2canvas(canvasArea);
    const link = document.createElement("a");
    link.download = "workflow.png";
    link.href = canvas.toDataURL();
    link.click();
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mx-3 sm:mx-8 mt-2 px-3 sm:px-6 py-3 bg-white shadow rounded-md">
      
      {/* Title */}
      <h1 className="text-lg sm:text-2xl font-bold">
        ⚡ Workflow Builder
      </h1>

      {/* Buttons */}
      <div className="flex gap-2 sm:gap-3">
        <button
          onClick={onUndo}
          className="px-3 sm:px-4 py-2 bg-gray-400 text-white rounded text-sm sm:text-base"
        >
          ↺
        </button>

        <button
          onClick={onRedo}
          className="px-3 sm:px-4 py-2 bg-gray-400 text-white rounded text-sm sm:text-base"
        >
          ↻
        </button>

        <button
          onClick={saveAsImage}
          className="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded text-sm sm:text-base"
        >
          ⎙ Save
        </button>
      </div>
    </div>
  );
}
