export default function Toolbar({ onExport, onImport }) {
  return (
    <div className="mb-4 space-x-3">
      <button onClick={onExport} className="px-4 py-2 bg-blue-600 text-white rounded">
        Export JSON
      </button>

      <label className="px-4 py-2 bg-green-600 text-white rounded cursor-pointer">
        Import JSON
        <input type="file" hidden accept=".json" onChange={onImport} />
      </label>
    </div>
  );
}
