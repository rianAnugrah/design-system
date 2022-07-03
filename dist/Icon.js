"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = Icon;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _icons = require("./shared/icons");

var _templateObject, _templateObject2;

var Svg = _styledComponents.default.svg(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  display: ", ";\n  vertical-align: middle;\n\n  shape-rendering: inherit;\n  transform: translate3d(0, 0, 0);\n"])), function (props) {
  return props.block ? 'block' : 'inline-block';
});

var Path = _styledComponents.default.path(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  fill: currentColor;\n"])));
/**
 * An Icon is a piece of visual element, but we must ensure its accessibility while using it.
 * It can have 2 purposes:
 *
 * - *decorative only*: for example, it illustrates a label next to it. We must ensure that it is ignored by screen readers, by setting `aria-hidden` attribute (ex: `<Icon icon="check" aria-hidden />`)
 * - *non-decorative*: it means that it delivers information. For example, an icon as only child in a button. The meaning can be obvious visually, but it must have a proper text alternative via `aria-label` for screen readers. (ex: `<Icon icon="print" aria-label="Print this document" />`)
 */


function Icon(_ref) {
  var icon = _ref.icon,
      block = _ref.block,
      props = (0, _objectWithoutProperties2.default)(_ref, ["icon", "block"]);
  return /*#__PURE__*/_react.default.createElement(Svg, Object.assign({
    viewBox: "0 0 1024 1024",
    width: "20px",
    height: "20px",
    block: block
  }, props), /*#__PURE__*/_react.default.createElement(Path, {
    d: _icons.icons[icon]
  }));
}

Icon.defaultProps = {
  block: false
};