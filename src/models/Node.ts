// PROJEKTIDOKUMENTIT 
// järjestettynä kansioihin ja tiedostoihin

export const initialRoot: FolderNode = {
  id: "project",
  name: "Project",
  type: "folder",
  children: [],
};

export type NodeType = "folder" | "document";

export interface BaseNode {
  id: string;
  name: string;
  type: NodeType;
}

export interface FolderNode extends BaseNode {
  type: "folder";
  children: Node[];
}

export interface DocumentNode extends BaseNode {
  type: "document";
  content: string;
}

export type Node = FolderNode | DocumentNode;
