const { v4 } = require("uuid");
const maxBarHeight = 650;
const totalMonthAmount = 227.33;
const expenses = [
  {
    mon: 17.45,
  },
  { tue: 34.91 },
  { wed: 52.36 },
  { thu: 31.07 },
  { fri: 23.39 },
  { sat: 43.28 },
  { sun: 25.48 },
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


const createInfoElement = (amount) => {
  const infobox = document.createElement("div");
  infobox.className = "infobox";
  infobox.textContent = `$${amount}`;
  const id = v4();
  infobox.setAttribute("data-infobox", id);
  return [id, infobox];
};
const getElementByAttr = (el, attr) => el.getAttribute(attr);

const highestExpense = findMaxAmount(expenses);

getBars().forEach(async (bar) => {
  const amount = getAmountByDay(bar.getAttribute("data-day"), expenses);
  const height = getHeight(totalMonthAmount, amount, maxBarHeight);
  const [id, infobox] = createInfoElement(amount);
  bar.before(infobox);
  bar.addEventListener("mouseover", function showInfo() {
    infobox.classList.add("show");
  });
  bar.addEventListener("mouseleave", function showInfo() {
    infobox.classList.remove("show");
  });
  bar.setAttribute("data-amount", amount);

  Number(getElementByAttr(bar, "data-amount")) === highestExpense &&
    getSingleBar(getElementByAttr(bar, "data-day")).classList.add("highest-amount");

  getSingleBar(getElementByAttr(bar, "data-day")).style.setProperty("height", `${height}px`);
});
