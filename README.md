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

### About the Project (Lithuanian)

Ši sistema skirta avių ūkio turėtojams. BackEnd kodą galite rasti: https://github.com/Simkuniene/sheepBackend/
Administratoriai galės kurti/peržiūrėti duomenis apie avis, jų produktyvumą, gydymui naudotus vaistus ir jų išlauką prieš skerdimą ar pieno naudojimą maistui.

Backend'o resursai, kuriuos palaiko ši aplikacija:

GET
/sheep paduoda visas avis iš 'sheep' lentelės.
/sheep/:number paduoda duomenis apie konkrečią avį, pagal avies numerį iš 'sheep' lentelės.
/meds paduoda visus vaistus iš 'medicines' lentelės.
/births/:number paduoda duomenis apie avies, kurios numeris nurodytas, gimdymus iš 'births' lentelės.
/treatment/:number paduoda duomenis apie avies, kurios numeris nurodytas, naudotus vaistus iš 'treatment' lentelės.


POST 
/addSheep įrašo duomenis apie avį į 'sheep' lentelę.
/addMeds įrašo duomenis apie medikamentą į 'medicines' lentelę.
/addBirth įrašo duomenis apie gimdymą į 'births' lentelę.
/addTreatment įrašo duomenis apie naudotus vaistus į 'treatment' lentelę.

DELETE
/deleteSheep/:id ištrina avį pagal ID iš 'sheep' lentelės.
/deleteMed/:id ištrina vaistą pagal ID iš 'medicines' lentelės.

PUT
/sheepupdate/:number atnaujina duomenis apie avį 'sheep' lentelėje.

Sistema patogi, nes galime ne tik matyti visus įrašus apie laikomas avis, bet ir spustelėjus mugtuką "Apie", gauname pilną aprašymą apie konktečią avį, visus jos ėriavimusis, naudotus vaistus, ir tų vaistų išlauką. Prireikus kažkokių dažniau naudojamų vaistų , visada bus po ranka jų aprašymas, dozės ir išlaukos terminai.


