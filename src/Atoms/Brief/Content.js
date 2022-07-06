import React from "react";
import { useLocation } from "react-router";

import { Text, Spacer, Input, Col, Row, RichTextDisplay, FileCard } from "../";

// rendering
const renderContent = (x, jobType) => {
  switch (x.type) {
    case "tags": {
      return x.answer?.length ? (
        <Input.Multiple value={x.answer} fluid />
      ) : (
        <RichTextDisplay>-</RichTextDisplay>
      );
    }

    case "richtext": {
      return x.answer ? (
        <RichTextDisplay>{x.answer}</RichTextDisplay>
      ) : (
        <RichTextDisplay>-</RichTextDisplay>
      );
    }

    case "dropdown": {
      const tmp_answer = x.options.filter((opt) => opt.value === x.answer);
      return x.key === "job_type" ? (
        <RichTextDisplay>{jobType}</RichTextDisplay>
      ) : x.answer ? (
        <RichTextDisplay>
          {tmp_answer[0]?.label ? tmp_answer[0].label : x.answer}
        </RichTextDisplay>
      ) : (
        <RichTextDisplay>-</RichTextDisplay>
      );
    }

    case "multiple": {
      return x.answer ? (
        <ul>
          {x.answer.map((ans, index) => {
            const answer = x.options.filter((opt) => opt.value === ans);
            return (
              <li key={"list-item-" + index}>
                {answer[0]?.label ? answer[0].label : ans}
              </li>
            );
          })}
        </ul>
      ) : (
        <RichTextDisplay>-</RichTextDisplay>
      );
    }

    default: {
      return (
        <RichTextDisplay _as="b3" color="black60">
          {x.answer ? x.answer : "-"}
        </RichTextDisplay>
      );
    }
  }
};

/**
 * BriefContent
 *
 * @param {Object} props - component props
 * @param {[]} props.brief - brief of the job
 */
export default function BriefContent(props) {
  const location = useLocation();
  const { brief, attachments, noAttachment, jobType } = props;
  const itemOrder = location.pathname.includes("client")
    ? [
        "objective",
        "job_type",
        "job_length",
        "topic",
        "key_points",
        "tone",
        "target_audience",
        "seo_keywords",
        "deepdive_research_requirement",
        "reference_writing",
        "required_additional_tasks",
        "additional_notes",
      ]
    : [
        "job_type",
        "objective",
        "job_length",
        "topic",
        "key_points",
        "tone",
        "target_audience",
        "seo_keywords",
        "deepdive_research_requirement",
        "reference_writing",
        "required_additional_tasks",
        "additional_notes",
      ];

  function compareKey(a, b) {
    if (itemOrder.indexOf(a.key) > -1 && itemOrder.indexOf(b.key) > -1) {
      if (itemOrder.indexOf(a.key) < itemOrder.indexOf(b.key)) {
        return -1;
      }
      if (itemOrder.indexOf(a.key) > itemOrder.indexOf(b.key)) {
        return 1;
      }
    }
    return 0;
  }

  return (
    <>
      {brief
        .sort(compareKey)
        // hide specifically reference_writing in brief
        // since the content of it is in the bottom
        .filter((brief) => brief.type !== "file")
        .map(
          (x) =>
            x.key !== "currency" &&
            x.key !== "job_brief" &&
            x.key !== "job brief" &&
            x.key !== "job_brief_if_any" &&
            x.key !==
              "are_there_past_reports__examples__prereading_you_want_to_share_to_the_researcher_if_yes_please_attach_here_optional" && (
              <>
                <Spacer size="16" display="block" />
                <Text _as="b3" bold>
                  {x.key === "job_type" ? "Job type" : x.label} :
                </Text>
                {renderContent(x, jobType)}
              </>
            )
        )}
      <Spacer size="16" />
      <Text _as="b3" bold>
        {!noAttachment && "Attachments :"}
      </Text>
      <Spacer size="8" display="block" />
      <Row>
        {attachments && attachments.length
          ? attachments.map((attachment, index) => (
              <Col key={"attachment-card-" + index} spacing="16px">
                <FileCard
                  width="250px"
                  style={{ marginRight: 16 }}
                  key={`attachment-${attachment._id}`}
                  title={attachment.name}
                  actionText="Download"
                  onDownload={() => window.open(attachment.url)}
                  img_url={attachment.url}
                  mimeType={attachment.mimeType}
                />
              </Col>
            ))
          : ""}
      </Row>
      <Spacer size="24" display="block" />
    </>
  );
}
