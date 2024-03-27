# Shopify Slugify

[![npm version](https://badge.fury.io/js/shopify-slugify.svg)](https://www.npmjs.com/package/shopify-slugify)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Overview

Shopify Slugify is a simple npm package that provides a function for creating slugs from strings. It replaces special characters, removes spaces, and converts text to a URL-friendly format.

## Installation

```bash
npm install shopify-slugify
```

## Usage in JavaScript/Node.js

Once the package is installed, you can use it in your JavaScript/Node.js code. Import the slugify function and call it with a string to generate a slug:

```js
import { slugify } from "shopify-slugify";

const inputString = "This is a Sample String!";
const slug = slugify(inputString);
console.log(slug);
// Output: this-is-a-sample-string
```

The slugify function takes a string as an argument and returns a slugified version of the input string. It performs the following transformations:

- Converts the string to lowercase.
- Replaces spaces with hyphens.
- Replaces special characters with their corresponding ASCII equivalents.
- Removes non-word characters (except for º and +).
- Replaces multiple hyphens with a single hyphen.
- Trims hyphens from the start and end of the resulting string.
