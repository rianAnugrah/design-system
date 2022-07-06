import React from "react";
import styled from "styled-components";

import BriefContent from "./Content";

const Root = styled.div`
  display: block;
  /* height: calc(100vh - 450px); */
  /* overflow-y: auto; */
`;

/**
 * Brief
 *
 * @param {Object} props - component props
 */
export default function Brief(props) {
  const { children, style } = props;

  return <Root style={style}>{children}</Root>;
}

Brief.Content = BriefContent;
