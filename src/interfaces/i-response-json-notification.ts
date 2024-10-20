import { ResponseNotificationTypes } from "./response-notification-types";

export interface IResponseJsonNotification {
  text: string;
  title?: string;
  type?: ResponseNotificationTypes;
}
