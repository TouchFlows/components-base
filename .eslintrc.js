module.exports = {
  ignorePatterns: ['**/components.d.ts', '**/package-lock.json'],
  parserOptions: {
    project: 'tsconfig.json',
    ecmaVersion: 2021,
  },

  plugins: ['simple-import-sort'],
  extends: [
    'plugin:@stencil/recommended', 'plugin:prettier/recommended'],
  rules: {
    "@stencil/async-methods": "error",
    "@stencil/ban-prefix": ["error", ["stencil", "stnl", "st"]],
    "@stencil/decorators-context": 0,
    "@stencil/decorators-style": [
      "error", {
        "prop": "inline",
        "state": "inline",
        "element": "inline",
        "event": "inline",
        "method": "multiline",
        "watch": "multiline",
        "listen": "multiline"
      }],
    "@stencil/dependency-suggestions": "error",
    "@stencil/element-type": "error",
    "@stencil/host-data-deprecated": "error",
    "@stencil/methods-must-be-public": "error",
    "@stencil/no-unused-watch": "error",
    "@stencil/own-methods-must-be-private": "error",
    "@stencil/own-props-must-be-private": "error",
    "@stencil/prefer-vdom-listener": "error",
    "@stencil/props-must-be-public": "error",
    "@stencil/props-must-be-readonly": "error",
    "@stencil/render-returns-host": "error",
    "@stencil/required-jsdoc": "error",
    "@stencil/reserved-member-names": "error",
    "@stencil/single-export": "error",
    "@stencil/strict-mutable": "error",
    "react/jsx-no-bind": 0,
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
}
