"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = Link;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _Icon = require("./Icon");

var _styles = require("./shared/styles");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var linkStyles = (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  display: inline-block;\n  transition: transform 150ms ease-out, color 150ms ease-out;\n  text-decoration: none;\n\n  color: ", ";\n\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    transform: translateY(-1px);\n    color: ", ";\n  }\n  &:active {\n    transform: translateY(0);\n    color: ", ";\n  }\n\n  svg {\n    display: inline-block;\n    height: 1em;\n    width: 1em;\n    vertical-align: text-top;\n    position: relative;\n    bottom: -0.125em;\n    margin-right: 0.4em;\n  }\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n"])), _styles.color.secondary, (0, _polished.darken)(0.07, _styles.color.secondary), (0, _polished.darken)(0.1, _styles.color.secondary), function (props) {
  return props.containsIcon && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n      svg {\n        height: 1em;\n        width: 1em;\n        vertical-align: middle;\n        position: relative;\n        bottom: 0;\n        margin-right: 0;\n      }\n    "])));
}, function (props) {
  return props.secondary && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n      color: ", ";\n\n      &:hover {\n        color: ", ";\n      }\n\n      &:active {\n        color: ", ";\n      }\n    "])), _styles.color.mediumdark, _styles.color.dark, _styles.color.darker);
}, function (props) {
  return props.tertiary && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n      color: ", ";\n\n      &:hover {\n        color: ", ";\n      }\n\n      &:active {\n        color: ", ";\n      }\n    "])), _styles.color.dark, _styles.color.darkest, _styles.color.mediumdark);
}, function (props) {
  return props.nochrome && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2.default)(["\n      color: inherit;\n\n      &:hover,\n      &:active {\n        color: inherit;\n        text-decoration: underline;\n      }\n    "])));
}, function (props) {
  return props.inverse && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2.default)(["\n      color: ", ";\n\n      &:hover {\n        color: ", ";\n      }\n\n      &:active {\n        color: ", ";\n      }\n    "])), _styles.color.lightest, _styles.color.lighter, _styles.color.light);
}, function (props) {
  return props.isButton && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2.default)(["\n      border: 0;\n      border-radius: 0;\n      background: none;\n      padding: 0;\n      font-size: inherit;\n    "])));
});

var LinkInner = _styledComponents.default.span(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n"])), function (props) {
  return props.withArrow && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2.default)(["\n      > svg:last-of-type {\n        height: 0.7em;\n        width: 0.7em;\n        margin-right: 0;\n        margin-left: 0.25em;\n        bottom: auto;\n        vertical-align: inherit;\n      }\n    "])));
});

var LinkA = _styledComponents.default.a(_templateObject10 || (_templateObject10 = (0, _taggedTemplateLiteral2.default)(["\n  ", ";\n"])), linkStyles);

var LinkButton = _styledComponents.default.button(_templateObject11 || (_templateObject11 = (0, _taggedTemplateLiteral2.default)(["\n  /* reset button styles */\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n\n  ", ";\n"])), linkStyles);

var applyStyle = function applyStyle(LinkWrapper) {
  return LinkWrapper && (0, _styledComponents.default)(function (_ref) {
    var containsIcon = _ref.containsIcon,
        inverse = _ref.inverse,
        nochrome = _ref.nochrome,
        secondary = _ref.secondary,
        tertiary = _ref.tertiary,
        linkWrapperRest = (0, _objectWithoutProperties2.default)(_ref, ["containsIcon", "inverse", "nochrome", "secondary", "tertiary"]);
    return /*#__PURE__*/_react.default.createElement(LinkWrapper, linkWrapperRest);
  })(_templateObject12 || (_templateObject12 = (0, _taggedTemplateLiteral2.default)(["\n      ", ";\n    "])), linkStyles);
};
/**
 * Links can contains text and/or icons. Be careful using only icons, you must provide a text alternative via aria-label for accessibility.
 */


function Link(_ref2) {
  var isButton = _ref2.isButton,
      withArrow = _ref2.withArrow,
      LinkWrapper = _ref2.LinkWrapper,
      children = _ref2.children,
      rest = (0, _objectWithoutProperties2.default)(_ref2, ["isButton", "withArrow", "LinkWrapper", "children"]);

  var content = /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(LinkInner, {
    withArrow: withArrow
  }, children, withArrow && /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    icon: "arrowright"
  })));

  var StyledLinkWrapper = applyStyle(LinkWrapper);
  var SelectedLink = LinkA;

  if (LinkWrapper) {
    SelectedLink = StyledLinkWrapper;
  } else if (isButton) {
    SelectedLink = LinkButton;
  }

  return /*#__PURE__*/_react.default.createElement(SelectedLink, rest, content);
}

Link.defaultProps = {
  isButton: false,
  children: null,
  withArrow: false,
  containsIcon: false,
  LinkWrapper: undefined,
  inverse: false,
  nochrome: false,
  secondary: false,
  tertiary: false
};