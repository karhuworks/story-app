import { useState } from "react";
import { Etusivu } from "./pages/etusivu/etusivu";
import { General } from "./views/general/General";
import type { view } from "./customtypes/types";
import { Frame } from "./pages/etusivu/mainpage/Frame";

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
        {view === "Plotter" && <div>Plotter View</div>}
      </div>

      <Frame setView={setView} />
    </div>
  );
  
}

export default App;
