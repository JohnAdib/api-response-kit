import { ApiResponseNotificationTypes } from "./api-response-notification-types.js";

export interface IApiResponseNotification {
  text: string;
  title?: string;
  type?: ApiResponseNotificationTypes;
}
