import type { IApiResponse } from "../index.js";

export const responseApiHello: IApiResponse = {
  okay: true,
  data: null,
  notification: {
    text: "Welcome to our API. Hope you have a great time here. 🎉",
    title: "Hello!",
  },
};
