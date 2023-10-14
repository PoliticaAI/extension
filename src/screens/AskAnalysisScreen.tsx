import { TextField, Typography, Button } from "@mui/material";
import { useState } from "react";
import isLink from "../util/isLink";
import { useNavigate, useSearchParams } from "react-router-dom";
import ErrorIcon from "@mui/icons-material/Error";

const AskAnalysisScreen = () => {
  const [link, setLink] = useState<string>("");
  const [errorText, setErrorText] = useState<null | string>(null);

  const navigate = useNavigate();

  const analyze = () => {
    if (!link || !isLink(link)) {
      setErrorText("Invalid link!");
      return;
    }

    navigate(`/start?href=${link}`);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Typography
        variant="h1"
        color="primary"
        className="text-2xl font-bold mb-6"
      >
        Enter a link to get started!
      </Typography>

      <TextField
        label="Link"
        variant="outlined"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        className="mb-6 w-60"
        error={!!errorText}
      />

      {errorText && (
        <Typography
          className="-mt-4 mb-6 text-xs text-left w-60 flex items-center"
          sx={{ color: "error.main" }}
        >
          <ErrorIcon className="w-4 mr-1" />
          {errorText}
        </Typography>
      )}

      <Button variant="contained" onClick={analyze}>
        Run Analysis
      </Button>
    </div>
  );
};

export default AskAnalysisScreen;
