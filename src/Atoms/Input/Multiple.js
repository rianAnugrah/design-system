import React from "react";
import styled from "styled-components";

import { Spacer, Tag, Text, Icon, Row } from "../";
import InputText from "./Text";
import colors from "../utils/colors";

/**
 * Multiple
 *
 * @param {Object} props -
 * @param {[]} props.value - list of values
 * @param {React.CSSProperties} [props.rootStyle] - to override container CSS
 * @param {React.CSSProperties} [props.elementStyle] - to override each value CSS
 */

const Root = styled.div`
  width: 100%;
`;

const Values = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export default function Multiple(props) {
  const {
    value,
    editable,
    rootStyle,
    onBlur,
    onFocus,
    inputHeight,
    inputBorderRadius,
  } = props;
  const [newValue, setNewValue] = React.useState("");

  const [listValue, setListValue] = React.useState(value);

  const handleAdd = (e) => {
    const result = listValue.filter((val) => val === e.target.value);
    if (result.length === 0) {
      setListValue([...listValue, e.target.value]);
    }
  };

  const handleDelete = (value) => {
    const result = listValue.filter((val) => val !== value);
    setListValue(result);
  };

  React.useEffect(() => {
    setListValue(value);
  }, [value]);

  React.useEffect(() => {
    if (typeof props.onGetValue === "function") {
      props.onGetValue(listValue);
    }
  }, [listValue]);

  return (
    <Root style={rootStyle}>
      {editable && (
        <InputText
          {...props}
          value={newValue}
          onChange={(e) => {
            setNewValue(e.target.value === "," ? "" : e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.keyCode === 188) {
              handleAdd(e);
              setNewValue("");
            }
          }}
          onBlur={(e) => {
            if (e.target.value !== "") {
              handleAdd(e);
              setNewValue("");
            }

            if (typeof onBlur === "function") {
              onBlur(e);
            }
          }}
          onFocus={onFocus}
          height={inputHeight}
          borderRadius={inputBorderRadius}
        />
      )}

      {props.guide ? (
        <>
          <Spacer size="8" display="block" />
          <Text _as="b3" color="black40">
            {props.guide}
          </Text>
        </>
      ) : null}

      {listValue?.length > 0 && <Spacer size="8" display="block" />}

      <Values>
        {listValue &&
          listValue.map((val, i) => (
            <Tag
              key={i}
              editable={editable}
              style={{
                background: colors.white,
                marginRight: props.spacing || "16px",
                marginBottom: props.spacing || "16px",
              }}
              hover
              hoverBorder="blue90"
            >
              <Row alignItems="center" noWrap>
                <Text _as="b3" color="black80" hoverColor="black100" ellipsis>
                  {val}
                </Text>{" "}
                {editable && (
                  <>
                    <Spacer size="5" />
                    <Icon
                      name="x"
                      hover
                      hoverFill="blue90"
                      onClick={() => handleDelete(val)}
                      clickable
                    />
                  </>
                )}
              </Row>
            </Tag>
          ))}
      </Values>
    </Root>
  );
}
