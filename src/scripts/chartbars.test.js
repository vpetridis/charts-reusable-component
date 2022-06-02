import { getAmountByDay, getHeight } from "./chartbars";
/**
 * @jest-environment jsdom
 */

test("it returns the correct amount", () => {
  const expenses = [
    {
      mon: 10_000,
    },
    { tue: 13_000 },
    { wed: 50_000 },
    { thu: 35_000 },
    { fri: 18_000 },
    { sat: 40_000 },
    { sun: 18_000 },
  ];
  expect(getAmountByDay("mon", expenses)).toEqual(10_000);
  expect(getAmountByDay("tue", expenses)).toEqual(13_000);
});

test("it returns the correct height", () => {
  expect(getHeight(100, 50, 50)).toEqual(25);
  expect(getHeight(100, 100, 200)).toEqual(200);
  expect
});
