import { useEffect, useState } from "react";
import { ArticleAnalysis } from "./api/analysis.api";

import MainScreen from "./screens/MainScreen";
import StartAnalysisScreen from "./screens/StartAnalysisScreen";

import { MemoryRouter, Routes, Route } from "react-router-dom";
import AskAnalysisScreen from "./screens/AskAnalysisScreen";

const App = () => {
  // TODO: THIS IS FOR TESTING PURPOSES ONLY
  const [analysis, setAnalysis] = useState<null | ArticleAnalysis>(null);

  useEffect(() => {
    const params = new URLSearchParams(
      new URL(window.location.href).searchParams
    );

    // Allow embedded to get bigger = fit bigger screens
    if (params.has("embedded")) {
      document.body.style.width = document.body.style.height = "100%";

      (document.body.parentElement as HTMLElement).style.width = 
        (document.body.parentElement as HTMLElement).style.height = "100%";

      (document.getElementById("root") as HTMLElement).style.width = 
        (document.getElementById("root") as HTMLElement).style.height = "100%";
    }
  }, []);

  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<MainScreen analysis={analysis} />} />
        <Route
          path="/start"
          element={<StartAnalysisScreen setAnalysis={setAnalysis} />}
        />
        <Route path="/ask" element={<AskAnalysisScreen />} />
      </Routes>
    </MemoryRouter>
  );
};
export default App;
