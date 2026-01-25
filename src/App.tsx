
import { useState } from "react";
import type { view } from "./customtypes/types";
import { Frame } from "./pages/mainpage/Frame";
import { Etusivu } from "./pages/etusivu/etusivu";
import { General } from "./views/general/General";
import { Plotter } from "./views/plotter/Plotter";
import { Kartta } from "./views/kartta/Kartta";
import { Timeline } from "./views/timeline/Timeline";

function App() {
  const [page, setPage] = useState<"intro" | "other">("intro");
  const [view, setView] = useState<view>("General");

  if (page === "intro") {
    return <Etusivu setPage={setPage} />;
  }
  
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div style={{ flex: 1 }}>
        {view === "General" && <General />}
        {view === "Plotter" && <Plotter />}
        {view === "Map" && <Kartta />}
        {view === "Timeline" && <Timeline />}
      </div>

      <Frame setView={setView} />
    </div>
  );
  
}

export default App;

