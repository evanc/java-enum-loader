var japa = require("java-parser");
var camelcase = require("camelcase");

module.exports = function(source) {
  // parse java and return the AST
  var javaTree = japa.parse(source);

  // Make a list of all of the ENUMs in this class
  var classEnums = javaTree.types[0].bodyDeclarations
    .filter(({ node }) => node === "EnumDeclaration")
    .reduce((obj, { name, enumvarants }) => {
      var enumObject = enumvarants.reduce((obj, curr) => {
        var enumName = curr.name.identifier;
        return {
          ...obj,
          [camelcase(enumName)]: enumName
        };
      }, {});

      return {
        ...obj,
        [camelcase(name.identifier)]: enumObject
      };
    }, {});

  var value = JSON.stringify(classEnums)
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");

  return `module.exports = ${value}`;
};
