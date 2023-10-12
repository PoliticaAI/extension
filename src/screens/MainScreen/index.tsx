import { useEffect, useState } from "react";
import { ArticleAnalysis } from "../../api/analysis.api";
import { useNavigate } from "react-router-dom";

import { Tab, Tabs, Typography } from "@mui/material";

import FactCheckIcon from "@mui/icons-material/FactCheck";
import ArticleIcon from "@mui/icons-material/Article";
import PlagiarismIcon from "@mui/icons-material/Plagiarism";
import BiasTabPanel from "./BiasTabPanel";
import SimilarArticleTabPanel from "./SimilarArticleTabPanel";
import FallaciesTabPanel from "./FallaciesTabPanel";

const MainScreen = ({ analysis }: { analysis: ArticleAnalysis | null }) => {
  const navigate = useNavigate();
  const [tab, setTab] = useState(0);

  useEffect(() => {
    if (!analysis) navigate("/start");
  }, [analysis, navigate]);

  return (
    analysis && (
      <div className="flex h-full flex-col">
        <Tabs value={tab} onChange={(_e, newTab) => setTab(newTab)}>
          <Tab
            icon={<FactCheckIcon />}
            label={<Typography className="text-xs">Bias</Typography>}
            className="grow"
          />
          <Tab
            icon={<ArticleIcon />}
            label={
              <Typography className="text-xs">Similar Articles</Typography>
            }
            className="grow"
          />
          <Tab
            icon={<PlagiarismIcon />}
            label={<Typography className="text-xs">Fallacies</Typography>}
            className="grow"
          />
        </Tabs>

        <div className="h-full overflow-auto p-1">
          {tab === 0 && <BiasTabPanel analysis={analysis} />}
          {tab === 1 && <SimilarArticleTabPanel analysis={analysis} />}
          {tab === 2 && <FallaciesTabPanel analysis={analysis} />}
        </div>
      </div>
    )
  );
};

export default MainScreen;
