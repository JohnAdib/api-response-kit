import { ResponseNotificationTypes } from "./response-notification-types.js";

export interface IResponseJsonNotification {
  text: string;
  title?: string;
  type?: ResponseNotificationTypes;
}
