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
      index: 1,
      id: "scene-1",
      title: "Scene 1",
      content: "",
    },
  ]);

  const [activeScene, setActiveScene] = useState<Scene>(scenes[0]);
  const [sceneCounter, setSceneCounter] = useState<number>(1);

  // Function to remove a scene by ID
  const removeScene = (sceneId: string) => {
    const updatedScenes = scenes.filter(s => s.id !== sceneId);
    setScenes(updatedScenes);
    // If removing the active scene, switch to the first remaining scene (if any)
    if (activeScene.id === sceneId && updatedScenes.length > 0) {
      setActiveScene(updatedScenes[0]);
    } else if (updatedScenes.length === 0) {
      // Optional: Handle case with no scenes left (e.g., add a default scene)
      const defaultScene = { index: 1, id: "scene-1", title: "Scene 1", content: "" };
      setScenes([defaultScene]);
      setActiveScene(defaultScene);
    }
    setSceneCounter(updatedScenes.length > 0 ? updatedScenes[updatedScenes.length - 1].index : 0); // Update sceneCounter to last scene's index

  };

  return (
    <div style={{ padding: 20 }}>
      <header style={{ background: "rgb(191, 185, 248)", padding: 12, marginBottom: 20 }}>
        <button onClick={() => setView("writing")}>Writing</button>
        <button onClick={() => setView("planning")}>Planning</button>
      </header>

      {/* Modify "-" button to remove the active scene */}
      {view === "writing" && scenes.length > 1 && (
        <button 
          style={{ background: colors.button.background, marginRight: 8 }} 
          onClick={() => removeScene(activeScene.id)}
        >
          -
        </button>
      )}

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

      {/* Render scene buttons only in writing view */}
      {view === "writing" && scenes.map((scene) => (
        <button 
          key={scene.id} 
          style={{ background: colors.button.background, marginRight: 8 }} 
          onClick={() => setActiveScene(scene)}
        >
          {scene.title}
        </button>
      ))}

      {/* Optionally, make the "+" button conditional too */}
      {view === "writing" && (
        <button 
          style={{ background: colors.button.background }} 
          onClick={() => {
            const newScene = { 
              index: sceneCounter + 1,
              id: `scene-${sceneCounter + 1}`, 
              title: `Scene ${sceneCounter + 1}`, 
              content: "",
            }; 
            setScenes([...scenes, newScene]); 
            setSceneCounter(sceneCounter + 1);
            setActiveScene(newScene);
          }}
        >
          +
        </button>
      )}

    </div>
  );
}

export default App;
