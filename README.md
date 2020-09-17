# pokemons-site
Pokemon card site in purescript

## Introduction

This reṕository has the purpose to show the purely functional development on a site based on a superset language called superscript and the popular library react.

This is a a test on the purescript development environment with react. As this is a sandbox of a cutting-edge technology, it is not recommended to use as source for production development.

The code is based on a previous version of [Taqtile frontend challenge](https://github.com/indigotech/taq-challenge) and adaptation from the excellent article [How to Write PureScript React Components to Replace JavaScript](https://thomashoneyman.com/articles/replace-react-components-with-purescript/) by Thomas Honeyman.

## Configuring environment

The nodejs and spago are ommited, they can be found on references.

First you need to setup purescript compiler.
```
npm install -g purescript
```

After, setup the spago package system:
```
npm install -g purescript
```

Finally install react, react-dom, and the purescript packages:

```
npm i -S react react-dom
spago install react-basic react-basic-dom react-basic-hooks
```
## Techinical stuff

The code will be atomic modularized. It will be transpiled in js and tested on localhost:3000. Further stuff not designed or implemented yet.

### References
[Purescript](https://www.purescript.org/)

[NPM setup](http://npm.github.io/installation-setup-docs/index.html)

[Spago Setup](https://github.com/purescript/spago)

[Taqtile frontend challenge](https://github.com/indigotech/taq-challenge)

[How to Write PureScript React Components to Replace JavaScript](https://thomashoneyman.com/articles/replace-react-components-with-purescript/)
