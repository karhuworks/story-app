import { useState } from "react";
import { WritingView } from "./views/WritingView";
import { PlanningView } from "./views/PlanningView";
import type { Scene } from "./models/Scene";
import { colors } from "./themes/default";

function App() {
  const [view, setView] = useState<"writing" | "planning">("writing");

  // Make sure you keep the setScenes function
  const [scenes, setScenes] = useState<Scene[]>([
    {
      id: "scene-1",
      title: "Scene 1",
      content: "Write here...",
    },
    {
      id: "scene-2",
      title: "Scene 2",
      content: "Write here...",
    },
  ]);

  const [activeScene, setActiveScene] = useState<Scene>(scenes[0]);

  return (
    <div style={{ padding: 20 }}>
      <header style={{ background: "rgb(191, 185, 248)", padding: 12, marginBottom: 20 }}>
        <button onClick={() => setView("writing")}>Writing</button>
        <button onClick={() => setView("planning")}>Planning</button>
      </header>

      <main>
        {view === "writing" && (
          <WritingView
            scene={activeScene}
            onUpdateScene={(updatedScene) => {
              // Update only the matching scene in the array
              setScenes(scenes.map(s => s.id === updatedScene.id ? updatedScene : s));
              // Sync activeScene if it's the one being updated
              if (activeScene.id === updatedScene.id) {
                setActiveScene(updatedScene);
              }
            }}
          />
        )}
        {view === "planning" && <PlanningView />}
      </main>

      <button style={{ background: colors.button.background }} onClick={() => setActiveScene(scenes[0])}>Scene 1</button>
      <button style={{ background: colors.button.background }} onClick={() => setActiveScene(scenes[1])}>Scene 2</button>

    </div>
  );
}

export default App;
