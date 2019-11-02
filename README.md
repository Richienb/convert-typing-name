# Convert typing name [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/convert-typing-name/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/convert-typing-name)

Convert the name of a Typescript typings package to it's npm package counterpart.

[![NPM Badge](https://nodei.co/npm/convert-typing-name.png)](https://npmjs.com/package/convert-typing-name)

## Install

```sh
npm install convert-typing-name
```

## Usage

```js
const { fromTyping, toTyping } = require("convert-typing-name");

fromTyping("@types/a");
//=> "a"

fromTyping("@types/a__b");
//=> "@a/b"

toTyping("a");
//=> "@types/a"

toTyping("@a/b");
//=> "@types/a__b"
```

## API

### fromTyping(name)

Convert the name of a Typescript typings package to it's npm package counterpart.

#### name

Type: `string`

The typings package name to convert.

### toTyping(name)

Convert the name of a npm package to it's Typescript typings package counterpart.

#### name

Type: `string`

The npm package name to convert.
