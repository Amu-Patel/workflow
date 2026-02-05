export default function Node({ node, onAdd, onDelete, onEdit }) {
  const bg =
    node.type === "start"
      ? "bg-green-200"
      : node.type === "action"
      ? "bg-blue-200"
      : node.type === "branch"
      ? "bg-yellow-200"
      : "bg-red-200";

  return (
    <div className={`w-64 p-3 rounded-lg border-2 border-gray-700 mb-3 ${bg}`}>
      <input
        className="w-full p-1 mb-2 border rounded"
        value={node.label}
        onChange={(e) => onEdit(node.id, e.target.value)}
      />

      <div className="flex flex-wrap gap-1">
        {node.type !== "end" && node.type !== "branch" && (
          <>
            <button onClick={() => onAdd(node.id, "action")} className="btn-blue">
              + Action
            </button>
            <button onClick={() => onAdd(node.id, "branch")} className="btn-yellow">
              + Branch
            </button>
            <button onClick={() => onAdd(node.id, "end")} className="btn-red">
              + End
            </button>
          </>
        )}

        {node.type !== "start" && (
          <button onClick={() => onDelete(node.id)} className="btn-red">
            Delete
          </button>
        )}
      </div>
    </div>
  );
}
