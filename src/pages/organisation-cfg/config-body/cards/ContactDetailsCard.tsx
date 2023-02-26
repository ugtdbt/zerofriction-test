import React, { memo, useState, useEffect } from "react";
import { Card, Form, Input } from "antd";
import type { State } from "../../../../state";
import { useSelector, useDispatch } from "react-redux";
import type { ContactDetailType } from "../../../../utils/types/organisation-config";
import type { FormInstance } from "antd/es/form";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../../state";

const ContactDetailsCard: React.FC = memo(() => {
  const formRef = React.useRef<FormInstance>(null);
  const emailRegex = /\S+@\S+\.\S+/;
  const telephoneRegex = /^[0-9\+]{1,11}$/;

  const initialValidationData = {
    emailAddress: {
      validateStatus: "",
      help: "",
    },
    telephone: {
      validateStatus: "",
      help: "",
    },
    website: {
      validateStatus: "",
      help: "",
    },
  };

  const { data, formreset, save } = useSelector(
    (state: State) => state.organisationConfiguration
  );

  const dispatch = useDispatch();
  const { valideContactDetails, clickContactDetailsSaveButton } =
    bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    formRef.current?.resetFields();
    setFormErrors(initialValidationData);
    setFormDisabled(false);
  }, [formreset]);

  useEffect(() => {
    if (save) {
      clickContactDetailsSaveButton(formValues);
      setFormDisabled(true);
    }
  }, [save]);

  const [formValues, setFormValues] = useState<ContactDetailType>(
    data.organizationConfig.contactDetails
  );
  const [formErrors, setFormErrors] = useState(initialValidationData);
  const [formDisabled, setFormDisabled] = useState<boolean>(false);

  const handleContactDetailsChnage = (e: any) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
    validate({ ...formValues, [id]: value }, id);
    validateForm({ ...formValues, [id]: value });
  };

  const validateForm = (formValues: ContactDetailType) => {
    let fromValide = true;
    if (formValues["website"] === "") {
      fromValide = false;
    }

    if (formValues["emailAddress"] === "") {
      fromValide = false;
    } else if (!emailRegex.test(formValues["emailAddress"])) {
      fromValide = false;
    }

    if (formValues["telephone"] === "") {
      fromValide = false;
    } else if (!telephoneRegex.test(formValues["telephone"])) {
      fromValide = false;
    }

    valideContactDetails(fromValide);
  };

  const validate = (formValues: ContactDetailType, key: string) => {
    switch (key) {
      case "website":
        if (formValues[key] === "") {
          setFormErrors({
            ...formErrors,
            website: {
              validateStatus: "error",
              help: "website is required!",
            },
          });
        } else {
          setFormErrors({
            ...formErrors,
            website: {
              validateStatus: "",
              help: "",
            },
          });
        }
        break;

      case "emailAddress":
        if (formValues[key] === "") {
          setFormErrors({
            ...formErrors,
            emailAddress: {
              validateStatus: "error",
              help: "emailAddress is required!",
            },
          });
        } else if (!emailRegex.test(formValues[key])) {
          setFormErrors({
            ...formErrors,
            emailAddress: {
              validateStatus: "error",
              help: "Email address is not valid!",
            },
          });
        } else {
          setFormErrors({
            ...formErrors,
            emailAddress: {
              validateStatus: "",
              help: "",
            },
          });
        }
        break;

      case "telephone":
        if (formValues[key] === "") {
          setFormErrors({
            ...formErrors,
            telephone: {
              validateStatus: "error",
              help: "telephone is required!",
            },
          });
        } else if (!telephoneRegex.test(formValues[key])) {
          setFormErrors({
            ...formErrors,
            telephone: {
              validateStatus: "error",
              help: "Telephone number is not valid!",
            },
          });
        } else {
          setFormErrors({
            ...formErrors,
            telephone: {
              validateStatus: "",
              help: "",
            },
          });
        }
        break;

      default:
        break;
    }
  };

  return (
    <Card title="Contact Details">
      <Form
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
        ref={formRef}
        disabled={formDisabled}
      >
        <Form.Item
          label="EmailAddress"
          name="emailAddress"
          validateStatus={
            formErrors.emailAddress.validateStatus === "error"
              ? "error"
              : undefined
          }
          help={
            formErrors.emailAddress.help !== ""
              ? formErrors.emailAddress.help
              : undefined
          }
        >
          <Input onChange={handleContactDetailsChnage} />
        </Form.Item>
        <Form.Item
          label="Telephone"
          name="telephone"
          validateStatus={
            formErrors.telephone.validateStatus === "error"
              ? "error"
              : undefined
          }
          help={
            formErrors.telephone.help !== ""
              ? formErrors.telephone.help
              : undefined
          }
        >
          <Input style={{ width: 260 }} onChange={handleContactDetailsChnage} />
        </Form.Item>
        <Form.Item
          label="website"
          name="website"
          validateStatus={
            formErrors.website.validateStatus === "error" ? "error" : undefined
          }
          help={
            formErrors.website.help !== "" ? formErrors.website.help : undefined
          }
        >
          <Input onChange={handleContactDetailsChnage} />
        </Form.Item>
      </Form>
    </Card>
  );
});

ContactDetailsCard.displayName = "ContactDetailsCard";
export default ContactDetailsCard;
