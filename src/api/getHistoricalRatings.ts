import API_URL from "../config";

export interface HistoricalRatings {
  factuality: number;
  political: number;
}

const getHistoricalRatings = async (article: URL): Promise<HistoricalRatings> => {
  const url =
    API_URL +
    "historical_ratings?" +
    new URLSearchParams({ url: article.href });

  const response = await fetch(url);
  const json = await response.json();
  
  return json;
};

export default getHistoricalRatings;
