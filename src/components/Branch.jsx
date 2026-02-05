export default function Branch({ node, onAdd, renderNode }) {
  return (
    <div className="flex gap-6 ml-8">
      {["true", "false"].map((key) => (
        <div key={key} className="border-l-2 border-dashed pl-3">
          <strong>{key.toUpperCase()}</strong>
          <div className="my-2 space-x-2">
            <button onClick={() => onAdd(node.id, "action", key)} className="btn-blue">
              + Action
            </button>
            <button onClick={() => onAdd(node.id, "end", key)} className="btn-red">
              + End
            </button>
          </div>
          {node.children[key].map(renderNode)}
        </div>
      ))}
    </div>
  );
}
