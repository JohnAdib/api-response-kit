import type { IResponseJson } from "..";

export const responseApiHello: IResponseJson = {
  okay: true,
  result: null,
  notification: {
    text: 'Welcome to our API. Hope you have a great time here. 🎉',
    title: 'Hello!'
  }
}
