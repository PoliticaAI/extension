import { Card, Link, Typography } from "@mui/material";
import { ArticleAnalysis } from "../../api/analysis.api";

const SimilarArticleTabPanel = ({
  analysis,
}: {
  analysis: ArticleAnalysis;
}) => {
  return (
    <div className="p-4">
      <Typography className="font-bold text-3xl mb-4" color="primary">
        Similar Articles
      </Typography>

      {...analysis.ddg_response.slice(0, 10).map((article) => (
        <Card className="mb-4 p-4 flex space-x-4 box-border">
          <img src={article.thumb} className="w-4 h-4 mt-1" />
          <div className="flex flex-col min-w-0 pr-2">
            <Link
              href={article.href}
              className="decoration-transparent text-black line-clamp-2"
            >
              {article.title}
            </Link>
            <Link
              href={article.href}
              className="decoration-transparent text-green-800 text-xs line-clamp-1 mb-2"
            >
              {article.href}
            </Link>
            <Typography className="text-sm text-gray-700">
              {article.desc}
            </Typography>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default SimilarArticleTabPanel;
