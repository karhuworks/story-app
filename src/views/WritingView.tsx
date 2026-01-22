import type { Scene } from "../models/Scene";

interface WritingViewProps {
  scene: Scene;
  onUpdateScene: (updatedScene: Scene) => void;
}

export function WritingView({ scene, onUpdateScene }: WritingViewProps) {
  return (
    <div>
      <h2>{scene.title}</h2>
      <textarea
        value={scene.content}
        onChange={(e) =>
          onUpdateScene({ ...scene, content: e.target.value })
        }
        style={{
          width: "100%",
          height: "200px",
          fontSize: "16px",
          padding: "8px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
}
