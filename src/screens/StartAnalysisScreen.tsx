import { useEffect, useState } from "react";

import { CircularProgress, Typography } from "@mui/material";
import {
  ArticleAnalysis,
  checkAnalysisStatus,
  startAnalysis,
} from "../api/analysis.api";

const StartAnalysisScreen = ({
  analysis,
  setAnalysis,
}: {
  analysis: ArticleAnalysis | null,
  setAnalysis: (analysis: ArticleAnalysis) => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [progressData, setProgressData] = useState<{ status: string; progress: number }>({ status: "Initializing", progress: 0 });

  useEffect(() => {
    const processId = localStorage.getItem("process_id");

    if (processId && isLoading) {
      const intervalId = setInterval(() => {
        checkAnalysisStatus()
          .then((statusData) => {
            if (statusData.result) {
              setIsLoading(false);
              clearInterval(intervalId);

              setAnalysis(statusData.result);
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
  }, [isLoading]);

  useEffect(() => {
    setProgressData({ status: "Initializing", progress: 0 });
    setIsLoading(true);

    const link = window.location.href;

    startAnalysis(link)
      .then((startData) => {
        localStorage.setItem("process_id", startData.process_id);
      })
      .catch((error) => {
        console.error("Error starting analysis:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center space-y-6">
      <Typography variant="h1" color="primary" className="text-2xl font-bold">
        Analyzing article...
      </Typography>
      <CircularProgress />
      <Typography className="text-sm text-slate-600">
        {progressData.status} ({progressData.progress}/4)
      </Typography>
    </div>
  );
};

export default StartAnalysisScreen;
