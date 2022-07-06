import React from "react";
import styled from "styled-components";

import colors from "../utils/colors";

const Flex = styled.div`
  display: flex;
  /* align-content: center; */
  align-items: flex-start;
  /* width: 100%; */
  font-size: 0.75rem;
  flex-direction: column;
`;

const Text = styled.div`
  display: block;
  color: ${(props) => colors[props.color]};
`;

export default function StatusJobAdmin(props) {
  const { status, cancelled } = props;
  const statusOptions = [
    { label: "Freelancer needed", color: "lightBlue" },
    { label: "Awaiting freelancers", color: "purple" },
    { label: "Ready to recommend", color: "lightBlue" },
    { label: "Recommendation sent", color: "purple80" },
    { label: "Awaiting payment", color: "lightBlue" },
    { label: "Work in progress", color: "purple80" },
    { label: "Job submitted", color: "purple80" },
    { label: "Job completed", color: "green" },
  ];

  return (
    <Flex>
      <Text color={cancelled ? "statsRed" : statusOptions[status].color}>
        {cancelled ? "Cancelled" : statusOptions[status].label}
      </Text>
    </Flex>
  );
}
