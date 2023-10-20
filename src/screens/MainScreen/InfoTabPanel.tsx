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
        {analysis.gpt_response.title}
      </Typography>

      <div className="flex flex-row space-x-2 mb-6">
        <Tag
          icon={LockIcon}
          text="Factuality: High"
          tooltip="Based on historical reporting by this source."
          color="bg-blue-500"
        />

        <Tag
          icon={BalanceIcon}
          text="Bias: Low"
          tooltip="Based on historical reporting by this source."
          color="bg-purple-500"
        />
      </div>

      <Typography>
        Summary. I am summarizing here!Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </Typography>
    </div>
  );
};

export default InfoTabPanel;
