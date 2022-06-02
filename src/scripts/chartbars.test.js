import { findMaxAmount, getAmountByDay, getHeight } from "./chartbars";
/**
 * @jest-environment jsdom
 */
const expenses = [
  {
    mon: 100,
  },
  { tue: 200 },
  { wed: 470 },
  { thu: 180 },
  { fri: 142 },
  { sat: 240 },
  { sun: 130 },
];
test("it returns the correct amount", () => {
  expect(getAmountByDay("mon", expenses)).toEqual(100);
  expect(getAmountByDay("tue", expenses)).toEqual(200);
});

test("it returns the correct height", () => {
  expect(getHeight(100, 50, 50)).toEqual(25);
  expect(getHeight(100, 100, 200)).toEqual(200);
  expect;
});

test("find max amount", () => {
  expect(findMaxAmount(expenses)).toEqual(470);
});
