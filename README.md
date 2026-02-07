##Workflow Builder (React)

A visual workflow builder built using React and Tailwind CSS that allows users to create logical flows using nodes such as Start, Action, Branch (If/Else), and End.
Users can dynamically add, edit, and delete nodes, with support for branching logic and undo/redo functionality.

##Features

Create workflow using:

    Start Node

    Action Node

    Branch (If / Else) Node

    End Node

Supports TRUE / FALSE branching
Editable node labels
Add nodes dynamically
Delete nodes (except Start)
Undo & Redo functionality

##Clean and responsive UI
Built with modern React (functional components & hooks)

Live Demo

🔗 Live URL: [Add your deployed link here]
🔗 GitHub Repository: [Add your repo link here]

##Tech Stack
JavaScript-->React
TailwindCSS 
Pure React + CSS

##Features
Workflow Canvas
Starts with a single root node: Start
Displays nodes in a structured tree layout
Visual connections between parent and child nodes
Each node displays a readable label

🔹 Node Types
Node Type	Description	            Children
Action	    Single step/task	    1 outgoing connection
Branch	    Conditional decision	Multiple outgoing connections (True/False)
End	        Final step	            No outgoing connections

✏️ User Interactions
➕ Add Node
Add Action, Branch, or End node after any non-End node
For Branch nodes, users can add steps to specific branches (True/False)

🗑️ Delete Node
Any node except Start can be deleted
Parent reconnects automatically to the deleted node’s children to maintain flow

📝 Edit Node
Node labels are editable directly via UI

##Bonus Features (Optional)
Save workflow (logs workflow JSON to console)
Undo / Redo for structural changes
Context-sensitive add-node menu