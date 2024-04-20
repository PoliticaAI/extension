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
  const normalizedReliability = ((analysis.historical.reliability / 64) * 10).toFixed(2);
  const normalizedBias = ((analysis.historical.bias / 42) * 10).toFixed(2);

  let reliabilityColor = "bg-gray-500";
  let reliabilityText = "Unknown";

  if (analysis.historical.reliability > 6.25) { // 40/64 * 10
    reliabilityColor = "bg-green-500";
    reliabilityText = "Reliability scores for articles are on a scale of 0-10. Scores above 6.25 are generally good.";    
  } else if (analysis.historical.reliability > 3.75) { // 24/64 * 10
    reliabilityColor = "bg-yellow-600";
    reliabilityText = "Reliability scores for articles are on a scale of 0-10. Scores between 3.75-6.25 indicate a range of possibilities, with some sources falling there because they are heavy in opinion and analysis, and some because they have a high variation in reliability between articles.";    
  } else {
    reliabilityColor = "bg-red-500";
    reliabilityText = "Reliability scores for articles are on a scale of 0-10. Scores above 6.25 are generally good. Scores below 3.75 are generally problematic.";    
  }

  let biasColor = "bg-gray-500";
  let biasText = "Unknown";

  if (analysis.historical.bias > 4.75) { // 20/42 * 10
    biasColor = "bg-red-500";
    biasText = "Bias ratings are on a scale of -10 to 10, with -42 being left-leaning and 42 being right-leaning. Scores above 4.75 are generally right-leaning.";    
  } else if (analysis.historical.bias < -4.75) { // -20/42 * 10
    biasColor = "bg-blue-500";
    biasText = "Bias ratings are on a scale of -10 to 10, with -42 being left-leaning and 42 being right-leaning. Scores below -4.75 are generally left-leaning.";    
  } else {
    biasColor = "bg-gray-500";
    biasText = "Bias ratings are on a scale of -10 to 10, with -42 being left-leaning and 42 being right-leaning. Scores between -4.75 and 4.75 are generally centrist.";    
  }

  return (
    <div className="p-4">
      <Typography className="font-bold text-xl mb-4">
        {analysis.title}
      </Typography>

      <div className="flex flex-row space-x-2 mb-6">
        <Tag
          icon={LockIcon}
          text={`Source Reliability: ${normalizedReliability}`}
          tooltip={reliabilityText + " Source: Ad Fontes Media."}
          color={reliabilityColor}
        />

        <Tag
          icon={BalanceIcon}
          text={`Source Bias: ${normalizedBias}`}
          tooltip={biasText + " Source: Ad Fontes Media."}
          color={biasColor}
        />
      </div>

      <Typography>
        {analysis.gpt_response.summary}
      </Typography>
    </div>
  );
};

export default InfoTabPanel;
