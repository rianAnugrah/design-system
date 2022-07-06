import React from "react";
import BasicInfo from "./BasicInfo/BasicInfo";
import Description from "./Description/Description";
import SocialLink from "./SocialLink/SocialLink";

export default function Profile(props) {
  return <div {...props} />;
}

Profile.BasicInfo = BasicInfo;
Profile.Description = Description;
Profile.SocialLink = SocialLink;
