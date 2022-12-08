
# Its Live!
The App is now live at [https://spacex-launches-tracker.netlify.app/](https://spacex-launches-tracker.netlify.app)

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## How to run

- Install the deps by running `npm install` or `yarn`
- Run `npm start` to start the app in the development mode.\ 
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- 
- `npm run build` Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


## Wishlist
- Add async select to filter in homepage and comparison dialog.
- Embed the video in `video_link`
- Add dark theme toggle button. Currently app defaults to browser theme

## Encountered problems
- `https://api.spacex.land/graphql/` return error if `first_stage` is in query. Hence the details inside \
`first_stage` is not shown even if the table has the row.


## Stack
- React 18.2+
- Typescript
- Codegen
- TailwindCSS