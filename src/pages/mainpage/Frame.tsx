//FRAME 
//bottom bar navigation

import { buttons, type BottomBarButton } from "./content";
import type { view } from "../../customtypes/types";
import './bottombar.css';

interface FrameProps {
  setView: React.Dispatch<React.SetStateAction<view>>;
}

export function Frame({ setView }: FrameProps) {
  return (
    <div className="bottom-bar">
      {buttons.map((button: BottomBarButton) => (
        <button 
          key={button.name}
          onClick={() => setView(button.targetView)}
        >{button.name}
        </button>
      ))}
    </div>
  );
}
