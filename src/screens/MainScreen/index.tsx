import { useEffect, useState } from "react";
import { ArticleAnalysis } from "../../api/analysis.api";
import { useNavigate, useSearchParams } from "react-router-dom";

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
    const params = new URLSearchParams(
      new URL(window.location.href).searchParams
    );

    if (params.has("embedded") && !analysis) navigate("/ask");
    if (!analysis) navigate("/start");

    console.log(analysis);
  }, [analysis, navigate]);

  return (
    analysis && (
      <div className="flex h-full flex-col">
        <div className="p-2 bg-slate-200">
          <Typography
            variant="h5"
            fontWeight={400}
            component="div"
            className="text-blue-600 flex-1"
          >
            Political Spectrum
          </Typography>
        </div>

        <Tabs value={tab} onChange={(_e, newTab) => setTab(newTab)}>
          <Tab
            icon={<FactCheckIcon />}
            label={<Typography className="text-xs">Bias</Typography>}
            className="grow mb-2"
          />
          <Tab
            icon={<ArticleIcon />}
            label={
              <Typography className="text-xs">Similar Articles</Typography>
            }
            className="grow mb-2"
          />
          <Tab
            icon={<PlagiarismIcon />}
            label={<Typography className="text-xs">Fallacies</Typography>}
            className="grow mb-2"
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
