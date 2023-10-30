export const API_URL = "http://api.politica-ai.tech/";

export interface ArticleAnalysis {
  title: string;
  ddg_response: {
    href: string;
    thumb: string;
    title: string;
    desc: string;
  }[];
  gpt_response: {
    rating: string;
    fallacies: { bias: string; explanation: string }[];
    reasons: { reason: string; explanation: string }[];
    summary: string;
  };
  historical: {
    bias: number;
    reliability: number;
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
