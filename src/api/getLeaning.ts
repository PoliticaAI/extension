import API_URL from "../config";

export interface Leaning {
  rating: number;
}

const getLeaning = async (article: URL): Promise<Leaning> => {
  const url =
    API_URL +
    "get_leaning?" +
    new URLSearchParams({ url: article.href });

  const response = await fetch(url);
  const json = await response.json();
  
  return json;
};

export default getLeaning;
