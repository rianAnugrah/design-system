"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.All = exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _addonActions = require("@storybook/addon-actions");

var _Icon = require("./Icon");

var _Link = require("./Link");

var _StoryLinkWrapper = require("./StoryLinkWrapper");

var _templateObject;

var CustomLink = (0, _styledComponents.default)(_Link.Link)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  && {\n    color: red;\n  }\n"])));
var onLinkClick = (0, _addonActions.action)('onLinkClick');
var _default = {
  title: 'Design System/Link',
  component: _Link.Link
};
exports.default = _default;

var All = function All(args) {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Link.Link, {
    href: "https://storybook.js.org/tutorials/"
  }, "Default"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_Link.Link, {
    secondary: true,
    href: "https://storybook.js.org/tutorials/"
  }, "Secondary"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_Link.Link, {
    tertiary: true,
    href: "https://storybook.js.org/tutorials/"
  }, "tertiary"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_Link.Link, {
    nochrome: true,
    href: "https://storybook.js.org/tutorials/"
  }, "nochrome"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_Link.Link, {
    href: "https://storybook.js.org/tutorials/"
  }, /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    icon: "discord",
    "aria-hidden": true
  }), "With icon in front"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_Link.Link, {
    containsIcon: true,
    href: "https://storybook.js.org/tutorials/",
    "aria-label": "Toggle side bar"
  }, /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    icon: "sidebar",
    "aria-hidden": true
  })), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_Link.Link, {
    containsIcon: true,
    withArrow: true,
    href: "https://storybook.js.org/tutorials/"
  }, "With arrow behind"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("span", {
    style: {
      background: '#333'
    }
  }, /*#__PURE__*/_react.default.createElement(_Link.Link, {
    inverse: true,
    href: "https://storybook.js.org/tutorials/"
  }, "Inverted colors")), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_Link.Link, {
    isButton: true,
    onClick: onLinkClick
  }, "is actually a button"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_Link.Link, {
    tertiary: true,
    LinkWrapper: _StoryLinkWrapper.StoryLinkWrapper,
    href: "http://storybook.js.org"
  }, "has a LinkWrapper like GatsbyLink or NextLink"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(CustomLink, {
    tertiary: true,
    LinkWrapper: _StoryLinkWrapper.StoryLinkWrapper,
    href: "http://storybook.js.org"
  }, "has a LinkWrapper like GatsbyLink or NextLink with custom styling"));
};

exports.All = All;