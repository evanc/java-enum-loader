<h1>Java Enum loader for Webpack</h1>

Loads all of the Enum types declared in a Java source file.

This may be useful if you're writing code that interfaces with a Java app and you want to be able to communicate the same values between the front- and back-end.

### Usage

```bash
npm install --save-dev json-loader
```

```js
module.exports = {
  module: {
    loaders: [
      {
        test: /\.java$/,
        loader: "java-enum-loader"
      }
    ]
  }
};
```

```js
var enumValues = require("src/MyClass.java");

// if MyClass.java defines an enum called "Colors" with values:
//
// RED, GREEN, NAVY_BLUE
//
// enumValues will now look like:
//
// { colors: {red: "RED", green: "GREEN", navyBlue: "NAVY_BLUE"}}
```
