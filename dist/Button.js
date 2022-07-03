"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = Button;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

var _styles = require("./shared/styles");

var _animation = require("./shared/animation");

var _templateObject, _templateObject2, _templateObject3;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Text = _styledComponents.default.span(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  display: inline-block;\n  vertical-align: top;\n"])));

var Loading = _styledComponents.default.span(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  opacity: 0;\n"])));

var APPEARANCES = {
  PRIMARY: 'primary',
  PRIMARY_OUTLINE: 'primaryOutline',
  SECONDARY: 'secondary',
  SECONDARY_OUTLINE: 'secondaryOutline',
  TERTIARY: 'tertiary',
  OUTLINE: 'outline'
};
var SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium'
};

var StyledButton = _styledComponents.default.button(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  padding: ", ";\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  transition: all 150ms ease-out;\n  transform: translate3d(0,0,0);\n  vertical-align: top;\n  white-space: nowrap;\n  user-select: none;\n  opacity: 1;\n  margin: 0;\n  background: transparent;\n\n\n  font-size: ", "px;\n  font-weight: ", ";\n  line-height: 1;\n\n  ", "\n\n  ", " {\n    transform: scale3d(1,1,1) translate3d(0,0,0);\n    transition: transform 700ms ", ";\n    opacity: 1;\n  }\n\n  ", " {\n    transform: translate3d(0, 100%, 0);\n  }\n\n  svg {\n    height: ", "px;\n    width: ", "px;\n    vertical-align: top;\n    margin-right: ", "px;\n    margin-top: ", "px;\n    margin-bottom: ", "px;\n\n    /* Necessary for js mouse events to not glitch out when hovering on svgs */\n    pointer-events: none;\n  }\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", ";\n\n    ", ";\n\n    ", ";\n\n"])), function (props) {
  return props.size === SIZES.SMALL ? '8px 16px' : '13px 20px';
}, function (props) {
  return props.size === SIZES.SMALL ? _styles.typography.size.s1 : _styles.typography.size.s2;
}, _styles.typography.weight.extrabold, function (props) {
  return !props.isLoading && "\n      &:hover {\n        transform: translate3d(0, -2px, 0);\n        box-shadow: rgba(0, 0, 0, 0.2) 0 2px 6px 0;\n      }\n\n      &:active {\n        transform: translate3d(0, 0, 0);\n      }\n\n      &:focus {\n        box-shadow: ".concat((0, _polished.rgba)(_styles.color.primary, 0.4), " 0 1px 9px 2px;\n      }\n\n      &:focus:hover {\n        box-shadow: ").concat((0, _polished.rgba)(_styles.color.primary, 0.2), " 0 8px 18px 0px;\n      }\n    ");
}, Text, _animation.easing.rubber, Loading, function (props) {
  return props.size === SIZES.SMALL ? '14' : '16';
}, function (props) {
  return props.size === SIZES.SMALL ? '14' : '16';
}, function (props) {
  return props.size === SIZES.SMALL ? '4' : '6';
}, function (props) {
  return props.size === SIZES.SMALL ? '-1' : '-2';
}, function (props) {
  return props.size === SIZES.SMALL ? '-1' : '-2';
}, function (props) {
  return props.disabled && "\n      cursor: not-allowed !important;\n      opacity: 0.5;\n      &:hover {\n        transform: none;\n      }\n    ";
}, function (props) {
  return props.isUnclickable && "\n      cursor: default !important;\n      pointer-events: none;\n      &:hover {\n        transform: none;\n      }\n    ";
}, function (props) {
  return props.isLoading && "\n      cursor: progress !important;\n      opacity: 0.7;\n\n      ".concat(Loading, " {\n        transition: transform 700ms ").concat(_animation.easing.rubber, ";\n        transform: translate3d(0, -50%, 0);\n        opacity: 1;\n      }\n\n      ").concat(Text, " {\n        transform: scale3d(0, 0, 1) translate3d(0, -100%, 0);\n        opacity: 0;\n      }\n\n      &:hover {\n        transform: none;\n      }\n    ");
}, function (props) {
  return props.containsIcon && "\n      svg {\n        display: block;\n        margin: 0;\n      }\n      padding: ".concat(props.size === SIZES.SMALL ? '7' : '12', "px;\n    ");
}, function (props) {
  return props.appearance === APPEARANCES.PRIMARY && "\n      background: ".concat(_styles.color.primary, ";\n      color: ").concat(_styles.color.lightest, ";\n\n      ").concat(!props.isLoading && "\n          &:hover {\n            background: ".concat((0, _polished.darken)(0.05, _styles.color.primary), ";\n          }\n          &:active {\n            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;\n          }\n          &:focus {\n            box-shadow: ").concat((0, _polished.rgba)(_styles.color.primary, 0.4), " 0 1px 9px 2px;\n          }\n          &:focus:hover {\n            box-shadow: ").concat((0, _polished.rgba)(_styles.color.primary, 0.2), " 0 8px 18px 0px;\n          }\n        "), "\n    ");
}, function (props) {
  return props.appearance === APPEARANCES.SECONDARY && "\n      background: ".concat(_styles.color.secondary, ";\n      color: ").concat(_styles.color.lightest, ";\n\n      ").concat(!props.isLoading && "\n          &:hover {\n            background: ".concat((0, _polished.darken)(0.05, _styles.color.secondary), ";\n          }\n          &:active {\n            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;\n          }\n          &:focus {\n            box-shadow: ").concat((0, _polished.rgba)(_styles.color.secondary, 0.4), " 0 1px 9px 2px;\n          }\n          &:focus:hover {\n            box-shadow: ").concat((0, _polished.rgba)(_styles.color.secondary, 0.2), " 0 8px 18px 0px;\n          }\n        "), "\n    ");
}, function (props) {
  return props.appearance === APPEARANCES.TERTIARY && "\n      background: ".concat(_styles.color.tertiary, ";\n      color: ").concat(_styles.color.darkest, ";\n\n      ").concat(!props.isLoading && "\n          &:hover {\n            background: ".concat((0, _polished.darken)(0.05, _styles.color.tertiary), ";\n          }\n          &:active {\n            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;\n          }\n          &:focus {\n            box-shadow: ").concat((0, _polished.rgba)(_styles.color.tertiary, 0.4), " 0 1px 9px 2px;\n          }\n          &:focus:hover {\n            box-shadow: ").concat((0, _polished.rgba)(_styles.color.tertiary, 0.2), " 0 8px 18px 0px;\n          }\n        "), "\n    ");
}, function (props) {
  return props.appearance === APPEARANCES.OUTLINE && "\n      box-shadow: ".concat(_styles.color.medium, " 0 0 0 1px inset;\n      color: ").concat(_styles.color.dark, ";\n      background: transparent;\n\n      ").concat(!props.isLoading && "\n          &:hover {\n            box-shadow: ".concat(_styles.color.mediumdark, " 0 0 0 1px inset;\n          }\n\n          &:active {\n            background: ").concat(_styles.color.medium, ";\n            box-shadow: ").concat(_styles.color.medium, " 0 0 0 1px inset;\n            color: ").concat(_styles.color.darkest, ";\n          }\n          &:focus {\n            box-shadow: ").concat(_styles.color.medium, " 0 0 0 1px inset, ").concat((0, _polished.rgba)(_styles.color.secondary, 0.4), " 0 1px 9px 2px;\n          }\n          &:focus:hover {\n            box-shadow: ").concat(_styles.color.medium, " 0 0 0 1px inset, ").concat((0, _polished.rgba)(_styles.color.secondary, 0.2), " 0 8px 18px 0px;\n          }\n        "), ";\n    ");
}, function (props) {
  return props.appearance === APPEARANCES.PRIMARY_OUTLINE && "\n        box-shadow: ".concat(_styles.color.primary, " 0 0 0 1px inset;\n        color: ").concat(_styles.color.primary, ";\n\n        &:hover {\n          box-shadow: ").concat(_styles.color.primary, " 0 0 0 1px inset;\n          background: transparent;\n        }\n\n        &:active {\n          background: ").concat(_styles.color.primary, ";\n          box-shadow: ").concat(_styles.color.primary, " 0 0 0 1px inset;\n          color: ").concat(_styles.color.lightest, ";\n        }\n        &:focus {\n          box-shadow: ").concat(_styles.color.primary, " 0 0 0 1px inset, ").concat((0, _polished.rgba)(_styles.color.primary, 0.4), " 0 1px 9px 2px;\n        }\n        &:focus:hover {\n          box-shadow: ").concat(_styles.color.primary, " 0 0 0 1px inset, ").concat((0, _polished.rgba)(_styles.color.primary, 0.2), " 0 8px 18px 0px;\n        }\n      ");
}, function (props) {
  return props.appearance === APPEARANCES.SECONDARY_OUTLINE && "\n        box-shadow: ".concat(_styles.color.secondary, " 0 0 0 1px inset;\n        color: ").concat(_styles.color.secondary, ";\n\n        &:hover {\n          box-shadow: ").concat(_styles.color.secondary, " 0 0 0 1px inset;\n          background: transparent;\n        }\n\n        &:active {\n          background: ").concat(_styles.color.secondary, ";\n          box-shadow: ").concat(_styles.color.secondary, " 0 0 0 1px inset;\n          color: ").concat(_styles.color.lightest, ";\n        }\n        &:focus {\n          box-shadow: ").concat(_styles.color.secondary, " 0 0 0 1px inset,\n            ").concat((0, _polished.rgba)(_styles.color.secondary, 0.4), " 0 1px 9px 2px;\n        }\n        &:focus:hover {\n          box-shadow: ").concat(_styles.color.secondary, " 0 0 0 1px inset,\n            ").concat((0, _polished.rgba)(_styles.color.secondary, 0.2), " 0 8px 18px 0px;\n        }\n      ");
});

var ButtonLink = StyledButton.withComponent('a');

var applyStyle = function applyStyle(ButtonWrapper) {
  return ButtonWrapper && StyledButton.withComponent(function (_ref) {
    var containsIcon = _ref.containsIcon,
        isLoading = _ref.isLoading,
        isUnclickable = _ref.isUnclickable,
        rest = (0, _objectWithoutProperties2.default)(_ref, ["containsIcon", "isLoading", "isUnclickable"]);
    return /*#__PURE__*/_react.default.createElement(ButtonWrapper, rest);
  });
};

function Button(_ref2) {
  var isDisabled = _ref2.isDisabled,
      isLoading = _ref2.isLoading,
      loadingText = _ref2.loadingText,
      isLink = _ref2.isLink,
      children = _ref2.children,
      ButtonWrapper = _ref2.ButtonWrapper,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["isDisabled", "isLoading", "loadingText", "isLink", "children", "ButtonWrapper"]);

  var buttonInner = /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(Text, null, children), isLoading && /*#__PURE__*/_react.default.createElement(Loading, null, loadingText || 'Loading...'));

  var StyledButtonWrapper = _react.default.useMemo(function () {
    return applyStyle(ButtonWrapper);
  }, [ButtonWrapper]);

  var SelectedButton = StyledButton;

  if (ButtonWrapper) {
    SelectedButton = StyledButtonWrapper;
  } else if (isLink) {
    SelectedButton = ButtonLink;
  }

  return /*#__PURE__*/_react.default.createElement(SelectedButton, Object.assign({
    isLoading: isLoading,
    disabled: isDisabled
  }, props), buttonInner);
}

Button.defaultProps = {
  isLoading: false,
  loadingText: null,
  isLink: false,
  appearance: APPEARANCES.TERTIARY,
  isDisabled: false,
  isUnclickable: false,
  containsIcon: false,
  size: SIZES.MEDIUM,
  ButtonWrapper: undefined
};