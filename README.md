# charts-reusable-component

# [Live demo](https://joyful-sunburst-19fbd5.netlify.app/)
## Goals

- Try to make the component as functional as possible in the shortest amount of time. It took me about 6.5 hours, including tests with Jest and refactoring.
- Learn better to build and develop with Webpack.
- Use PostCSS no matter what... it's a must nowdays.
- Try to do TDD with tests written for the bars' height calculations.

## Pending

- Refactor some of the code to be more comply with Functional Programming principles.
- Recreate the component to WebComponent with Lit.

### Installation

```sh
npm install
```

### Start Dev Server

```sh
npm start
```

### Build Prod Version

```sh
npm run build
```

### Features

- ES6 Support via [babel](https://babeljs.io/) (v7)
- JavaScript Linting via [eslint](https://eslint.org/)
- SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
- Autoprefixing of browserspecific CSS rules via [postcss](https://postcss.org/) and [postcss-preset-env](https://github.com/csstools/postcss-preset-env)
- Style Linting via [stylelint](https://stylelint.io/)

# Frontend Mentor - Expenses chart component

![Design preview for the Expenses chart component coding challenge](./expenses-chart-component-main/design/desktop-preview.jpg)

## The challenge

Your challenge is to build out this bar chart component and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day's bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page
- **Bonus**: See dynamically generated bars based on the data provided in the local JSON file (the `expenses` variable in `chartbars.js`)
