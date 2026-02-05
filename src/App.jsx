import { useState } from "react";
import { createNode } from "./utils/nodeFactory";
import Node from "./components/Node";
import Branch from "./components/Branch";
import Toolbar from "./components/Toolbar";
import Canvas from "./components/Canvas";

export default function App() {
  const startNode = {
    id: "start",
    type: "start",
    label: "Start",
    children: { default: [] },
  };

  const [nodes, setNodes] = useState({ start: startNode });

  function addNode(parentId, type, branchKey = "default") {
    const newNode = createNode(type, type.toUpperCase());

    setNodes((prev) => {
      const parent = prev[parentId];
      const updatedParent = { ...parent };

      if (parent.type === "branch") {
        updatedParent.children[branchKey].push(newNode.id);
      } else {
        updatedParent.children.default = [newNode.id];
      }

      return { ...prev, [parentId]: updatedParent, [newNode.id]: newNode };
    });
  }

  function deleteNode(nodeId) {
    setNodes((prev) => {
      const updated = { ...prev };
      delete updated[nodeId];

      Object.values(updated).forEach((node) => {
        Object.keys(node.children || {}).forEach((key) => {
          node.children[key] = node.children[key].filter((id) => id !== nodeId);
        });
      });

      return updated;
    });
  }

  function editNode(id, label) {
    setNodes((prev) => ({ ...prev, [id]: { ...prev[id], label } }));
  }

  function renderNode(id) {
    const node = nodes[id];
    if (!node) return null;

    return (
      <div key={id} className="ml-5">
        <Node node={node} onAdd={addNode} onDelete={deleteNode} onEdit={editNode} />

        {node.type === "branch" && (
          <Branch node={node} onAdd={addNode} renderNode={renderNode} />
        )}

        {node.children.default?.map(renderNode)}
      </div>
    );
  }

  function exportWorkflow() {
    const blob = new Blob([JSON.stringify(nodes, null, 2)], {
      type: "application/json",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "workflow.json";
    link.click();
  }

  function importWorkflow(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => setNodes(JSON.parse(reader.result));
    reader.readAsText(file);
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-3">Workflow Builder</h1>

      <Toolbar onExport={exportWorkflow} onImport={importWorkflow} />

      <Canvas>{renderNode("start")}</Canvas>
    </div>
  );
}
