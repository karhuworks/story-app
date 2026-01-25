import { buttons, type BottomBarButton } from "./content";
import type { view } from "../../customtypes/types";

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
        padding: '0.5rem',
        backgroundColor: 'hsla(49, 40%, 76%, 0.90)',
        borderTop: '1px solid rgb(68, 68, 68)',
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
