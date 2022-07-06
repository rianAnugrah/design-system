import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setHeader, setLogout, setSticky } from "store/reducer/global";
import socketService from "helper/socketService";
import { Avatar, Icon, Text } from "@ravenry/ui";
import { useHistory } from "react-router";
import TGeneral from "ui/templates/TGeneral";
import styled from "styled-components";
import colors from "ui/colors";
import Feedback from "ui/molecules/Feedback/Feedback";

const Root = styled(TGeneral)`
  min-height: 80vh;
`;
const BasicInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Menu = styled.div`
  display: flex;
  background-color: ${colors.white};
  flex-direction: column;
  width: calc(100% + 48px);
  margin: 24px -24px;
  padding: 24px;
  height: calc(100vh - 240px);
`;

const MenuItem = styled.div`
  display: flex;
  border-bottom: 1px solid ${colors.black10};
  height: 48px;
  line-height: 48px;
  color: ${colors.black40};
  padding: 0px 8px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export default function Profile() {
  const dispatch = useDispatch();
  const global = useSelector((state) => state.global);
  const history = useHistory();
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  return (
    <Root>
      <>
        <BasicInfo>
          <Avatar
            name={global.user.userName}
            url={global.user.avatar}
            size="big"
          />
          <Text _as="b1" color="black" bold style={{ marginLeft: 24 }}>
            {global.user.userName}
          </Text>
        </BasicInfo>
        <Menu>
          <MenuItem
            onClick={() =>
              history.push(
                `/${global.user.domain}/profile/${global.user.userId}`
              )
            }
          >
            <Text _as="b1" color="black40" style={{ lineHeight: "48px" }}>
              Personal Info
            </Text>
            <Icon name="chevron right" />
          </MenuItem>
          <MenuItem
            onClick={() =>
              window.open("https://theravenry.com/user-agreement/", "_blank")
            }
          >
            <Text _as="b1" color="black40" style={{ lineHeight: "48px" }}>
              User Agreement
            </Text>
            <Icon name="chevron right" />
          </MenuItem>
          <MenuItem onClick={() => setFeedbackOpen(true)}>
            <Text _as="b1" color="black40" style={{ lineHeight: "48px" }}>
              Send Feedback
            </Text>
            <Icon name="chevron right" />
          </MenuItem>
          <MenuItem
            onClick={() => {
              dispatch(setLogout());
              dispatch(setSticky(null));
              dispatch(setHeader(null));
              history.push(`/${global.user.domain}/login`);
              socketService.logout(global.user.userId);
            }}
          >
            <Text _as="b1" color="blue" style={{ lineHeight: "48px" }}>
              Logout
            </Text>
          </MenuItem>
        </Menu>
      </>
      <Feedback
        open={feedbackOpen}
        userName={global.user.userName}
        email={global.user.email}
        domain={global.user.domain}
        onClose={() => setFeedbackOpen(false)}
      />
    </Root>
  );
}
