import type { Node } from "../models/Node";

export function addNode(
  node: Node,
  parentId: string,
  newNode: Node
): Node {
  if (node.type === "folder") {
    if (node.id === parentId) {
      return {
        ...node,
        children: [...node.children, newNode],
      };
    }

    return {
      ...node,
      children: node.children.map(child =>
        addNode(child, parentId, newNode)
      ),
    };
  }

  return node;
}
