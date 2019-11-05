# Chili Cookoff

A small Preact app for hosting your own Chili Cookoff!

## Setup

The app is setup to use Firebase as the database for entrants / winners. You'll need to make sure you have a Firestore setup with `entrants` and `winners` collections. The credentials should be setup as environment variables during the build process or a `.env` file locally.

## CLI Commands

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm start

# build for production with minification
npm run build

# test the production build locally
npx serve -s build

# run tests with jest and preact-render-spy
npm run test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).
