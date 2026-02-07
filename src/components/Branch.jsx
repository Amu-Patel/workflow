// export default function Branch({ node, onAdd, renderNode }) {
//   return (
//     <div className="flex gap-6 ml-8">
//       {["true", "false"].map((key) => (
//         <div key={key} className="border-l-2 border-dashed pl-3">
//           <strong>{key.toUpperCase()}</strong>
//           <div className="my-2 space-x-2">
//             <button onClick={() => onAdd(node.id, "action", key)} className="btn-blue">
//               + Action
//             </button>
//             <button onClick={() => onAdd(node.id, "end", key)} className="btn-red">
//               🚩 End
//             </button>
//           </div>
//           {node.children[key].map(renderNode)}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default function Branch({ node, onAdd, renderNode }) {
//   return (
//     <div className="flex gap-10 ml-10 mt-4">
//       {["true", "false"].map((key) => (
//         <div
//           key={key}
//           className="border-l-2 border-dashed pl-4 min-w-[220px]"
//         >
//           <div className="font-bold mb-2 text-gray-700">
//             {key.toUpperCase()}
//           </div>

//           {/* ADD NODE PANEL */}
//           <div className="border rounded-lg bg-white shadow-sm mb-3">
//             <div className="px-3 py-2 text-sm font-semibold text-gray-500 border-b">
//               ADD NODE
//             </div>

//             <button
//               onClick={() => onAdd(node.id, "action", key)}
//               className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-100"
//             >
//               <span className="w-8 h-8 flex items-center justify-center rounded bg-blue-100 text-blue-600">
//                 ▢
//               </span>
//               <div className="text-left">
//                 <div className="font-semibold">Action</div>
//                 <div className="text-xs text-gray-500">
//                   A single step or task
//                 </div>
//               </div>
//             </button>

//             <button
//               onClick={() => onAdd(node.id, "end", key)}
//               className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-100"
//             >
//               <span className="w-8 h-8 flex items-center justify-center rounded bg-green-100 text-green-600">
//                 ⏹
//               </span>
//               <div className="text-left">
//                 <div className="font-semibold">End</div>
//                 <div className="text-xs text-gray-500">
//                   End this flow
//                 </div>
//               </div>
//             </button>
//           </div>

//           {/* Render child nodes */}
//           {node.children[key].map(renderNode)}
//         </div>
//       ))}
//     </div>
//   );
// }
export default function Branch({ node, onAdd, renderNode }) {
  return (
    <div className="flex gap-10 mt-4 ml-6">
      {["true", "false"].map((key) => (
        <div key={key} className="flex flex-col items-center">
          <p className="text-sm font-semibold mb-2">
            {key.toUpperCase()}
          </p>

          {/* Add Node mini panel */}
          <div className="bg-white border rounded-lg p-2 space-y-2 w-64">
            <p className="text-xs font-semibold text-gray-500">ADD NODE</p>

            <button
              onClick={() => onAdd(node.id, "action", key)}
              className="flex items-center gap-2 w-full p-2 hover:bg-gray-100 rounded text-left"
            >
              🟦 <span className="text-sm">Action</span>
            </button>

            <button
              onClick={() => onAdd(node.id, "end", key)}
              className="flex items-center gap-2 w-full p-2 hover:bg-gray-100 rounded text-left"
            >
              🟥 <span className="text-sm">End</span>
            </button>
          </div>

          {/* Render children */}
          <div className="mt-3">
            {node.children[key].map(renderNode)}
          </div>
        </div>
      ))}
    </div>
  );
}
