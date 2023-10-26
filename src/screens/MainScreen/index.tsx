import { useEffect, useState } from "react";
import { ArticleAnalysis } from "../../api/analysis.api";
import { useNavigate, useSearchParams } from "react-router-dom";

import { Tab, Tabs, Typography, IconButton } from "@mui/material";

import InfoIcon from "@mui/icons-material/Info";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import ArticleIcon from "@mui/icons-material/Article";
import PlagiarismIcon from "@mui/icons-material/Plagiarism";

import BiasTabPanel from "./BiasTabPanel";
import SimilarArticleTabPanel from "./SimilarArticleTabPanel";
import FallaciesTabPanel from "./FallaciesTabPanel";
import ReplayIcon from "@mui/icons-material/Replay";
import InfoTabPanel from "./InfoTabPanel";

import LogoImage from "/logo.svg";

const MainScreen = ({ analysis }: { analysis: ArticleAnalysis | null }) => {
  const navigate = useNavigate();
  const [tab, setTab] = useState(0);

  const [searchParams, _setSearchParams] = useSearchParams();

  useEffect(() => {
    const params = new URLSearchParams(
      new URL(window.location.href).searchParams
    );

    if (params.has("embedded") && !analysis) {
      console.log("embedded!");
      navigate("/ask");
      return;
    }

    if (!analysis) navigate("/start");

    console.log(analysis);
  }, [analysis, navigate]);

  return (
    analysis && (
      <div className="flex h-full flex-col">
        <div className="px-3 py-1 bg-slate-200 flex items-center ">
          <img src={LogoImage} className="h-12 mr-auto" />

          <IconButton
            onClick={() => navigate(`/start?href=${searchParams.get("href")}`)}
          >
            <ReplayIcon />
          </IconButton>
        </div>

        <Tabs
          value={tab}
          onChange={(_e, newTab) => setTab(newTab)}
          variant="scrollable"
          className="flex"
        >
          <Tab
            icon={<InfoIcon />}
            label={<Typography className="text-xs">Info</Typography>}
            className="w-24 mb-2 grow"
          />
          <Tab
            icon={<FactCheckIcon />}
            label={<Typography className="text-xs">Bias</Typography>}
            className="w-24 mb-2 grow"
          />
          <Tab
            icon={<ArticleIcon />}
            label={
              <Typography className="text-xs">Similar Articles</Typography>
            }
            className="w-36 mb-2 grow"
          />
          <Tab
            icon={<PlagiarismIcon />}
            label={<Typography className="text-xs">Fallacies</Typography>}
            className="w-24 mb-2 grow"
          />
        </Tabs>

        <div className="h-full overflow-auto p-1">
          {tab === 0 && <InfoTabPanel analysis={analysis} />}
          {tab === 1 && <BiasTabPanel analysis={analysis} />}
          {tab === 2 && <SimilarArticleTabPanel analysis={analysis} />}
          {tab === 3 && <FallaciesTabPanel analysis={analysis} />}
        </div>
      </div>
    )
  );
};

export default MainScreen;
