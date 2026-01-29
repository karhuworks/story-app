import { useState } from "react";
import type { FolderNode, DocumentNode } from "../../models/Node";
import { addNode } from "../../functions/Nodes";
import { initialRoot } from "../../models/Node";

interface Props {
  node: Node;
  onSelect: (node: Node) => void;
}

export function Sidebar() {

  const [root, setRoot] = useState<FolderNode>(initialRoot);
  const [activeFolderId, setActiveFolderId] = useState<string>(initialRoot.id);

  const handleSelect = (node: FolderNode | DocumentNode) => {
    setActiveFolderId(node.id);
  };

  return (
    <div style={{
      backgroundColor: "#f0f0f0",
      padding: "1rem",
      borderRight: "1px solid #ccc"
    }}>
      <h2>Sidebar</h2>
      <button onClick={() => {
        const newNode: FolderNode = {
          id: Date.now().toString(),
          name: "New Folder",
          type: "folder",
          children: [],
        };

        setRoot(prev => addNode(prev, activeFolderId, newNode));

      }}
        >+ New Folder</button>

            {/* Render the folder tree */}
      <div style={{ marginTop: "1rem" }}>
        {root.children.map(child => (
          <SidebarNode
            key={child.id}
            node={child}
            onSelect={handleSelect}
          />
        ))}
      </div>

    </div>
  );
}

export function SidebarNode({ node, onSelect }: Props) {
  if (node.type === "document") {
    return (
      <div onClick={() => onSelect(node)}>
        📄 {node.name}
      </div>
    );
  }

  return (
    <div>
      <div>📁 {node.name}</div>
      <div style={{ paddingLeft: "1rem" }}>
        {node.children.map(child => (
          <SidebarNode
            key={child.id}
            node={child}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}
