import { IApiResponse } from "../index.js";

export const responseApiError404: IApiResponse = {
  okay: false,
  data: null,
  notification: {
    text: "The endpoint you are looking for does not exist! Are you lost? 🧭",
    title: "Error 404 (⊙＿⊙')",
  },
};
