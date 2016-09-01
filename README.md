# Kanban App

## Dependencies

[Node.js](https://nodejs.org/en/) is a pre-requisite for serving files in development as well as building the project for deployment. To install the dependencies in package.json, run:

```
  $ npm i
```
## IDE

For Visual Studio Code, you can get IntelliSense for React by running:

```
  $ npm i typings --global
  $ cd [the-project-directory]
  $ typings install dt~react --global
  $ npm i typescript@next
```

## Local Development
```
  $ npm start
```
The app will be available at [http://localhost:3000](http://localhost:3000)

## Production Build
```
  $ npm run build
```

## Running the Production Build locally

The integrity of the build process can be checked by serving the "dist" directory via [Express](http://expressjs.com).

```
  $ node dist-server.js
```

## Run Tests

```
  $ npm test
```
