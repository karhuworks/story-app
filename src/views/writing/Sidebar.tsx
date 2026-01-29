import type { Node } from "../../models/Node";

interface Props {
  node: Node;
  onSelect: (node: Node) => void;
}

export function Sidebar() {
  return (
    <div style={{
      backgroundColor: "#f0f0f0",
      padding: "1rem",
      borderRight: "1px solid #ccc"
    }}>
      <h2>Sidebar</h2>
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
