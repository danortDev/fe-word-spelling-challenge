This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# WORD SPELLING CHALLENGE

An app to improve your English vocabulary. It will present you with 10 scrambled
word, you will need to drag and drop the letters until you guess the right word.

The "sound" icon will give you the current word pronunciation as a hint.

## LIVE DEMO
You can find the app running [HERE](https://fe-word-spelling-challenge.herokuapp.com/)

## Running the project

To run the project locally you will need to create and `.env.local` file with
this variable

```
  # If you want to also run the local api
  REACT_APP_API_BASE_URL=localhost:4000
  # If you want to run it without running the api
  REACT_APP_API_BASE_URL=https://be-word-spelling-challenge.herokuapp.com/api/v1
```

Then you can run
```
  yarn install
  yarn start
```

## Available Scripts

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
