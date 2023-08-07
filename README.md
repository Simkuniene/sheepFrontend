# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### About the Project

This system is designed for sheep farmers. You can find the BackEnd code here: https://github.com/Simkuniene/sheepBackend/. Administrators will be able to create/view data about sheep, their productivity, medications used for treatment, and their condition before shearing or using milk for food.

The BackEnd resources supported by this application are as follows:

GET
/sheep retrieves all sheep from the 'sheep' table.
/sheep/:number retrieves data about a specific sheep based on its number from the 'sheep' table.
/meds retrieves all medications from the 'medicines' table.
/births/:number retrieves data about the births of a sheep specified by the given number from the 'births' table.
/treatment/:number retrieves data about the medications used for a sheep specified by the given number from the 'treatment' table.

POST
/addSheep adds sheep data to the 'sheep' table.
/addMeds adds medication data to the 'medicines' table.
/addBirth adds data about a birth to the 'births' table.
/addTreatment adds data about medications used to the 'treatment' table.

DELETE
/deleteSheep/:id deletes a sheep with the given ID from the 'sheep' table.
/deleteMed/:id deletes a medication with the given ID from the 'medicines' table.

PUT
/sheepupdate/:number updates data about a sheep in the 'sheep' table.
This system is convenient because not only can we see all the records about the kept sheep, but also by clicking the "About" button, we get a full description of a particular sheep, all its offspring, medications used, and the withdrawal periods of those medications. If necessary, information about commonly used medications will always be readily available, including descriptions, doses, and withdrawal terms.

