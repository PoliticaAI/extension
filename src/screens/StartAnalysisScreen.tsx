import { useEffect, useState } from "react";

import { CircularProgress, Typography } from "@mui/material";
import {
  ArticleAnalysis,
  checkAnalysisStatus,
  startAnalysis,
} from "../api/analysis.api";
import { useNavigate, useSearchParams } from "react-router-dom";

const StartAnalysisScreen = ({
  setAnalysis,
}: {
  setAnalysis: (analysis: ArticleAnalysis) => void;
}) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [progressData, setProgressData] = useState<{
    status: string;
    progress: number;
  }>({ status: "Initializing", progress: 0 });

  const [searchParams, setSearchParams] = useSearchParams();
  const [link, setLink] = useState<null | string>(null);

  useEffect(() => {
    (async () => {
      setLink(
        searchParams.get("href") ||
          (await chrome.tabs.query({ active: true, lastFocusedWindow: true }))[0].url
      );
    })();
  }, [searchParams]);

  useEffect(() => {
    if (!link) return;
    const processId = localStorage.getItem("process_id");

    if (processId && isLoading) {
      const intervalId = setInterval(() => {
        checkAnalysisStatus()
          .then((statusData) => {
            if (statusData.result) {
              setIsLoading(false);
              clearInterval(intervalId);

              console.log(statusData.result);
              setAnalysis(statusData.result);

              navigate(`/?href=${link}`);
            } else {
              console.log("Analysis status:", statusData.status);
              setProgressData(statusData);
            }
          })
          .catch((error) => {
            console.error("Error checking analysis status:", error);
          });
      }, 1000);
    }
  }, [isLoading, setAnalysis, navigate, link]);

  useEffect(() => {
    if (!link) return;

    setProgressData({ status: "Initializing", progress: 0 });
    setIsLoading(true);

    startAnalysis(link)
      .then((startData) => {
        localStorage.setItem("process_id", startData.process_id);
      })
      .catch((error) => {
        console.error("Error starting analysis:", error);
        setIsLoading(false);
      });
  }, [link]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Typography
        variant="h1"
        color="primary"
        className="text-2xl font-bold mb-4"
      >
        Analyzing article...
      </Typography>
      <Typography
        variant="h2"
        className="text-sm text-slate-500 mb-6 px-4 text-center"
      >
        {link}
      </Typography>
      <CircularProgress className="mb-6" />
      <Typography className="text-sm text-slate-600">
        {progressData.status} ({progressData.progress}/4)
      </Typography>
    </div>
  );
};

export default StartAnalysisScreen;
