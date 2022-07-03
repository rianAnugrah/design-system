"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithIcon = exports.Error = exports.Neutral = exports.Warning = exports.Negative = exports.Positive = exports.AllBadges = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Badge = require("./Badge");

var _Icon = require("./Icon");

var _default = {
  title: 'Design System/Badge',
  component: _Badge.Badge
};
exports.default = _default;

var AllBadges = function AllBadges(args) {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Badge.Badge, {
    status: "positive"
  }, "Positive"), /*#__PURE__*/_react.default.createElement(_Badge.Badge, {
    status: "negative"
  }, "Negative"), /*#__PURE__*/_react.default.createElement(_Badge.Badge, {
    status: "neutral"
  }, "Neutral"), /*#__PURE__*/_react.default.createElement(_Badge.Badge, {
    status: "error"
  }, "Error"), /*#__PURE__*/_react.default.createElement(_Badge.Badge, {
    status: "warning"
  }, "Warning"), /*#__PURE__*/_react.default.createElement(_Badge.Badge, {
    status: "positive"
  }, /*#__PURE__*/_react.default.createElement(_Icon.Icon, args), "with icon"));
};

exports.AllBadges = AllBadges;
AllBadges.args = {
  icon: 'facehappy',
  inline: true
};
AllBadges.storyName = "all badges";

var Positive = function Positive() {
  return /*#__PURE__*/_react.default.createElement(_Badge.Badge, {
    status: "positive"
  }, "Positive");
};

exports.Positive = Positive;

var Negative = function Negative() {
  return /*#__PURE__*/_react.default.createElement(_Badge.Badge, {
    status: "negative"
  }, "Negative");
};

exports.Negative = Negative;

var Warning = function Warning() {
  return /*#__PURE__*/_react.default.createElement(_Badge.Badge, {
    status: "warning"
  }, "Warning");
};

exports.Warning = Warning;

var Neutral = function Neutral() {
  return /*#__PURE__*/_react.default.createElement(_Badge.Badge, {
    status: "neutral"
  }, "Neutral");
};

exports.Neutral = Neutral;

var Error = function Error() {
  return /*#__PURE__*/_react.default.createElement(_Badge.Badge, {
    status: "error"
  }, "Error");
};

exports.Error = Error;

var WithIcon = function WithIcon(args) {
  return /*#__PURE__*/_react.default.createElement(_Badge.Badge, args, /*#__PURE__*/_react.default.createElement(_Icon.Icon, args), "with icon");
};

exports.WithIcon = WithIcon;
WithIcon.args = {
  status: "warning",
  icon: "check",
  inline: true
};
WithIcon.storyName = "with icon";