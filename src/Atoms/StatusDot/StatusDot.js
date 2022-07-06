import React from "react";
import styled from "styled-components";
import colors from "../utils/colors";

const Flex = styled.div`
  display: flex;
  /* align-content: center; */
  align-items: center;
  /* width: 100%; */
  font-size: 0.75rem;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  display: block;
  background-color: ${(props) =>
    props.color ? colors[props.color] : colors.yellow};
  border-radius: 50%;
`;

const Text = styled.div`
  display: block;
  margin-left: 8px;
`;

export default function StatusDot(props) {
  const [color, setColor] = React.useState("grey");
  const [status, setStatus] = React.useState("draft");

  React.useEffect(() => {
    if (props.status.toLowerCase() === "draft") {
      setColor("grey");
      setStatus("Looking for talent");
    } else if (props.status.toLowerCase() === "invitessent") {
      setColor("blue");
      setStatus("Invites sent");
    } else if (props.status.toLowerCase() === "inprogress") {
      setColor("yellow");
      setStatus("In progress");
    } else if (props.status.toLowerCase() === "underreview") {
      setColor("yellow");
      setStatus("Under review");
    } else if (props.status.toLowerCase() === "completed") {
      setColor("green");
      setStatus("Completed");
    }
  }, [props.status]);

  return (
    <Flex>
      <Dot {...props} color={color} />
      <Text>{status}</Text>
    </Flex>
  );
}
