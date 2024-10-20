import { describe, expect, it } from "vitest";
import { responseApiError404 } from "./api-error-404.js";

describe("IResponseJson Structure", () => {
  it("should have correct structure for a 404 API error", () => {
    expect(responseApiError404).toMatchObject({
      okay: false,
      result: null,
      notification: {
        text: "The endpoint you are looking for does not exist! Are you lost? 🧭",
        title: "Error 404 (⊙＿⊙')",
      },
    });
  });

  it("should have a notification with a text and title", () => {
    expect(responseApiError404.notification).toBeDefined();
    expect(responseApiError404.notification?.text).toBe(
      "The endpoint you are looking for does not exist! Are you lost? 🧭",
    );
    expect(responseApiError404.notification?.title).toBe("Error 404 (⊙＿⊙')");
  });

  it("should not have a statusCode or validation", () => {
    expect(responseApiError404.statusCode).toBeUndefined();
    expect(responseApiError404.validation).toBeUndefined();
  });
});
