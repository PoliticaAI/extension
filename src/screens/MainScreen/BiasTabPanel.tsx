import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ArticleAnalysis } from "../../api/analysis.api";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const BiasTabPanel = ({ analysis }: { analysis: ArticleAnalysis }) => {
  return (
    <div className="p-4">
      <Typography className="font-bold text-3xl mb-4" color="primary">
        Article Bias
      </Typography>

      <div className="w-full h-4 bg-gradient-to-r from-blue-500 via-white to-red-500 relative mb-5">
        <ArrowDropUpIcon
          className="text-slate-800 text-5xl absolute top-0.5"
          style={{
            left: `calc(${
              parseInt(analysis.gpt_response.ranking[0]) + 10
            } / 20 * 100% - 1.5rem)`,
          }}
        />
      </div>

      <Typography className="font-semibold text-slate-800 text-center mb-5">
        Bias: {parseInt(analysis.gpt_response.ranking[0])} (
        {analysis.gpt_response.ranking[1]})
      </Typography>

      {...Object.entries(analysis.gpt_response.reasons).map(
        ([summary, desc]) => (
          <Accordion className="mb-4">
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{summary}</Typography>
            </AccordionSummary>
            <AccordionDetails className="border-0 border-t-[1px] border-solid border-slate-500">
              <Typography>{desc}</Typography>
            </AccordionDetails>
          </Accordion>
        )
      )}
    </div>
  );
};

export default BiasTabPanel;
