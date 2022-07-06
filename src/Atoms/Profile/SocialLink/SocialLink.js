import React, { useState, useRef, useEffect } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import {
  Icon,
  Text,
  Button,
  Modal,
  Row,
  Container,
  Col,
  Dropdown,
  Spacer,
  A,
} from "../../";
import { Fields, Panel, ConfirmationModal, Empty } from "ui/molecules";
import popup_edit from "ui/assets/popup_edit.svg";
import popup_add from "ui/assets/popup_add.svg";
import popup_delete from "ui/assets/popup_delete.svg";
import useOutsideClick from "./hooks";
import { amplitudeEvent } from "helper/amplitude";

/**
 * SocialLink is a panel of freelancer's personal social link
 *
 * @param {Object} props - props of the component
 * @param {[]} props.links - list of links
 */
export default function SocialLink(props) {
  const { links, onSubmit } = props;
  const [modal, setModal] = useState({ open: false, state: "add", id: null });
  const [modalSave, setModalSave] = useState({ open: false });
  const [modalCancel, setModalCancel] = useState({ open: false });
  const [modalDelete, setModalDelete] = useState({ open: false, id: null });
  const [dropdown, setDropdown] = useState({ open: false, id: null });
  const [ellipsis, setEllipsis] = useState({ show: false, id: null });
  const [updatedLinks, setUpdatedLinks] = useState([]);

  const refs = useRef([]);

  useOutsideClick(refs, () => {
    setDropdown({ open: false, id: null });
  });

  useEffect(() => {
    refs.current = refs.current.slice(0, links.length);
  }, [links]);

  const text = {
    add: {
      title: "Add Social Link",
      subtitle: "Please fill in the social link that related to you",
      ghost: "Cancel",
      primary: "Add",
      confirm: {
        title: "Add Social Link",
        subtitle: "Do you want to add this as your social link?",
        ghost: "Cancel",
        primary: "Add",
      },
    },
    edit: {
      title: "Edit Social Link",
      subtitle: "Please fill in the social link that related to you",
      ghost: "Cancel",
      primary: "Save",
      confirm: {
        title: "Save Social Link",
        subtitle: "Do you want to save this info?",
        ghost: "Cancel",
        primary: "Save",
      },
    },
  };

  return (
    <Panel
      id="panel-social-link"
      title="Social Link"
      width="400px"
      action={
        <Icon
          name="plus"
          style={{ cursor: "pointer" }}
          onClick={() =>
            setModal({
              ...modal,
              open: true,
              state: "add",
              id: null,
            })
          }
          data-cy="social-link-icon-add"
        />
      }
    >
      {links?.length ? (
        <div
          style={{
            marginLeft: "-32px",
            marginRight: "-32px",
            marginTop: "-16px",
            padding: "8px 0px",
          }}
        >
          {links.map((link, index) => (
            <Row
              justifyContent="space-between"
              noWrap
              key={`link-${index}`}
              style={{
                padding: "16px 40px 16px 40px",
                marginBottom: index === links.length - 1 ? "-24px" : 0,
                borderRadius: index === links.length - 1 ? " 0 0 10px 10px" : 0,
              }}
              hoverBackground="backgroundLight"
              onMouseOver={() =>
                !dropdown.open &&
                setEllipsis({ ...ellipsis, show: true, id: index })
              }
              onMouseLeave={() =>
                !dropdown.open &&
                setEllipsis({ ...ellipsis, show: false, id: null })
              }
              data-cy="social-link-item"
            >
              <Col shrink="2">
                <Text _as="b1">{link.type}</Text>
                <Spacer size="4" display="block" />
                <Text _as="b2" color="black40">
                  <A href={link.url} color="black40">
                    {link.url}
                  </A>
                </Text>
              </Col>
              <Col justifyContent="center" shrink="2">
                <div ref={(el) => (refs.current[index] = el)}>
                  {((ellipsis.show && ellipsis.id === index) ||
                    dropdown.id === index) && (
                    <Icon
                      name="ellipsis vertical"
                      fill="black40"
                      clickable
                      onClick={() =>
                        setDropdown({
                          open: dropdown.id === index ? !dropdown.open : true,
                          id: index,
                        })
                      }
                      data-cy={`social-link-icon-ellipsis`}
                    />
                  )}
                </div>
                {dropdown.open && dropdown.id === index && (
                  <Dropdown>
                    <Dropdown.Item
                      onClick={() =>
                        setModal({
                          ...modal,
                          open: true,
                          state: "edit",
                          id: index,
                        })
                      }
                      data-cy="social-link-dropdown-edit"
                    >
                      Edit info
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() =>
                        setModalDelete({
                          ...modalDelete,
                          id: index,
                          open: true,
                        })
                      }
                      data-cy="social-link-dropdown-delete"
                    >
                      Delete
                    </Dropdown.Item>
                  </Dropdown>
                )}
              </Col>
            </Row>
          ))}
        </div>
      ) : (
        <Empty text="Currently, there is no social link listed yet. Let's start adding one" />
      )}

      <Modal
        data-cy={
          modal.state === "add"
            ? "modal-social-link-add"
            : "modal-social-link-edit"
        }
        open={modal.open}
        header={
          <>
            <Text _as="s5" bold>
              {text[modal.state].title}
            </Text>
            <Spacer size="4" display="block" />
            <Text _as="b3" color="black80">
              {text[modal.state].subtitle}
            </Text>
            <Spacer size="16" display="block" />
          </>
        }
      >
        <Formik
          initialValues={{
            type: modal.state === "add" ? "" : links[modal.id]?.type,
            url: modal.state === "add" ? "" : links[modal.id]?.url,
          }}
          validationSchema={Yup.object({
            url: Yup.string()
              .required("URL is required")
              .url("URL must be valid"),
            type: Yup.string().required("Website type is required"),
          })}
          enableReinitialize
          onSubmit={(values) => {
            if (modal.state === "add") {
              setUpdatedLinks([...links, values]);
            } else if (modal.state === "edit") {
              const updatedValues = [...links];
              updatedValues[modal.id] = values;
              setUpdatedLinks(updatedValues);
            }

            setModalSave({ ...modalSave, open: true });
          }}
          validateOnBlur={false}
        >
          {(FormikProps) => (
            <Form>
              <Container fluid>
                <Fields.Select
                  name="type"
                  type="text"
                  _labelAs="s5"
                  label="LINK TYPE"
                  edit
                  loading={false}
                  placeholder="Choose your link type"
                  options={[
                    {
                      value: "Linkedin",
                      label: "Linkedin",
                      id: "linkedin",
                    },
                    {
                      value: "Facebook",
                      label: "Facebook",
                      id: "facebook",
                    },
                    {
                      value: "Twitter",
                      label: "Twitter",
                      id: "twitter",
                    },
                  ]}
                  width="100%"
                  id="social-link-input-type"
                />
                <Spacer size="8" display="block" />
                <Fields.Text
                  name="url"
                  type="text"
                  label="LINK"
                  _labelAs="s5"
                  autoFocus
                  edit
                  loading={false}
                  placeholder="Enter your URL address"
                  fluid
                  value={FormikProps.values.url}
                  onChange={FormikProps.handleChange}
                  error={FormikProps.errors.url}
                  data-cy="social-link-input-link"
                  data-cy-error="social-link-input-link-error"
                />
                <Spacer size="8" display="block" />
                <Row justifyContent="flex-end">
                  <Button
                    color="blue"
                    variant="outlined"
                    type="button"
                    onClick={() =>
                      setModalCancel({ ...modalCancel, open: true })
                    }
                    id="modal-social-link-button-cancel"
                  >
                    {text[modal.state].ghost}
                  </Button>
                  <Button
                    color="blue"
                    type="submit"
                    style={{ marginLeft: "16px" }}
                    id="modal-social-link-button-save"
                  >
                    {text[modal.state].primary}
                  </Button>
                </Row>
              </Container>
            </Form>
          )}
        </Formik>
      </Modal>

      <ConfirmationModal
        open={modalSave.open}
        type={modal.state}
        img={{
          src: modal.state === "add" ? popup_add : popup_edit,
          alt: modal.state,
        }}
        title={text[modal.state].confirm.title}
        subtitle={text[modal.state].confirm.subtitle}
        primary={{
          color: "lightBlue100",
          text: text[modal.state].confirm.primary,
          onClick: () => {
            onSubmit(updatedLinks).then(() => {
              amplitudeEvent("edited profile - social link");
              setModal({ ...modal, open: false });
              setModalSave({ ...modalSave, open: false });
            });
          },
          id: "social-link-save-primary",
        }}
        ghost={{
          color: "lightBlue100",
          text: text[modal.state].confirm.ghost,
          onClick: () => setModalSave({ ...modalSave, open: false }),
        }}
      />

      <ConfirmationModal
        open={modalCancel.open}
        type="cancel_edit"
        img={{ src: popup_edit, alt: "cancel editing" }}
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
            setModal({ ...modal, open: false });
          },
          id: "social-link-cancel-primary",
        }}
      />

      <ConfirmationModal
        open={modalDelete.open}
        type="delete"
        img={{ src: popup_delete, alt: "delete social link" }}
        title="Delete Social Link"
        subtitle={[
          "Are you sure you want to delete this social link?",
          "This process cannot be undone",
        ]}
        primary={{
          onClick: () => setModalDelete({ ...modalDelete, open: false }),
          color: "red100",
          text: "Cancel",
        }}
        ghost={{
          color: "red100",
          text: "Delete",
          onClick: () => {
            onSubmit([
              ...links.slice(0, modalDelete.id),
              ...links.slice(modalDelete.id + 1),
            ]).then(() => {
              setModalDelete({ ...modalDelete, open: false });
            });
          },
          id: "social-link-delete-ghost",
        }}
      />
    </Panel>
  );
}
