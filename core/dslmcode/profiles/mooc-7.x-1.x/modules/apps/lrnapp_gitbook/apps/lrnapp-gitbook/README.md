# \<lrnapp-gitbook>

Gitbook application

## Install the lrnservice-gitbook microservice for development

Run submodule update to get the most recent version of the lrnservice-gitbook repo.

```
git submodule update --init --recursive
```

Install the dependencies

```
cd lrnservice-gitbook
npm install
```

Start the service

```
cd lrnservice-gitbook
npm start
```

Create a book. Make a POST request to `http://localhost:1337/api/books` with the following data:

```
{
    "title": "",
    "repo": "",
    "branch": "",
}
```

Once downloaded, follow the README.md file inside of the lrnservice-gitbook repo for setup instructions.

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your application locally.

## Viewing Your Application

```
$ polymer serve
```

## Building Your Application

```
$ polymer build
```

This will create a `build/` folder with `bundled/` and `unbundled/` sub-folders
containing a bundled (Vulcanized) and unbundled builds, both run through HTML,
CSS, and JS optimizers.

You can serve the built versions by giving `polymer serve` a folder to serve
from:

```
$ polymer serve build/bundled
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
