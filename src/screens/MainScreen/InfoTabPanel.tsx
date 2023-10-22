import { Typography, Tooltip } from "@mui/material";
import { ArticleAnalysis } from "../../api/analysis.api";
import { createElement } from "react";

import LockIcon from "@mui/icons-material/Lock";
import BalanceIcon from "@mui/icons-material/Balance";

const Tag = ({
  icon,
  text,
  tooltip,
  color,
}: {
  icon: typeof LockIcon;
  text: string;
  tooltip: string;
  color: string;
}) => {
  return (
    <Tooltip title={tooltip}>
      <div
        className={`rounded-full w-fit px-3 py-0.5 flex items-center ${color}`}
      >
        {createElement(icon, {
          className: "text-sm mr-1 text-white",
        })}
        <Typography className="text-sm text-white">{text}</Typography>
      </div>
    </Tooltip>
  );
};

const InfoTabPanel = ({ analysis }: { analysis: ArticleAnalysis }) => {
  return (
    <div className="p-4">
      <Typography className="font-bold text-xl mb-4">
        {analysis.title}
      </Typography>

      <div className="flex flex-row space-x-2 mb-6">
        <Tag
          icon={LockIcon}
          text={`Reliability: ${analysis.historical.reliability}`}
          tooltip="Reliability ratings are produced by Ad Fontes Media on a scale of 0 to 50, with 50 being very high reliability and 0 being almost no reliability."
          color="bg-blue-500"
        />

        <Tag
          icon={BalanceIcon}
          text={`Bias: ${analysis.historical.bias}`}
          tooltip="Bias ratings are produced by Ad Fontes Media on a scale of -42 to 42, with -42 being left-leaning and 42 being right-leaning."
          color="bg-purple-500"
        />
      </div>

      <Typography>
        {analysis.gpt_response.summary}
      </Typography>
    </div>
  );
};

export default InfoTabPanel;
