// export default function Node({ node, onAdd, onDelete, onEdit }) {
//   const bg =
//     node.type === "start"
//       ? "bg-gray-300"
//       : node.type === "action"
//       ? "bg-gray-300"
//       : node.type === "branch"
//       ? "bg-gray-300"
//       : "bg-gray-300";

//   return (
//     <div className={`w-64 p-3 rounded-lg border-2 border-gray-700 mb-3 ${bg}`}>
//       <input
//         className="w-full p-1 mb-2 border rounded"
//         value={node.label}
//         onChange={(e) => onEdit(node.id, e.target.value)}
//       />

//       <div className="flex flex-wrap gap-1">
//         {node.type !== "end" && node.type !== "branch" && (
//           <>
//             <button onClick={() => onAdd(node.id, "action")} className="btn-blue">
//               ▶ Action
//             </button>
//             <button onClick={() => onAdd(node.id, "branch")} className="btn-yellow">
//               ܓ Branch
//             </button>
//             <button onClick={() => onAdd(node.id, "end")} className="btn-red">
//               🚩 End
//             </button>
//           </>
//         )}

//         {node.type !== "start" && (
//           <button onClick={() => onDelete(node.id)} className="btn-red">
//             Delete
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default function Node({ node, onAdd, onDelete, onEdit }) {
//   const bg =
//     node.type === "start"
//       ? "bg-green-200"
//       : node.type === "action"
//       ? "bg-blue-200"
//       : node.type === "branch"
//       ? "bg-yellow-200"
//       : "bg-red-200";

//   return (
//     <div className={`w-72 p-3 rounded-xl border-2 border-gray-700 mb-4 ${bg}`}>
//       <input
//         className="w-full p-2 mb-3 border rounded"
//         value={node.label}
//         onChange={(e) => onEdit(node.id, e.target.value)}
//       />

//       {/* ADD NODE MENU */}
//       {node.type !== "end" && (
//         <div className="border rounded-lg bg-white shadow-sm">
//           <div className="px-3 py-2 text-sm font-semibold text-gray-500 border-b">
//             ADD NODE
//           </div>

//           <button
//             onClick={() => onAdd(node.id, "action")}
//             className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-100"
//           >
//             <span className="w-8 h-8 flex items-center justify-center rounded bg-blue-100 text-blue-600">
//               ▢
//             </span>
//             <div className="text-left">
//               <div className="font-semibold">Action</div>
//               <div className="text-xs text-gray-500">
//                 A single step or task
//               </div>
//             </div>
//           </button>

//           <button
//             onClick={() => onAdd(node.id, "branch")}
//             className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-100"
//           >
//             <span className="w-8 h-8 flex items-center justify-center rounded bg-orange-100 text-orange-600">
//               ⤴
//             </span>
//             <div className="text-left">
//               <div className="font-semibold">Branch</div>
//               <div className="text-xs text-gray-500">
//                 If / Else condition
//               </div>
//             </div>
//           </button>

//           <button
//             onClick={() => onAdd(node.id, "end")}
//             className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-100"
//           >
//             <span className="w-8 h-8 flex items-center justify-center rounded bg-green-100 text-green-600">
//               ⏹
//             </span>
//             <div className="text-left">
//               <div className="font-semibold">End</div>
//               <div className="text-xs text-gray-500">
//                 End this flow
//               </div>
//             </div>
//           </button>
//         </div>
//       )}

//       {/* DELETE */}
//       {node.type !== "start" && (
//         <button
//           onClick={() => onDelete(node.id)}
//           className="mt-3 px-3 py-1 bg-red-600 text-white rounded"
//         >
//           Delete
//         </button>
//       )}
//     </div>
//   );
// }

export default function Node({ node, onAdd, onDelete, onEdit }) {
  const bg =
    node.type === "start"
      ? "bg-green-100"
      : node.type === "action"
      ? "bg-blue-100"
      : node.type === "branch"
      ? "bg-yellow-100"
      : "bg-red-100";

  return (
    <div className={`w-52 p-2 rounded-xl border shadow-sm ${bg}`}>
      {/* Label */}
      <input
        className="w-full px-2 py-1 mb-1 text-sm border rounded"
        value={node.label}
        onChange={(e) => onEdit(node.id, e.target.value)}
      />

      {/* Add Node Panel */}
      {node.type !== "end" && (
        <div className="bg-white rounded-lg border p-2 space-y-2">
          <p className="text-xs font-semibold text-gray-500">ADD NODE</p>

          <button
            onClick={() => onAdd(node.id, "action")}
            className="flex items-center gap-2 w-full p-1 hover:bg-gray-100 rounded text-left"
          >
            🟦 <div>
              <div className="font-medium text-sm">Action</div>
              <div className="text-xs text-gray-500">A single step</div>
            </div>
          </button>

          <button
            onClick={() => onAdd(node.id, "branch")}
            className="flex items-center gap-2 w-full p-2 hover:bg-gray-100 rounded text-left"
          >
            🟧 <div>
              <div className="font-medium text-sm">Branch</div>
              <div className="text-xs text-gray-500">If / Else condition</div>
            </div>
          </button>

          <button
            onClick={() => onAdd(node.id, "end")}
            className="flex items-center gap-2 w-full p-2 hover:bg-gray-100 rounded text-left"
          >
            🟥 <div>
              <div className="font-medium text-sm">End</div>
              <div className="text-xs text-gray-500">End this flow</div>
            </div>
          </button>
        </div>
      )}

      {/* Delete */}
      {node.type !== "start" && (
        <button
          onClick={() => onDelete(node.id)}
          className="mt-2 px-3 py-1 bg-red-500 text-white text-sm rounded"
        >
          Delete
        </button>
      )}
    </div>
  );
}
