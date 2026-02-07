// import { useState } from "react";
// import { createNode } from "./utils/nodeFactory";
// import Node from "./components/Node";
// import Branch from "./components/Branch";
// import Toolbar from "./components/Toolbar";
// import Canvas from "./components/Canvas";
// import Header from "./components/Header";

// export default function App() {
//   const startNode = {
//     id: "start",
//     type: "start",
//     label: "Start",
//     children: { default: [] },
//   };

//   const [nodes, setNodes] = useState({ start: startNode });
//   const [history, setHistory] = useState([]);
//   const [future, setFuture] = useState([]);

//   function updateNodes(newNodes) {
//     setHistory((h) => [...h, nodes]);
//     setFuture([]);
//     setNodes(newNodes);
//   }

//   function addNode(parentId, type, branchKey = "default") {
//     const newNode = createNode(type, type.toUpperCase());

//     const parent = nodes[parentId];
//     const updatedParent = { ...parent };

//     if (parent.type === "branch") {
//       updatedParent.children[branchKey].push(newNode.id);
//     } else {
//       updatedParent.children.default = [newNode.id];
//     }

//     const newState = {
//       ...nodes,
//       [parentId]: updatedParent,
//       [newNode.id]: newNode,
//     };

//     updateNodes(newState);
//   }

//   function deleteNode(nodeId) {
//     const updated = { ...nodes };
//     delete updated[nodeId];

//     Object.values(updated).forEach((node) => {
//       Object.keys(node.children || {}).forEach((key) => {
//         node.children[key] = node.children[key].filter(
//           (id) => id !== nodeId
//         );
//       });
//     });

//     updateNodes(updated);
//   }

//   function editNode(id, label) {
//     const newState = {
//       ...nodes,
//       [id]: { ...nodes[id], label },
//     };
//     updateNodes(newState);
//   }

//   function undo() {
//     if (!history.length) return;
//     const prev = history[history.length - 1];
//     setFuture((f) => [nodes, ...f]);
//     setHistory((h) => h.slice(0, -1));
//     setNodes(prev);
//   }

//   function redo() {
//     if (!future.length) return;
//     const next = future[0];
//     setHistory((h) => [...h, nodes]);
//     setFuture((f) => f.slice(1));
//     setNodes(next);
//   }

//   function renderNode(id) {
//     const node = nodes[id];
//     if (!node) return null;

//     return (
//       <div key={id} className="ml-5">
//         <Node node={node} onAdd={addNode} onDelete={deleteNode} onEdit={editNode} />

//         {node.type === "branch" && (
//           <Branch node={node} onAdd={addNode} renderNode={renderNode} />
//         )}

//         {node.children.default?.map(renderNode)}
//       </div>
//     );
//   }

//   function exportWorkflow() {
//     const blob = new Blob([JSON.stringify(nodes, null, 2)], {
//       type: "application/json",
//     });
//     const link = document.createElement("a");
//     link.href = URL.createObjectURL(blob);
//     link.download = "workflow.json";
//     link.click();
//   }

//   function importWorkflow(e) {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onload = () => setNodes(JSON.parse(reader.result));
//     reader.readAsText(file);
//   }

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Header onUndo={undo} onRedo={redo} />

//       <div className="p-6">
//         <Toolbar onExport={exportWorkflow} onImport={importWorkflow} />
//         <Canvas>{renderNode("start")}</Canvas>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { createNode } from "./utils/nodeFactory";
import Node from "./components/Node";
import Branch from "./components/Branch";
import Canvas from "./components/Canvas";
import Header from "./components/Header";

const startNode = {
  id: "start",
  type: "start",
  label: "Start",
  children: { default: [] },
};

export default function App() {
  const [history, setHistory] = useState({
    past: [],
    present: { start: startNode },
    future: [],
  });

  const nodes = history.present;

  function updateNodes(newNodes) {
    setHistory((h) => ({
      past: [...h.past, h.present],
      present: newNodes,
      future: [],
    }));
  }

  function undo() {
    setHistory((h) => {
      if (h.past.length === 0) return h;
      const previous = h.past[h.past.length - 1];
      const newPast = h.past.slice(0, -1);

      return {
        past: newPast,
        present: previous,
        future: [h.present, ...h.future],
      };
    });
  }

  function redo() {
    setHistory((h) => {
      if (h.future.length === 0) return h;
      const next = h.future[0];
      const newFuture = h.future.slice(1);

      return {
        past: [...h.past, h.present],
        present: next,
        future: newFuture,
      };
    });
  }

  function addNode(parentId, type, branchKey = "default") {
    const newNode = createNode(type, type.toUpperCase());
    const newNodes = structuredClone(nodes);

    const parent = newNodes[parentId];

    if (parent.type === "branch") {
      parent.children[branchKey].push(newNode.id);
    } else {
      parent.children.default = [newNode.id];
    }

    newNodes[newNode.id] = newNode;
    updateNodes(newNodes);
  }

  function deleteNode(nodeId) {
    const newNodes = structuredClone(nodes);
    delete newNodes[nodeId];

    Object.values(newNodes).forEach((node) => {
      Object.keys(node.children || {}).forEach((key) => {
        node.children[key] = node.children[key].filter(
          (id) => id !== nodeId
        );
      });
    });

    updateNodes(newNodes);
  }

  function editNode(id, label) {
    const newNodes = structuredClone(nodes);
    newNodes[id].label = label;
    updateNodes(newNodes);
  }

  function renderNode(id) {
    const node = nodes[id];
    if (!node) return null;

    return (
      <div key={id} className="ml-5">
        <Node
          node={node}
          onAdd={addNode}
          onDelete={deleteNode}
          onEdit={editNode}
        />

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
    reader.onload = () =>
      setHistory({
        past: [],
        present: JSON.parse(reader.result),
        future: [],
      });
    reader.readAsText(file);
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header
        onUndo={undo}
        onRedo={redo}
        onExport={exportWorkflow}
        onImport={importWorkflow}
      />

      <Canvas>{renderNode("start")}</Canvas>
    </div>
  );
}
