const API_URL = "http://localhost:5000/";

export interface ArticleAnalysis {
  ddg_response: {
    href: string;
    thumb: string;
    title: string;
    desc: string;
  }[];
  gpt_response: {
    fallacies: Record<string, string>;
    ranking: string[];
    reasons: Record<string, string>;
    title: string;
    top_image: string;
  };
}

export const startAnalysis = (
  url: string
): Promise<{ process_id: string; status_url: string }> => {
  return fetch(API_URL + "start_analysis", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      localStorage.setItem("process_id", data.process_id);

      return data;
    });
};

export const checkAnalysisStatus = (): Promise<{
  status: string;
  progress: number;
  result?: ArticleAnalysis;
}> => {
  const process_id = localStorage.getItem("process_id");
  if (!process_id) {
    return Promise.reject("Process ID not found");
  }

  return fetch(API_URL + `status/${process_id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    });
};
