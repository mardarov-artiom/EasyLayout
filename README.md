#Project demo - [GitHub Pages.](https://mardarov-artiom.github.io/EasyLayout/)

---

##Description:

####Project is made for creating easy HTML layouts.

Easily build templates for web pages.<br>
After building, copy and paste markup and styles into destination project.

---

##Open source:

Project is fully open source. feel free to experiment.<br>

---

##Technology stack:

###Project was created with [`create-react-app`](https://create-react-app.dev/) using typescript presset.

As global state is used [React](https://reactjs.org/) built-in technology - [Global Context.](https://reactjs.org/docs/context.html)

For dynamic components styles is used [Styled Components](https://styled-components.com/)

---

##Installation:

###Project is based on  [Node Package Manager (npm)](https://www.npmjs.com/).

**Note: To use [npm](https://www.npmjs.com/) check if  [Node.js](https://nodejs.org/en/) is installed.**

If node.js and npm are installed, run the following command:

```
npm install or npm i
```

After all dependencies are installed, **run** one of the commands below:

---

##Available Scripts:

In the project directory, you can run:

###`npm start`

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

---

###`npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

--- 

###`npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

---

###`npm run predeploy`

Runs the `npm run build` script. Read above.

--- 

###`npm run deploy`

**Note: To run this script, first install github pages.**<br>
```
npm install gh-pages --save-dev
or
npm install -g gh-pages
```

Before running `npm run deploy` change homepage variable in **package.json** file

```json
{
  "homepage": "https://template-name.github.io/"
}
```

Runs the `gh-pages -d build` scripts

---

###`npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


---

## License

MIT © [Artiom Mardarov]()


