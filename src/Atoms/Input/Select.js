import React from "react";
import ReactSelect from "react-select";

import colors from "../utils/colors";

const customStyles = ({ height, borderRadius, optionPaddingTop } = {}) => {
  return {
    control: (styles, { selectProps }) => ({
      ...styles,
      minHeight: "32px",
      height: height || "32px",
      borderRadius: borderRadius || "5px",
      margin: 0,
      fontWeight: "normal",
      border: `${selectProps.isFilter ? "0px" : "1px"} solid ${
        selectProps.error
          ? colors.red
          : selectProps.isDisabled
          ? colors.black50
          : colors.black10
      }`,
      boxShadow: `${
        selectProps.isFilter ? "0px 2px 3px rgba(0, 0, 0, 0.1)" : "none"
      } `,
      backgroundColor: `${selectProps.isDisabled ? colors.black10 : "#ffffff"}`,
      color: `${colors.red}`,

      ":hover": {
        ...styles[":hover"],
        border: `${selectProps.isFilter ? "0px" : "1px"} solid ${
          selectProps.error ? colors.red : colors.blue90
        } !important`,
        // boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      },
    }),
    valueContainer: (styles) => ({
      ...styles,
      padding: "0px 16px",
    }),
    singleValue: (styles, { selectProps }) => ({
      ...styles,
      color: selectProps.isDisabled ? colors.black50 : colors.black,
    }),
    dropdownIndicator: (styles, { selectProps }) => ({
      ...styles,
      color: selectProps.isDisabled ? colors.black100 : colors.black5,
      height: "32px",
      padding: "6px",
    }),
    menu: (styles) => ({ ...styles, borderRadius: borderRadius || "5px" }),
    menuList: (styles) => ({
      ...styles,
      maxHeight: "230px",
      paddingTop: 0,
      paddingBottom: 0,
    }),
    option: (styles, { isDisabled, isFocused, isSelected }) => ({
      ...styles,
      paddingLeft: 16,
      paddingTop: optionPaddingTop,
      height: height || "32px",
      borderRadius: borderRadius || "5px",
      backgroundColor: isDisabled
        ? colors.black5
        : isSelected
        ? colors.blue
        : isFocused
        ? colors.black5
        : "#ffffff",
      color: isDisabled
        ? colors.black100
        : isSelected
        ? colors.white
        : colors.black50,
      cursor: isDisabled ? "not-allowed" : "default",
      ":hover": {
        ...styles[":hover"],
        backgroundColor: !isSelected && colors.black5,
        color: !isSelected && colors.black,
      },
    }),
    indicatorSeparator: () => ({ display: "none" }),
    placeholder: (styles, { selectProps }) => ({
      ...styles,
      color: selectProps.error ? colors.red : colors.grey,
      margin: 0,
    }),
  };
};

/**
 * Select
 *
 * @param {Object} props
 * @param {Boolean} [props.disabled]
 * @param {*} [props.isFilter]
 * @param {Array} props.options
 * @param {*} props.value
 * @param {*} [props.error]
 * @param {Function} [props.onChange]
 * @param {Function} [props.onClear]
 * @param {String} [props.placeholder]
 * @param {React.CSSProperties} [props.style]
 */
export default function Select(props) {
  const {
    disabled,
    isFilter,
    options,
    value,
    error,
    placeholder,
    onChange,
    onClear,
    onFocus,
    style,
    controlShouldRenderValue = true,
    dataCy,
    dropdownCustomStyle,
  } = props;

  return (
    <div style={style} data-cy={dataCy}>
      <ReactSelect
        // isClearable={true}
        isDisabled={disabled}
        isFilter={isFilter}
        styles={customStyles(dropdownCustomStyle)}
        options={options}
        value={value}
        error={error}
        onChange={onChange}
        onFocus={onFocus}
        onClear={onClear}
        placeholder={placeholder}
        controlShouldRenderValue={controlShouldRenderValue}
      />
    </div>
  );
}
