import { buttons, type BottomBarButton } from "./content";
import type { view } from "../../../customtypes/types";

interface FrameProps {
  setView: React.Dispatch<React.SetStateAction<view>>;
}

export function Frame({ setView }: FrameProps) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        padding: '1rem',
        backgroundColor: 'rgba(255,255,255,0.9)',
        boxShadow: '0 -2px 5px rgba(0,0,0,0.2)',
        position: 'sticky',
        bottom: 0,
      }}
    >
      {buttons.map((button: BottomBarButton) => (
        <button
          key={button.name}
          onClick={() => setView(button.targetView)}
          style={{ padding: '0.5rem 1rem' }}
        >
          {button.name}
        </button>
      ))}
    </div>
  );
}
