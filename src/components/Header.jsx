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
    <div className="flex items-center justify-between mx-8 mt-2 px-6 py-3 bg-white shadow rounded-md">
      <h1 className="text-2xl font-bold">⚡️Workflow Builder</h1>

      <div className="space-x-3">
        <button
          onClick={onUndo}
          className="px-4 py-2 bg-gray-400 text-white rounded"
        >
          ↺
        </button>

        <button
          onClick={onRedo}
          className="px-4 py-2 bg-gray-400 text-white rounded"
        >
        ↻
        </button>

        <button
          onClick={saveAsImage}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
        ⎙ Save
        </button>
      </div>
    </div>
  );
}

