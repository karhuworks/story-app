import { useState } from "react";
import type { view, page } from "./customtypes/types";
import { Frame } from "./pages/mainpage/Frame";
import { Etusivu } from "./pages/etusivu/etusivu";
import { GeneralView } from "./views/general/GeneralView";
import { PlotterView } from "./views/plotter/PlotterView";
import { WritingView } from "./views/writing/WritingView";
import { MapView } from "./views/map/MapView";
import { TimelineView } from "./views/timeline/TimelineView";

function App() {
  const [page, setPage] = useState<page>("intro");
  const [view, setView] = useState<view>("General");

  if (page === "intro") {
    return <Etusivu setPage={setPage} />;
  }
  
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div style={{ flex: 1 }}>
        {view === "General" && <GeneralView />}
        {view === "Plotter" && <PlotterView />}
        {view === "Map" && <MapView />}
        {view === "Timeline" && <TimelineView />}
        {view === "Writing" && <WritingView />}
      </div>

      <Frame setView={setView} />
    </div>
  );
  
}

export default App;

