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
export const getBars = () => Array.from(document.querySelectorAll("[data-day]"));

export const getSingleBar = (attr) => document.querySelector(`[data-day="${attr}"]`);

console.log(getSingleBar("tue"));

export const getAmountByDay = (day, expenses) => {
  // eslint-disable-next-line no-prototype-builtins
  return expenses.filter((exp) => exp.hasOwnProperty(day))[0][day];
};

export const getHeight = (sum, expenses, maxBarHeight) =>
  Math.round((expenses / sum) * maxBarHeight);

const getValue = (obj) => Object.values(obj)[0];

export const findMaxAmount = (expenses) => {
  const values = expenses.map((exp) => getValue(exp));
  const highestAmount = Math.max(...values);
  return highestAmount;
};

const compose =
  (...fns) =>
  (initial) =>
    fns.reduce((fn, current) => current(fn), initial);
const setBarHeight = compose(getSingleBar);

const highestExpense = findMaxAmount(expenses);

getBars().forEach(async (bar) => {
  const amount = getAmountByDay(bar.getAttribute("data-day"), expenses);
  const height = getHeight(470, amount, 150);

  bar.setAttribute("data-amount", amount);

  console.log(Number(bar.getAttribute("data-amount")));
  Number(bar.getAttribute("data-amount")) === highestExpense &&
    getSingleBar(bar.getAttribute("data-day")).classList.add("highest-amount");

  console.log(getSingleBar(bar.getAttribute("data-day")));

  getSingleBar(bar.getAttribute("data-day")).style.setProperty("height", `${height}px`);
});
