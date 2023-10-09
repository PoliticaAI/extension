import { useState } from "react";
import { ArticleAnalysis } from "./api/analysis.api";

import MainScreen from "./screens/MainScreen";
import StartAnalysisScreen from "./screens/StartAnalysisScreen";

const App = () => {
  const [analysis, setAnalysis] = useState<null | ArticleAnalysis>(null);

  return !analysis ? (
    <StartAnalysisScreen analysis={analysis} setAnalysis={setAnalysis} />
  ) : (
    <MainScreen analysis={analysis} />
  );
};
export default App;
