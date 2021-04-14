
# [🐙Github Compare](https://github.com/filipemelo2002/github-compare)
Github Compare is a web application that allows users to show comparisons of repositories selected by them on Github.

This App uses github [**GitHub API V3**](https://docs.github.com/en/rest) 

## 📦 Packages
### Configuration
* [ESlint](https://eslint.org/)
* [Prettier](https://prettier.io/)
* [Typescript](https://www.typescriptlang.org/)
### CSS
*  [ClayUI](https://clayui.com/)
* [styled-components](https://styled-components.com/) 
## Tests
* [Jest](https://jestjs.io/)
* [Testing Library](https://testing-library.com/)

## ⚙️Getting started


Clone this project and install the dependencies:
```bash
git clone https://github.com/filipemelo2002/github-compare.git
cd github-compare
npm install # or yarn install
```
### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## 📸Screenshots
![Screenshot github-compare](https://i.imgur.com/N8J3cdz.png)

![Screenshot github-compare](https://i.imgur.com/RKhMNqE.png)

![Screenshot github-compare](https://i.imgur.com/xE6loky.png)

![Screenshot github-compare](https://i.imgur.com/gBXkS8p.png)

![Screenshot github-compare](https://i.imgur.com/Q3AjysV.png)

## 🧑‍🏭Architecture
Below, you can see how the files are organized:
```bash
github-compare/
┣ public/
┃ ┣ favicon.ico
┃ ┣ index.html
┃ ┣ logo192.png
┃ ┗ logo512.png
┣ src/
┃ ┣ @types/
┃ ┣ __tests__/
┃ ┣ api/
┃ ┣ assets/
┃ ┣ components/
┃ ┣ pages/
┃ ┣ redux/
┃ ┣ services/
┃ ┣ styles/
┃ ┣ App.tsx
┃ ┣ index.tsx
┃ ┗ react-app-env.d.ts
┣ .eslintrc.json
┣ .gitignore
┣ .prettierrc
┣ README.md
┣ package.json
┣ tsconfig.json
┗ yarn.lock
```
### Components
Are inside components folder and each of them work individually.

### Pages
currently, there's only one page, Home, which is responsible for rendering all components.

### Tests
Are declared inside *\_\_tests\_\_* folder.

## 📃 License
The MIT License (MIT)