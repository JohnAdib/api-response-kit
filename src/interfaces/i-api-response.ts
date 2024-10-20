import type { IApiResponseNotification } from "./i-api-response-notification.js";
import type { IApiResponsePagination } from "./i-api-response-pagination.js";

export interface IApiResponse {
  okay: boolean;
  statusCode?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  pagination?: IApiResponsePagination;
  notification?: IApiResponseNotification;
  validation?: Record<string, string>;
}
