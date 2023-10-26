import { API_URL } from "./analysis.api";

export interface Summary {
  summary: string;
}

const getSummary = async (article: URL): Promise<Summary> => {
  const url =
    API_URL + "summarize?" + new URLSearchParams({ url: article.href });

  const response = await fetch(url);
  const json = await response.json();

  return json;
};

export default getSummary;
