import { describe, it, expect } from "vitest";
import { PUBLIC_APP_ROOT_URL, PUBLIC_SIGNUP_PATH } from "./astro-env";

describe("astro-env mock", () => {
  it("exports PUBLIC_APP_ROOT_URL as a string", () => {
    expect(typeof PUBLIC_APP_ROOT_URL).toBe("string");
  });

  it("PUBLIC_APP_ROOT_URL has the expected test value", () => {
    expect(PUBLIC_APP_ROOT_URL).toBe("https://test.example.com");
  });

  it("exports PUBLIC_SIGNUP_PATH as a string", () => {
    expect(typeof PUBLIC_SIGNUP_PATH).toBe("string");
  });

  it("PUBLIC_SIGNUP_PATH has the expected test value", () => {
    expect(PUBLIC_SIGNUP_PATH).toBe("/signup");
  });
});
