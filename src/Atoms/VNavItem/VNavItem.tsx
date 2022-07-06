import React from "react";
import styled, { css } from "styled-components";
import colors, { ColorOptions } from "../utils/colors";
import { Text, Icon, Container } from "../";
import { Link } from "react-router-dom";

interface RootProps {
  // callback when the element is clicked
  onClick?: () => void;
  // flag for component active state
  active: boolean;
  // optional icon that will appear inside this component
  icon?: string;
  to?: string;
  // use raw to props without being manipulated
  useRawTo?: boolean;
  counter?: number;
  datacy?: string;
}

const RootLink = styled(Link)<RootProps>`
  display: flex;
  align-items: center;
  padding: 0 16px;
  cursor: pointer;
  border-radius: 8px;
  height: 32px;
  ${({ active }) =>
    active
      ? css`
          background-color: ${colors.blue10};
        `
      : css`
          &:hover {
            background-color: ${colors.black5};
          }
        `}
`;

const RootDiv = styled.div<RootProps>`
  display: flex;
  align-items: center;
  padding: 0 16px;
  cursor: pointer;
  border-radius: 8px;
  height: 32px;
  ${({ active }) =>
    active
      ? css`
          background-color: ${colors.blue10};
        `
      : css`
          &:hover {
            background-color: ${colors.black5};
          }
        `}
`;

const Counter = styled(Text)`
  padding: 4px 3px;
`;

interface VNavItemProps extends RootProps {
  // eslint-disable-next-line
  children: React.ReactNode | JSX.Element | JSX.Element[];
  dataCy?: string;
}

export default function VNavItem({
  children,
  icon,
  active = false,
  to,
  useRawTo = false,
  onClick = () => null,
  counter = 0,
  dataCy,
}: VNavItemProps) {
  return (
    <>
      {to ? (
        <RootLink
          to={useRawTo ? to : `?tab=${to}`}
          active={active}
          data-cy={dataCy}
        >
          {icon && (
            <Icon
              name={icon}
              margin="0 8px 0 0"
              fill={(active ? colors.blue100 : colors.black100) as ColorOptions}
            />
          )}
          <Container
            flex
            fluid
            justifyContent="space-between"
            alignItems="center"
          >
            <Text _as="s5" color={active ? "blue100" : "black100"}>
              {children}
            </Text>
            {counter > 0 && (
              <Counter _as="n1" color={active ? "blue100" : "black100"}>
                {counter}
              </Counter>
            )}
          </Container>
        </RootLink>
      ) : (
        <RootDiv onClick={onClick} active={active} data-cy={dataCy}>
          {icon && (
            <Icon
              name={icon}
              margin="0 8px 0 0"
              fill={(active ? colors.blue100 : colors.black100) as ColorOptions}
            />
          )}
          <Container
            flex
            fluid
            justifyContent="space-between"
            alignItems="center"
          >
            <Text _as="s5" color={active ? "blue100" : "black100"}>
              {children}
            </Text>
            {counter > 0 && (
              <Counter _as="n1" color={active ? "blue100" : "black100"}>
                {counter}
              </Counter>
            )}
          </Container>
        </RootDiv>
      )}
    </>
  );
}
