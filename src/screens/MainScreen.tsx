import { ArticleAnalysis } from "../api/analysis.api";

const MainScreen = ({ analysis }: { analysis: ArticleAnalysis }) => {
  return <div>{JSON.stringify(analysis)}</div>;
};

export default MainScreen;
