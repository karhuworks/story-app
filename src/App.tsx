import { useState } from "react";
import { etusivu } from "./pages/etusivu";
import { general } from "./views/General";

function App() {
  const [page, setPage] = useState<"intro" | "other">("intro");
  const [view, setView] = useState<"General" | "Kartta" | "Map" | "Plotter" | "Timeline">("General");

  // Handle navigation based on state changes
  // For simplicity, trigger navigate on state change

  if (page === "intro") {
    return etusivu({ setPage });
  }

  if (view === "General") {
    return general();
  }

  return null;
}

export default App;
