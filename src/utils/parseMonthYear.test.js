import { parseMonthYear } from "./parseMonthYear";

describe("parseMonthYear", () => {
  it("parses a valid month and year", () => {
    const date = parseMonthYear("June 2022");
    expect(date.getFullYear()).toBe(2022);
    expect(date.getMonth()).toBe(5);
  });

  it("returns current date for Present", () => {
    const before = Date.now();
    const date = parseMonthYear("Present");
    const after = Date.now();
    expect(date.getTime()).toBeGreaterThanOrEqual(before);
    expect(date.getTime()).toBeLessThanOrEqual(after);
  });

  it("returns current date for empty input", () => {
    const before = Date.now();
    const date = parseMonthYear("");
    const after = Date.now();
    expect(date.getTime()).toBeGreaterThanOrEqual(before);
    expect(date.getTime()).toBeLessThanOrEqual(after);
  });

  it("returns current date for invalid input", () => {
    const date = parseMonthYear("NotAValidDate");
    expect(date).toBeInstanceOf(Date);
  });
});
