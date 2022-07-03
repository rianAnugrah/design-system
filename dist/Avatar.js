"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Avatar = Avatar;
exports.sizes = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styles = require("./shared/styles");

var _animation = require("./shared/animation");

var _Icon = require("./Icon");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var sizes = {
  large: 40,
  medium: 28,
  small: 20,
  tiny: 16
};
exports.sizes = sizes;

var Image = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  background: ", ";\n  border-radius: 50%;\n  display: inline-block;\n  vertical-align: top;\n  overflow: hidden;\n  text-transform: uppercase;\n\n  height: ", "px;\n  width: ", "px;\n  line-height: ", "px;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  img {\n    width: 100%;\n    height: auto;\n    display: block;\n  }\n\n  svg {\n    position: relative;\n    bottom: -2px;\n    height: 100%;\n    width: 100%;\n    vertical-align: top;\n  }\n\n  path {\n    fill: ", ";\n    animation: ", " 1.5s ease-in-out infinite;\n  }\n"])), function (props) {
  return !props.loading ? 'transparent' : _styles.color.light;
}, sizes.medium, sizes.medium, sizes.medium, function (props) {
  return props.size === 'tiny' && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n      height: ", "px;\n      width: ", "px;\n      line-height: ", "px;\n    "])), sizes.tiny, sizes.tiny, sizes.tiny);
}, function (props) {
  return props.size === 'small' && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n      height: ", "px;\n      width: ", "px;\n      line-height: ", "px;\n    "])), sizes.small, sizes.small, sizes.small);
}, function (props) {
  return props.size === 'large' && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n      height: ", "px;\n      width: ", "px;\n      line-height: ", "px;\n    "])), sizes.large, sizes.large, sizes.large);
}, function (props) {
  return !props.src && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2.default)(["\n      background: ", ";\n    "])), !props.loading && '#37D5D3');
}, _styles.color.medium, _animation.glow); // prettier-ignore


var Initial = _styledComponents.default.div(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2.default)(["\n  color: ", ";\n  text-align: center;\n\n  font-size: ", "px;\n  line-height: ", "px;\n\n  ", "\n\n  ", "\n\n  ", "\n"])), _styles.color.lightest, _styles.typography.size.s2, sizes.medium, function (props) {
  return props.size === "tiny" && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2.default)(["\n    font-size: ", "px;\n    line-height: ", "px;\n  "])), _styles.typography.size.s1 - 2, sizes.tiny);
}, function (props) {
  return props.size === "small" && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2.default)(["\n    font-size: ", "px;\n    line-height: ", "px;\n  "])), _styles.typography.size.s1, sizes.small);
}, function (props) {
  return props.size === "large" && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2.default)(["\n    font-size: ", "px;\n    line-height: ", "px;\n  "])), _styles.typography.size.s3, sizes.large);
});

function Avatar(_ref) {
  var loading = _ref.loading,
      username = _ref.username,
      src = _ref.src,
      size = _ref.size,
      props = (0, _objectWithoutProperties2.default)(_ref, ["loading", "username", "src", "size"]);

  var avatarFigure = /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    icon: "useralt"
  });

  var a11yProps = {};

  if (loading) {
    a11yProps['aria-busy'] = true;
    a11yProps['aria-label'] = 'Loading avatar ...';
  } else if (src) {
    avatarFigure = /*#__PURE__*/_react.default.createElement("img", {
      src: src,
      alt: username
    });
  } else {
    a11yProps['aria-label'] = username;
    avatarFigure = /*#__PURE__*/_react.default.createElement(Initial, {
      size: size,
      "aria-hidden": "true"
    }, username.substring(0, 1));
  }

  return /*#__PURE__*/_react.default.createElement(Image, Object.assign({
    size: size,
    loading: loading,
    src: src
  }, a11yProps, props), avatarFigure);
}

Avatar.defaultProps = {
  loading: false,
  username: 'loading',
  src: null,
  size: 'medium'
};