import React from "react";
import { Label, Spacer } from "../";
import { Icon } from "..";

import {
  IconContainer,
  Root,
  SuccessText,
  TextareaInput,
  Counter,
  TextareaInputBasic,
} from "./Shared";
import Text from "../Text/Text";

/**
 * Textarea
 *
 * @param {Object} props - React props
 * @param {String} [props.name] - name of textarea
 * @param {String} props.value - content of textarea
 * @param {Function} [props.onChange] - change handler
 * @param {Function} [props.onBlur] - blur handler
 * @param {Boolean} [props.disabled] - disabled the textarea
 * @param {Boolean} [props.noBorder] - make the textarea without border
 * @param {String} [props.cursor] - change the cursor on hover
 * @param {String} [props.padding] - padding
 * @param {String} [props.margin] - margin
 * @param {boolean} [props.fluid] - width 100% or not
 * @param {React.CSSProperties} [props.style] - CSS style
 * @param {string} [props.placeholder] - placeholder
 * @param {number} [props.maxLength] - maximum char
 * @param {boolean} [props.hasCounter] - to show counter
 */
export default function Textarea(props) {
  const {
    id,
    name,
    icon,
    error,
    success,
    label,
    labelUppercase = true,
    minRows,
    maxRows,
    onChange,
    maxLength,
    hasCounter,
    fluid,
    description,
    isHtml,
    errorMessage,
    dataCy,
    rootMargin,
    borderRadius = "5px",
    ...rest
  } = props;

  const handleChange = (e) => {
    if (e.target.value.length !== maxLength && onChange) {
      onChange(e);
    }
  };

  return (
    <>
      {label && (
        <Label {...rest}>{labelUppercase ? label.toUpperCase() : label}</Label>
      )}
      {description ? (
        <>
          <Spacer size="4" display="block" />
          <Text _as="s6" color="black80" isHtml={isHtml}>
            {description}
          </Text>
          <Spacer size="8" display="block" />
        </>
      ) : null}
      <Root {...props} fluid={fluid} margin={rootMargin}>
        {props.basic ? (
          <TextareaInputBasic
            {...props}
            type="text"
            name={name}
            id={id}
            onChange={(e) => handleChange(e)}
            data-cy={dataCy}
            height={props.height}
            borderRadius={borderRadius}
          />
        ) : (
          <TextareaInput
            minRows={minRows || 3}
            {...props}
            maxRows={maxRows || 100}
            type="text"
            name={name}
            id={id}
            onChange={(e) => handleChange(e)}
            data-cy={dataCy}
            borderRadius={borderRadius}
          />
        )}
        {icon && (
          <IconContainer>
            <Icon name={icon} fill={error ? "red" : success && "green"} />
          </IconContainer>
        )}
        {hasCounter && (
          <Counter>
            <Text _as="b3" color="black80" inline>
              {props.value.length}/{maxLength || 1000}
            </Text>
          </Counter>
        )}
        {success && <SuccessText>{success}</SuccessText>}
      </Root>
      {error ? (
        <>
          <Text _as="b3" color="red">
            {errorMessage}
          </Text>
        </>
      ) : null}
    </>
  );
}
