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
  const rating = parseInt(analysis.gpt_response.rating);

  return (
    <div className="p-4">
      <Typography className="font-bold text-3xl mb-4" color="primary">
        Article Bias
      </Typography>

      <div className="w-full h-4 bg-gradient-to-r from-blue-500 via-white to-red-500 relative mb-5">
        <ArrowDropUpIcon
          className="text-slate-800 text-5xl absolute top-0.5"
          style={{
            left: `calc(${rating + 10} / 20 * 100% - 1.5rem)`,
          }}
        />
      </div>

      <Typography className="font-semibold text-slate-800 text-center mb-5">
        Bias: {rating} (
        {rating < -2 ? "Left leaning" : rating > 2 ? "Right leaning" : "Center"}
        )
      </Typography>

      {...analysis.gpt_response.reasons.map(({ reason, explanation }, idx) => (
        <Accordion className="mb-4">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Reason {idx + 1}: {reason}</Typography>
          </AccordionSummary>
          <AccordionDetails className="border-0 border-t-[1px] border-solid border-slate-500">
            <Typography>{explanation}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default BiasTabPanel;
