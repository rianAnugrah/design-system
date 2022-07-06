import React from "react";
import styled from "styled-components";
import colors from "../utils/colors";
import { HideOn } from "react-hide-on-scroll";
import { useSelector } from "react-redux";
import { Notification } from "ui/molecules";
import { Text } from "..";

const Root = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 60px;
  align-items: center;
  padding: 16px 24px;
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.black10};
  transition: all 0.5s ease;
  z-index: 1;
`;
const Footer = styled.div`
  display: flex;
  position: fixed;
  top: 60px;
  left: 0;
  width: 100vw;
  height: 64px;
  align-items: center;
  padding: 16px 24px;
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.black10};
  /* z-index: 1; */
`;

const Title = styled(Text)`
  flex-grow: 1;
  text-align: center;
`;

export default function MobileHeading(props) {
  const footer = useSelector((state) => state.global.sticky);
  const { notification } = props;
  // const [counts, setCounts] = React.useState();
  // React.useEffect(() => {
  //   var count = 0;
  //   notification &&
  //     notification.notifications.forEach(function (x) {
  //       x.isRead === false && count++;
  //     });

  //   setCounts(count);
  // }, [notification]);

  return (
    <>
      <Root>
        <Title _as="h6">{props.children}</Title>
        <Notification
          // notifications={notification && notification.notifications}
          style={{ marginTop: 5, marginRight: 5 }}
          // counts={counts}
          // onReadAll={notification && notification.onReadAll}
          // onReadSelected={notification && notification.onReadSelected}
          notifications={notification && notification.notifications}
          onReadAll={notification && notification.onReadAll}
          onReadSelected={notification && notification.onReadSelected}
          unreadNotifs={notification.unreadNotifs}
          onNext={notification.onNext}
          hasMoreNotif={notification.hasMoreNotif}
        />
      </Root>
      {footer && (
        <HideOn inverse height={100}>
          <Footer>{footer}</Footer>
        </HideOn>
      )}
    </>
  );
}
