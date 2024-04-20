import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Typography,
} from "@mui/material";
import { ArticleAnalysis } from "../../api/analysis.api";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckIcon from '@mui/icons-material/Check';

const FallaciesTabPanel = ({ analysis }: { analysis: ArticleAnalysis }) => {
  return (
    <div className="p-4">
      <Typography className="font-bold text-3xl mb-4" color="primary">
        Logical Fallacies
      </Typography>

      {analysis.gpt_response.fallacies.length === 0 ? (

      analysis.gpt_response.fallacies.map(
        ({bias, explanation}, idx) => (
          <Accordion className="mb-4">
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Fallacy {idx + 1}: {bias}</Typography>
            </AccordionSummary>
            <AccordionDetails className="border-0 border-t-[1px] border-solid border-slate-500">
              <Typography>{explanation}</Typography>
            </AccordionDetails>
          </Accordion>
        )
      )) : (
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="info">
          No fallacies found in this article.
        </Alert>
      )}

    </div>
  );
};

export default FallaciesTabPanel;
