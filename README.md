# Convert typing name [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/convert-typing-name/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/convert-typing-name)

Convert the name of a Typescript typings package to it's npm package counterpart.

[![NPM Badge](https://nodei.co/npm/convert-typing-name.png)](https://npmjs.com/package/convert-typing-name)

## Install

```sh
npm install convert-typing-name
```

## Usage

```js
const typingName = require("convert-typing-name");

typingName("a");
//=> "@types/a"

typingName("@a/b");
//=> "@types/a__b"

typingName.from("@types/a");
//=> "a"

typingName.from("@types/a__b");
//=> "@a/b"
```

## API

### typingName(name)

Convert the name of a npm package to it's Typescript typings package counterpart.

#### name

Type: `string`

The npm package name to convert.

### typingName.from(name)

Convert the name of a Typescript typings package to it's npm package counterpart.

#### name

Type: `string`

The typings package name to convert.

## Similar

- [parse-pkg-name](https://github.com/Richienb/parse-pkg-name) - Parse and stringify package names.

## Migrating from 1.x

- A minimum version of Node.js 10 is required.
- `typingName.toTyping` is now `typingName`
- `typingName.fromTyping` is now `typingName.from`
