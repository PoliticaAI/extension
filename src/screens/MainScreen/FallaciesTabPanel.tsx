import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ArticleAnalysis } from "../../api/analysis.api";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FallaciesTabPanel = ({ analysis }: { analysis: ArticleAnalysis }) => {
  return (
    <div className="p-4">
      <Typography className="font-bold text-3xl mb-4" color="primary">
        Logical Fallacies
      </Typography>

      {...Object.entries(analysis.gpt_response.fallacies).map(
        ([summary, desc]) => (
          <Accordion className="mb-4">
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              {summary}
            </AccordionSummary>
            <AccordionDetails>{desc}</AccordionDetails>
          </Accordion>
        )
      )}
    </div>
  );
};

export default FallaciesTabPanel;
