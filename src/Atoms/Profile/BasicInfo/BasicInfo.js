import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import moment from "moment";
import { amplitudeEvent } from "helper/amplitude";

import {
  Text,
  Spacer,
  Divider,
  Icon,
  Avatar,
  Modal,
  Input,
  Col,
  Row,
  Button,
  Label,
} from "../..";
import { formatPseudonym } from "helper/utils";
import { Panel, ConfirmationModal, Fields } from "ui/molecules";
import { Cropper } from "ui/organisms";

import popup_edit from "ui/assets/popup_edit.svg";
import popup_cancel from "ui/assets/popup_cancel.svg";

/**
 * BasicInfo is a panel of user profile page
 *
 * @param {Object} props - props of the component
 * @param {Object} props.user - object of basic info of the user
 */
export default function BasicInfo(props) {
  const { user, editable } = props;
  const [open, setOpen] = useState(false);
  const [modalSave, setModalSave] = useState({ open: false });
  const [modalCancel, setModalCancel] = useState({ open: false });
  const [loading] = useState(false);
  const [updatePayload, setUpdatePayload] = useState(null);
  const [cropper, setCropper] = useState({
    open: false,
    img: null,
  });

  const formik = useFormik({
    initialValues: {
      file: null,
      fullName: user.fullName || "",
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      pseudonym: user.pseudonym ? formatPseudonym(user.pseudonym) : "",
      email: user.email || "",
      title: user.title || "",
      rate: user.rate || "",
      company: user.company || "",
      industry: user.industry || "",
      currency: "USD",
      unit: "Word",
      countryCode: user.contactNumber?.countryCode || "",
      phoneNumber: user.contactNumber?.phoneNumber || "",
      addressLine1: user.address?.addressLine1 || "",
      postalCode: user.address?.postalCode || "",
      country: user.address?.country || "",
      region: user.address?.region || "",
      schedulingAppURL: user.schedulingAppURL || "",
    },
    onSubmit: ({
      addressLine1,
      postalCode,
      country,
      region,
      currency,
      unit,
      pseudonym,
      countryCode,
      phoneNumber,
      ...values
    }) => {
      const payload = {
        ...values,
        address: {
          addressLine1,
          postalCode,
          country,
          region,
        },
        contactNumber:
          user.domain === "freelancer"
            ? {
                countryCode,
                phoneNumber,
              }
            : undefined,
      };

      setUpdatePayload(payload);
      setModalSave({ ...modalSave, open: true });
    },
    enableReinitialize: true,
  });

  function handleSubmit() {
    props
      .onSubmit(updatePayload)
      .then((res) => setOpen(!res))
      .finally(() => {
        amplitudeEvent("edited profile - Basic Information");
        setModalSave({ ...modalSave, open: false });
      });
  }

  useEffect(() => {
    formik.setFormikState((state) => ({
      ...state,
      values: {
        fullName: user.fullName || "",
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        pseudonym: user.pseudonym ? formatPseudonym(user.pseudonym) : "",
        email: user.email || "",
        title: user.title || "",
        rate: user.rate || "",
        company: user.company || "",
        industry: user.industry || "",
        currency: "USD",
        unit: "Word",
        countryCode: user.contactNumber?.countryCode || "",
        phoneNumber: user.contactNumber?.phoneNumber || "",
        addressLine1: (user.address && user.address.addressLine1) || "",
        postalCode: (user.address && user.address.postalCode) || "",
        country: (user.address && user.address.country) || "",
        region: (user.address && user.address.region) || "",
        schedulingAppURL: user.schedulingAppURL || "",
      },
    }));
  }, [user]);

  return (
    <Panel
      title="Basic Info"
      width="400px"
      action={
        editable && (
          <Icon
            name="edit"
            data-cy="edit-basic-info"
            clickable
            onClick={() => setOpen(true)}
          />
        )
      }
    >
      <Row justifyContent="center">
        <Avatar
          url={user.avatarLink}
          size="big"
          name={
            user.firstName && user.lastName
              ? `${user.firstName} ${user.lastName}`
              : user.fullName
          }
        />
      </Row>
      <Spacer size="16" display="block" />
      <Text _as="b1" textAlign="center" fluid>
        {user.firstName || user.lastName
          ? `${user.firstName ?? ""} ${user.lastName ?? ""}`
          : user.fullName}
      </Text>
      <Spacer size="8" display="block" />
      <Text _as="b1" color="black40" textAlign="center" fluid>
        {user.title}
      </Text>
      <Spacer size="16" display="block" />
      <Divider offset="32" />
      <Spacer size="24" />
      <Text _as="b3" color="black40">
        EMAIL
      </Text>
      <Spacer size="8" display="block" />
      <Text _as="b2">{user.email || "-"}</Text>
      <Spacer size="32" display="block" />
      {user.domain === "client" ? (
        <>
          <Text _as="b3" color="black40">
            COMPANY NAME
          </Text>
          <Spacer size="8" display="block" />
          <Text _as="b2">{user.company || "-"}</Text>
          <Spacer size="32" display="block" />
          <Text _as="b3" color="black40">
            COMPANY INDUSTRY
          </Text>
          <Spacer size="8" display="block" />
          <Text _as="b2">{user.industry || "-"}</Text>
          <Spacer size="32" display="block" />
          <Text _as="b3" color="black40">
            LOCATION
          </Text>
          <Spacer size="8" display="block" />
          <Text _as="b2">{(user.address && user.address.country) || "-"}</Text>
          <Spacer size="32" display="block" />
          <Text _as="b3" color="black40">
            APPOINTMENT SCHEDULING APP
          </Text>
          <Spacer size="8" display="block" />
          <Text _as="b2">{user.schedulingAppURL || "-"}</Text>
        </>
      ) : (
        <>
          <Text _as="b3" color="black40">
            CONTACT NUMBER
          </Text>
          <Spacer size="8" display="block" />
          <Text _as="b2">
            {user.contactNumber?.countryCode && user.contactNumber?.phoneNumber
              ? `${user.contactNumber.countryCode}-${user.contactNumber.phoneNumber}`
              : "-"}
          </Text>
          <Spacer size="32" display="block" />

          <Text _as="b3" color="black40">
            LOCATION
          </Text>
          <Spacer size="8" display="block" />
          <Text _as="b2">{(user.address && user.address.country) || "-"}</Text>
          <Spacer size="32" display="block" />

          <Text _as="b3" color="black40">
            STARTS FROM
          </Text>
          <Spacer size="8" display="block" />
          <Text _as="b2">{user.rate && `${user.rate} USD / word`}</Text>
          <Spacer size="32" display="block" />

          <Text _as="b3" color="black40">
            AVERAGE RESPONSE TIME
          </Text>
          <Spacer size="8" display="block" />
          <Text _as="b2">{user.averageResponse || 0} hours</Text>
          <Spacer size="32" display="block" />

          <Text _as="b3" color="black40">
            COMPLETED JOBS
          </Text>
          <Spacer size="8" display="block" />
          <Text _as="b2">
            {user.completedJob || 0} {user.completedJob > 1 ? "jobs" : "job"}
          </Text>

          <Spacer size="32" display="block" />
          <Text _as="b3" color="black40">
            APPOINTMENT SCHEDULING APP
          </Text>
          <Spacer size="8" display="block" />
          <Text _as="b2">{user.schedulingAppURL || "-"}</Text>

          <Spacer size="32" display="block" />
          <Text _as="b3" color="black40">
            MEMBER SINCE
          </Text>
          <Spacer size="8" display="block" />
          <Text _as="b2">
            {moment(user.createdAt).format("dddd, D MMM YYYY")}
          </Text>
        </>
      )}
      <Spacer size="16" />

      <Modal
        data-cy="modal-basic-info"
        open={open}
        header={
          <>
            <Text _as="s5" bold>
              Basic Info
            </Text>
            <Spacer size="4" display="block" />
            <Text _as="b3" color="black80">
              Please fill in all the basic information below
            </Text>
            <Spacer size="16" display="block" />
          </>
        }
      >
        <form onSubmit={formik.handleSubmit}>
          <Col>
            <Label _as="s5" bold>
              PROFILE PHOTO
            </Label>
            <Spacer size="8" />
            <Row alignItems="center">
              <Col>
                <Avatar
                  url={user.avatarLink}
                  size="big"
                  noMargin
                  name={user.fullName}
                />
              </Col>
              <Col style={{ marginLeft: "16px", marginTop: "8px" }}>
                <Input.File
                  placeholder="Upload image"
                  onChange={(e) => {
                    e.preventDefault();

                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setCropper({
                        ...cropper,
                        open: true,
                        img: reader.result,
                      });
                    };

                    reader.readAsDataURL(e.target.files[0]);
                  }}
                />
                <Spacer size="8" display="block" />
                <Text _as="b3" color="black40">
                  Your profile picture is used as the avatar to represent you.
                  Please upload a square picture (max.1000 x 1000).
                </Text>
              </Col>
            </Row>
            <Spacer size="16" />
            <Row>
              <Col ratio={1}>
                <Fields.Text
                  label="FIRST NAME"
                  _labelAs="s5"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onFocus={() => formik.setFieldError("firstName", "")}
                  error={formik.errors.firstName}
                  placeholder="Enter your first name"
                  fluid
                  required
                  data-cy="basic-info-input-firstName"
                />
              </Col>
              <Spacer size="16" />
              <Col ratio={1}>
                <Fields.Text
                  label="LAST NAME"
                  _labelAs="s5"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onFocus={() => formik.setFieldError("lastName", "")}
                  error={formik.errors.lastName}
                  placeholder="Enter your last name"
                  fluid
                  required
                  data-cy="basic-info-input-lastName"
                />
              </Col>
            </Row>
            <Spacer size="16" display="block" />
            <Row>
              <Col ratio={1}>
                <Fields.Text
                  label="TITLE"
                  _labelAs="s5"
                  name="title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  onFocus={() => formik.setFieldError("title", "")}
                  error={formik.errors.title}
                  placeholder="Enter your title role"
                  fluid
                  required
                  data-cy="basic-info-input-title"
                />
              </Col>
              <Spacer size="16" />
              <Col ratio={1} />
            </Row>
            <Spacer size="16" display="block" />

            {user.domain === "client" && (
              <Row>
                <Col ratio={50}>
                  <Fields.Text
                    label="COMPANY NAME"
                    _labelAs="s5"
                    name="company"
                    value={formik.values.company}
                    onChange={formik.handleChange}
                    onFocus={() => formik.setFieldError("company", "")}
                    error={formik.errors.company}
                    placeholder="Enter your company name"
                    fluid
                    data-cy="basic-info-input-company"
                  />
                </Col>
                <Spacer size="16" />
                <Col ratio={50}>
                  <Fields.Text
                    label="INDUSTRY"
                    _labelAs="s5"
                    name="industry"
                    value={formik.values.industry}
                    onChange={formik.handleChange}
                    onFocus={() => formik.setFieldError("industry", "")}
                    error={formik.errors.industry}
                    placeholder="Choose type of industry"
                    fluid
                    data-cy="basic-info-input-industry"
                  />
                </Col>
              </Row>
            )}

            {user.domain === "freelancer" && (
              <>
                <Row>
                  <Col ratio={20}>
                    <Input
                      label="RATES"
                      name="rate"
                      value={formik.values.rate}
                      onChange={formik.handleChange}
                      onFocus={() => formik.setFieldError("rate", "")}
                      error={formik.errors.rate}
                      placeholder="Enter your rates"
                      fluid
                    />
                  </Col>
                  <Spacer size="16" />
                  <Col ratio={15}>
                    <Input
                      label="CURRENCY"
                      name="currency"
                      value={formik.values.currency}
                      onChange={formik.handleChange}
                      onFocus={() => formik.setFieldError("currency", "")}
                      error={formik.errors.currency}
                      placeholder="Enter your title role"
                      fluid
                      disabled
                    />
                  </Col>
                  <Spacer size="16" />
                  <Col ratio={34}>
                    <Input
                      label="UNIT"
                      name="unit"
                      value={formik.values.unit}
                      onChange={formik.handleChange}
                      onFocus={() => formik.setFieldError("unit", "")}
                      error={formik.errors.unit}
                      placeholder="Choose your rates unit"
                      fluid
                      disabled
                    />
                  </Col>
                </Row>
                <Row>
                  <Col ratio={5}>
                    <Input
                      label="COUNTRY CODE"
                      name="countryCode"
                      value={formik.values.countryCode}
                      onChange={formik.handleChange}
                      onFocus={() => formik.setFieldError("countryCode", "")}
                      error={formik.errors.countryCode}
                      placeholder="+60"
                      fluid
                      maxLength="4"
                    />
                  </Col>
                  <Spacer size="16" />
                  <Col ratio={34}>
                    <Input
                      label="CONTACT NUMBER"
                      name="phoneNumber"
                      value={formik.values.phoneNumber}
                      onChange={formik.handleChange}
                      onFocus={() => formik.setFieldError("phoneNumber", "")}
                      error={formik.errors.phoneNumber}
                      placeholder="Enter your contact number"
                      fluid
                      maxLength="15"
                    />
                  </Col>
                </Row>
              </>
            )}
            <Spacer size="16" display="block" />
            <Row>
              <Col ratio={7}>
                <Fields.Text
                  label="ADDRESS"
                  _labelAs="s5"
                  name="addressLine1"
                  value={formik.values.addressLine1}
                  onChange={formik.handleChange}
                  onFocus={() => formik.setFieldError("addressLine1", "")}
                  error={formik.errors.addressLine1}
                  placeholder="Enter your current address"
                  fluid
                  data-cy="basic-info-input-addressLine1"
                />
              </Col>
              <Spacer size="16" />
              <Col ratio={2}>
                <Fields.Text
                  label="POSTAL CODE"
                  _labelAs="s5"
                  name="postalCode"
                  value={formik.values.postalCode}
                  onChange={formik.handleChange}
                  onFocus={() => formik.setFieldError("postalCode", "")}
                  error={formik.errors.postalCode}
                  placeholder="12345"
                  fluid
                  data-cy="basic-info-input-postalCode"
                />
              </Col>
            </Row>
            <Spacer size="16" display="block" />
            <Row>
              <Col ratio={1}>
                <Fields.Text
                  label="COUNTRY"
                  _labelAs="s5"
                  name="country"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  onFocus={() => formik.setFieldError("country", "")}
                  error={formik.errors.country}
                  placeholder="Enter your current country"
                  fluid
                  required
                  data-cy="basic-info-input-country"
                />
              </Col>
              <Spacer size="16" />
              <Col ratio={1}>
                <Fields.Text
                  label="STATE/PROVINCE/REGION"
                  _labelAs="s5"
                  name="region"
                  value={formik.values.region}
                  onChange={formik.handleChange}
                  onFocus={() => formik.setFieldError("region", "")}
                  error={formik.errors.region}
                  placeholder="Enter the state/province/region"
                  fluid
                  required
                  data-cy="basic-info-input-region"
                />
              </Col>
            </Row>
            <Spacer size="16" />
            <Row>
              <Col ratio={1}>
                <Fields.Text
                  label="APPOINTMENT SCHEDULING APP LINK"
                  _labelAs="s5"
                  name="schedulingAppURL"
                  value={formik.values.schedulingAppURL}
                  onChange={formik.handleChange}
                  onFocus={() => formik.setFieldError("schedulingAppURL", "")}
                  error={formik.errors.schedulingAppURL}
                  placeholder="Enter your [Calendly, Savvycal, etc.] URL"
                  fluid
                  data-cy="basic-info-input-schedulingAppURL"
                />
              </Col>
            </Row>
            <Spacer size="16" />
            <Row justifyContent="flex-end">
              <Button
                color="blue"
                variant="outlined"
                type="button"
                onClick={() => setModalCancel({ ...modalCancel, open: true })}
                data-cy="basic-info-button-cancel"
              >
                Cancel
              </Button>
              <Button
                color="blue"
                type="submit"
                style={{ marginLeft: "16px" }}
                disabled={
                  Object.values({
                    firstName: formik.values.firstName,
                    lastName: formik.values.lastName,
                    title: formik.values.title,
                    country: formik.values.country,
                    region: formik.values.region,
                  })
                    .map((v) => v.trim())
                    .filter((v) => v.length === 0).length > 0
                }
                loading={loading}
                data-cy="basic-info-button-save"
              >
                Save
              </Button>
            </Row>
          </Col>
        </form>

        <Cropper
          open={cropper.open}
          img={cropper.img}
          onClose={() => setCropper({ ...cropper, open: false })}
          onUpload={(img) => {
            props.onUpload(img);
            setCropper({ ...cropper, open: false });
          }}
        />
      </Modal>

      <ConfirmationModal
        open={modalSave.open}
        type="edit"
        img={{ src: popup_edit, alt: "save basic info" }}
        title="Save Basic Info"
        subtitle="Do you want to save this info?"
        primary={{
          onClick: () => {
            handleSubmit();
          },
          color: "lightBlue100",
          text: "Save",
          id: "primary-save-confirmation",
        }}
        ghost={{
          onClick: () => setModalSave({ ...modalSave, open: false }),
          color: "lightBlue100",
          text: "Cancel",
        }}
      />

      <ConfirmationModal
        open={modalCancel.open}
        type="cancel_edit"
        img={{ src: popup_cancel, alt: "cancel editing" }}
        title="Cancel Editing"
        subtitle={["Are you sure?", "All unsaved changes will be lost"]}
        primary={{
          onClick: () => setModalCancel({ ...modalCancel, open: false }),
          color: "red100",
          text: "No, let me save",
        }}
        ghost={{
          color: "red100",
          text: "Yes, I'm sure",
          onClick: () => {
            setModalCancel({ ...modalCancel, open: false });
            setOpen(false);
            formik.resetForm();
          },
          id: "basic-info-ghost-cancel-confirmation",
        }}
      />
    </Panel>
  );
}
