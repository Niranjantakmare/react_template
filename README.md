## Download the starter kit

npx degit https://github.com/gopinav/React-TypeScript-Webpack-Starter my-app

## Install dependencies

cd my-app &&
yarn

## Run dev server

yarn start

## Build

yarn build

step 1 : git clone https://github.com/Niranjantakmare/ImageBazar_ReactJS_ContextAPi.git
step 2 : npm install

step 3: npm install -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript

step 4: npm install -D webpack webpack-cli webpack-dev-server html-webpack-plugin

step 5: npm install -D babel-loader

step 6:
"scripts": {
"start": "webpack serve --config webpack/webpack.config.js --open",
"test": "echo \"Error: no test specified\" && exit 1"
},

step7 : CSS Loader

npm install -D css-loader style-loader

step8:
npm install -D webpack-merge

killall -9 node

ESLINT- it is tool for identifying and reporting problematic patterns found in javascript code
In other words, ESLINT catches errors as when we are typing the code.

Linting is developer specific, there are hundreds of rules the you can enforce in a project.
based on your need

Install ESlit -
npm install -d eslint

supporting packages -
npm install -d eslint-plugin-react eslint-plugin-react-hooks

typescript eslint supporting packges install -
npm install -D @typescript-eslint/parser @typescript-eslint/eslint-plugin

npm install -d eslint-plugin-import eslint-plugin-jsx-ally

npm install eslint-plugin-import@latest --save-dev

Install formmatting plugin - Prettier -
npm install -D prettier eslint-config-prettier eslint-plugin-prettier

#husky is formatting and eslit common package for us
npm install -d husky@4 lint-staged
