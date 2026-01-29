import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Start writing...</p>",
  });

  if (!editor) {
    return null;
  }

  return (
    <div style={{ padding: "1rem", height: "100%", overflowY: "auto" }}>
      <EditorContent editor={editor} />
    </div>
  );
}
