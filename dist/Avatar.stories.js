"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Large = exports.Loading = exports.Initials = exports.Sizes = exports.Standard = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Avatar = require("./Avatar");

var _default = {
  title: "Design System/Avatar",
  component: _Avatar.Avatar
};
exports.default = _default;

var Standard = function Standard(args) {
  return /*#__PURE__*/_react.default.createElement(_Avatar.Avatar, args);
};

exports.Standard = Standard;
Standard.args = {
  size: "large",
  username: "Tom Coleman",
  src: "https://avatars2.githubusercontent.com/u/132554"
};

var Sizes = function Sizes(args) {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Avatar.Avatar, Object.assign({}, args, {
    size: "large"
  })), /*#__PURE__*/_react.default.createElement(_Avatar.Avatar, Object.assign({}, args, {
    size: "medium"
  })), /*#__PURE__*/_react.default.createElement(_Avatar.Avatar, Object.assign({}, args, {
    size: "small"
  })), /*#__PURE__*/_react.default.createElement(_Avatar.Avatar, Object.assign({}, args, {
    size: "tiny"
  })));
};

exports.Sizes = Sizes;
Sizes.args = {
  username: "Tom Coleman",
  src: "https://avatars2.githubusercontent.com/u/132554"
};

var Initials = function Initials(args) {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Avatar.Avatar, {
    username: "Tom Coleman"
  }), /*#__PURE__*/_react.default.createElement(_Avatar.Avatar, {
    username: "Dominic Nguyen"
  }), /*#__PURE__*/_react.default.createElement(_Avatar.Avatar, {
    username: "Kyle Suss"
  }), /*#__PURE__*/_react.default.createElement(_Avatar.Avatar, {
    username: "Michael Shilman"
  }));
};

exports.Initials = Initials;

var Loading = function Loading(args) {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Avatar.Avatar, Object.assign({}, args, {
    size: "large"
  })), /*#__PURE__*/_react.default.createElement(_Avatar.Avatar, Object.assign({}, args, {
    size: "medium"
  })), /*#__PURE__*/_react.default.createElement(_Avatar.Avatar, Object.assign({}, args, {
    size: "small"
  })), /*#__PURE__*/_react.default.createElement(_Avatar.Avatar, Object.assign({}, args, {
    size: "tiny"
  })));
};

exports.Loading = Loading;
Loading.args = {
  loading: true
};

var Large = function Large(args) {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Avatar.Avatar, {
    loading: true,
    size: "large"
  }), /*#__PURE__*/_react.default.createElement(_Avatar.Avatar, {
    size: "large",
    username: "Tom Coleman"
  }), /*#__PURE__*/_react.default.createElement(_Avatar.Avatar, {
    size: "large",
    username: "Tom Coleman",
    src: "https://avatars2.githubusercontent.com/u/132554"
  }));
};

exports.Large = Large;