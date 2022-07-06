import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import {
  Icon,
  Text,
  Modal,
  Button,
  Spacer,
  Row,
  RichTextDisplay,
} from "../../";
import { Fields, Panel, ConfirmationModal, Empty } from "ui/molecules";
import popup_edit from "ui/assets/popup_edit.svg";
import popup_cancel from "ui/assets/popup_cancel.svg";
import { amplitudeEvent } from "helper/amplitude";

/**
 * AboutMe is a panel of freelancer's personal description
 *
 * @param {Object} props - props of the component
 * @param {String} props.description -
 */
export default function Description(props) {
  const { aboutMe, onSubmit, editable, title, modal = {}, emptyText } = props;
  const [open, setOpen] = useState(false);
  const [modalSave, setModalSave] = useState({ open: false });
  const [modalCancel, setModalCancel] = useState({ open: false });
  const [updatedPayload, setUpdatedPayload] = useState(null);

  return (
    <Panel
      id="profile-company-description"
      title={title || "About Me"}
      action={
        editable && (
          <Icon
            name="edit"
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              e.preventDefault();
              setOpen(true);
            }}
            data-cy="edit-company-description"
          />
        )
      }
    >
      <Spacer size="16" display="block" />
      {aboutMe ? (
        <RichTextDisplay>{aboutMe}</RichTextDisplay>
      ) : (
        <Empty
          text={
            emptyText ||
            "Currently, there is no info about you yet. Let's start creating one"
          }
          data-cy="company-description-empty-state"
        />
      )}

      <Modal
        data-cy="modal-company-description"
        open={open}
        header={
          <>
            <Text _as="s5" bold>
              {modal.title || "About Me"}
            </Text>
            <Spacer size="4" display="block" />
            <Text _as="b3" color="black80">
              {modal.subtitle || "Tell others a bit about yourself"}
            </Text>
            <Spacer size="16" display="block" />
          </>
        }
      >
        <Formik
          initialValues={{
            aboutMe: aboutMe || "",
          }}
          validationSchema={Yup.object({
            aboutMe: Yup.string(),
          })}
          onSubmit={(value) => {
            setUpdatedPayload(value);
            setModalSave({ ...modalSave, open: true });
          }}
        >
          {() => (
            <Form>
              <Fields.FieldArea
                fluid
                name="aboutMe"
                placeholder={
                  modal.placeholder ||
                  "Be creative! Let the clients know you better by giving a personal touch here"
                }
                data-cy="company-description-input-aboutMe"
              />
              <Spacer size="16" />
              <Row justifyContent="flex-end">
                <Button
                  color="blue"
                  variant="outlined"
                  type="button"
                  onClick={() => setModalCancel({ ...modalCancel, open: true })}
                  data-cy="company-description-button-cancel"
                >
                  Cancel
                </Button>
                <Button
                  color="blue"
                  type="submit"
                  style={{ marginLeft: "16px" }}
                  data-cy="company-description-button-save"
                >
                  Save
                </Button>
              </Row>
            </Form>
          )}
        </Formik>
      </Modal>

      <ConfirmationModal
        open={modalSave.open}
        type="edit"
        name="About Me"
        img={{ src: popup_edit, alt: "save about me" }}
        title="Save About Me"
        subtitle="Do you want to save this info?"
        primary={{
          onClick: () => {
            onSubmit(updatedPayload).then((res) => {
              amplitudeEvent("edited profile - about me");
              setOpen(!res);
              setModalSave({ ...modalSave, open: false });
            });
          },
          color: "lightBlue100",
          text: "Save",
          id: "primary-save-company-description",
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
          },
          id: "ghost-cancel-company-description",
        }}
      />
    </Panel>
  );
}
