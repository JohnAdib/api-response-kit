import type { IResponseJson } from "..";

export const responseApiError404: IResponseJson = {
  okay: false,
  result: null,
  notification: {
    text: "The endpoint you are looking for does not exist! Are you lost? 🧭",
    title: "Error 404 (⊙＿⊙')",
  },
};
