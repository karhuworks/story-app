import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Notebox } from "./Notebox";
import { Editor } from "./Editor";  
import { paneelienVali, resizercolor } from "./variables";


export function WritingView() {
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [notesWidth, setNotesWidth] = useState(300);

  const startDrag = (setter: React.Dispatch<React.SetStateAction<number>>, side: "right" | "left") => (e: React.MouseEvent) => {
    e.preventDefault();
    let lastX = e.clientX; 

    const mouseMove = (moveEvent: MouseEvent) => {
      const delta = moveEvent.clientX - lastX; // difference since last move
      if (side === "right") {
        setter(prev => (Math.max(100, prev - delta))); 
      }
      else {
        setter(prev => (Math.max(100, prev + delta))); 
      }
      lastX = moveEvent.clientX; // update lastX
    };

    const mouseUp = () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseUp);
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `${sidebarWidth}px ${paneelienVali} 1fr ${paneelienVali} ${notesWidth}px`,
        height: "100vh",
      }}
    >
      <Sidebar />
      {/* Resizer */}
      <div
        style={{ cursor: "col-resize", backgroundColor: resizercolor }}
        onMouseDown={startDrag(setSidebarWidth, "left")}
      />
      <Editor />
      {/* Resizer */}
      <div
        style={{ cursor: "col-resize", backgroundColor: resizercolor }}
        onMouseDown={startDrag(setNotesWidth, "right")}
      />
      <Notebox />
    </div>
  );
}
