import { useState } from "react";
import { WritingView } from "./views/WritingView";
import { PlanningView } from "./views/PlanningView";
import type { Scene } from "./models/Scene";

function App() {
  const [view, setView] = useState<"writing" | "planning">("writing");

  // Make sure you keep the setScenes function
  const [scenes, setScenes] = useState<Scene[]>([
    {
      id: "scene-1",
      title: "Opening Scene",
      content: "Write here...",
    },
  ]);

  const activeScene = scenes[0];

  return (
    <div style={{ padding: 20 }}>
      <header style={{ background: "#eee", padding: 12, marginBottom: 20 }}>
        <button onClick={() => setView("writing")}>Writing</button>
        <button onClick={() => setView("planning")}>Planning</button>
      </header>

      <main>
        {view === "writing" && (
          <WritingView
            scene={activeScene}
            onUpdateScene={(updatedScene) => {
              // Update the scenes array with the new content
              setScenes([updatedScene]);
            }}
          />
        )}
        {view === "planning" && <PlanningView />}
      </main>
    </div>
  );
}

export default App;
