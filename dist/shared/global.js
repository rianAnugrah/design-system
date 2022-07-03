"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalStyle = exports.bodyStyles = exports.fontUrl = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _styledComponents = require("styled-components");

var _styles = require("./styles");

var _templateObject, _templateObject2;

var fontUrl = 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900';
exports.fontUrl = fontUrl;
var bodyStyles = (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  font-family: ", ";\n  font-size: ", "px;\n  color: ", ";\n\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent;\n  -webkit-overflow-scrolling: touch;\n\n  * {\n    box-sizing: border-box;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-weight: ", ";\n    margin: 0;\n    padding: 0;\n  }\n\n  button,\n  input,\n  textarea,\n  select {\n    outline: none;\n    font-family: ", ";\n  }\n\n  sub,\n  sup {\n    font-size: 0.8em;\n  }\n\n  sub {\n    bottom: -0.2em;\n  }\n\n  sup {\n    top: -0.2em;\n  }\n\n  b,\n  em {\n    font-weight: ", ";\n  }\n\n  hr {\n    border: none;\n    border-top: 1px solid ", ";\n    clear: both;\n    margin-bottom: 1.25rem;\n  }\n\n  code,\n  pre {\n    font-family: ", ";\n    font-size: ", "px;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  code {\n    display: inline-block;\n    padding-left: 2px;\n    padding-right: 2px;\n    vertical-align: baseline;\n\n    color: ", ";\n  }\n\n  pre {\n    line-height: 18px;\n    padding: 11px 1rem;\n    white-space: pre-wrap;\n\n    background: rgba(0, 0, 0, 0.05);\n    color: ", ";\n    border-radius: 3px;\n    margin: 1rem 0;\n  }\n\n  &.ReactModal__Body--open {\n    overflow: hidden;\n    &.hide-intercom #intercom-container {\n      display: none;\n    }\n  }\n\n  .ReactModalPortal > div {\n    opacity: 0;\n  }\n\n  .ReactModalPortal .ReactModal__Overlay {\n    transition: all 200ms ease-in;\n\n    &--after-open {\n      opacity: 1;\n    }\n    &--before-close {\n      opacity: 0;\n    }\n  }\n"])), _styles.typography.type.primary, _styles.typography.size.s3, _styles.color.darkest, _styles.typography.weight.regular, _styles.typography.type.primary, _styles.typography.weight.bold, _styles.color.border, _styles.typography.type.code, _styles.typography.size.s2 - 1, _styles.color.secondary, _styles.color.darkest);
exports.bodyStyles = bodyStyles;
var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n body {\n   ", "\n }\n"])), bodyStyles);
exports.GlobalStyle = GlobalStyle;