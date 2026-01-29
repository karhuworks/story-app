import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import "./editor.css";
import { useState } from "react";

export function Editor(content: any) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="editor">
      <EditorContent editor={editor} />
    </div>
  );
}

export function ChangeContent() {
  const [actDocument, setActDocument] = useState(""); // active document shown on editor

  return (
    <div style={{ height: "100vh" }}>
      <Editor content={actDocument} onChange={setActDocument} />
    </div>
  );
}

