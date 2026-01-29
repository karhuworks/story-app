import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import "./layout.css";

export function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p></p>",
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
