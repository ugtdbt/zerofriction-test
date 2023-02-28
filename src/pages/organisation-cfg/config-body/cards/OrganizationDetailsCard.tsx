import React, { memo, useState, useEffect } from "react";
import { Card, Form, Checkbox, Input } from "antd";
import type { State } from "../../../../state";
import { useSelector, useDispatch } from "react-redux";
import type { OrganizationConfigType } from "../../../../utils/types/organisation-config";
import type { FormInstance } from "antd/lib/form";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../../state";
import type { CheckboxChangeEvent } from "antd/lib/checkbox";

const OrganizationDetailsCard: React.FC = memo(() => {
  const initialValidationData = {
    code: {
      validateStatus: "",
      help: "",
    },
    description: {
      validateStatus: "",
      help: "",
    },
    bankAccount: {
      validateStatus: "",
      help: "",
    },
    vatAccountNumber: {
      validateStatus: "",
      help: "",
    },
    companyAccountNumber: {
      validateStatus: "",
      help: "",
    },
  };

  const formRef = React.useRef<FormInstance>(null);
  const { data, formreset, save } = useSelector(
    (state: State) => state.organisationConfiguration
  );

  useEffect(() => {
    formRef.current?.resetFields();
    setFormErrors(initialValidationData);
    setFormDisabled(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formreset]);

  const [formValues, setFormValues] = useState<OrganizationConfigType>(
    data.organizationConfig
  );

  const [formDisabled, setFormDisabled] = useState<boolean>(false);

  const [formErrors, setFormErrors] = useState(initialValidationData);

  const handleAddressChange = (e: any) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
    validate({ ...formValues, [id]: value }, id);
    validateForm({ ...formValues, [id]: value });
  };

  const dispatch = useDispatch();
  const { valideOrganizationDetails, clickOrganizationDetailsSaveButton } =
    bindActionCreators(actionCreators, dispatch);

  const validateForm = (formValues: OrganizationConfigType) => {
    let fromValide = true;
    if (formValues["code"] === "") {
      fromValide = false;
    }
    if (formValues["description"] === "") {
      fromValide = false;
    }
    if (formValues["bankAccount"] === "") {
      fromValide = false;
    }
    if (formValues["vatAccountNumber"] === "") {
      fromValide = false;
    }
    if (formValues["companyAccountNumber"] === "") {
      fromValide = false;
    }
    valideOrganizationDetails(fromValide);
  };

  const validate = (formValues: OrganizationConfigType, key: string) => {
    switch (key) {
      case "code":
        if (formValues[key] === "") {
          setFormErrors({
            ...formErrors,
            code: {
              validateStatus: "error",
              help: "code is required!",
            },
          });
        } else {
          setFormErrors({
            ...formErrors,
            code: {
              validateStatus: "",
              help: "",
            },
          });
        }
        break;

      case "description":
        if (formValues[key] === "") {
          setFormErrors({
            ...formErrors,
            description: {
              validateStatus: "error",
              help: "description is required!",
            },
          });
        } else {
          setFormErrors({
            ...formErrors,
            description: {
              validateStatus: "",
              help: "",
            },
          });
        }
        break;

      case "bankAccount":
        if (!formValues[key]) {
          setFormErrors({
            ...formErrors,
            bankAccount: {
              validateStatus: "error",
              help: "bankAccount is required!",
            },
          });
        } else {
          setFormErrors({
            ...formErrors,
            bankAccount: {
              validateStatus: "",
              help: "",
            },
          });
        }
        break;

      case "vatAccountNumber":
        if (!formValues[key]) {
          setFormErrors({
            ...formErrors,
            vatAccountNumber: {
              validateStatus: "error",
              help: "vatAccountNumber is required!",
            },
          });
        } else {
          setFormErrors({
            ...formErrors,
            vatAccountNumber: {
              validateStatus: "",
              help: "",
            },
          });
        }
        break;

      case "companyAccountNumber":
        if (!formValues[key]) {
          setFormErrors({
            ...formErrors,
            companyAccountNumber: {
              validateStatus: "error",
              help: "company Account Number is required!",
            },
          });
        } else {
          setFormErrors({
            ...formErrors,
            companyAccountNumber: {
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

  const handleMigrationModeChange = (e: CheckboxChangeEvent) => {
    setFormValues({ ...formValues, migrationMode: e.target.checked });
  };

  useEffect(() => {
    if (save) {
      clickOrganizationDetailsSaveButton(formValues);
      setFormDisabled(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [save]);

  return (
    <Card title="Organization Details" data-testid="organization-details-form">
      <Form
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        ref={formRef}
        disabled={formDisabled}
      >
        <Form.Item
          label="Migration Mode"
          name="migrationMode"
          valuePropName="checked"
        >
          <Checkbox onChange={handleMigrationModeChange}></Checkbox>
        </Form.Item>

        <Form.Item
          label="code"
          name="code"
          validateStatus={
            formErrors.code.validateStatus === "error" ? "error" : undefined
          }
          help={formErrors.code.help !== "" ? formErrors.code.help : undefined}
        >
          <Input onChange={handleAddressChange} onFocus={handleAddressChange} />
        </Form.Item>

        <Form.Item
          label="description"
          name="description"
          validateStatus={
            formErrors.description.validateStatus === "error"
              ? "error"
              : undefined
          }
          help={
            formErrors.description.help !== ""
              ? formErrors.description.help
              : undefined
          }
        >
          <Input onChange={handleAddressChange} onFocus={handleAddressChange} />
        </Form.Item>

        <Form.Item
          label="bankAccount"
          name="bankAccount"
          validateStatus={
            formErrors.bankAccount.validateStatus === "error"
              ? "error"
              : undefined
          }
          help={
            formErrors.bankAccount.help !== ""
              ? formErrors.bankAccount.help
              : undefined
          }
        >
          <Input onChange={handleAddressChange} onFocus={handleAddressChange} />
        </Form.Item>
        <Form.Item
          label="vatAccountNumber"
          name="vatAccountNumber"
          validateStatus={
            formErrors.vatAccountNumber.validateStatus === "error"
              ? "error"
              : undefined
          }
          help={
            formErrors.vatAccountNumber.help !== ""
              ? formErrors.vatAccountNumber.help
              : undefined
          }
        >
          <Input onChange={handleAddressChange} onFocus={handleAddressChange} />
        </Form.Item>
        <Form.Item
          label="companyAccountNumber"
          name="companyAccountNumber"
          validateStatus={
            formErrors.companyAccountNumber.validateStatus === "error"
              ? "error"
              : undefined
          }
          help={
            formErrors.companyAccountNumber.help !== ""
              ? formErrors.companyAccountNumber.help
              : undefined
          }
        >
          <Input onChange={handleAddressChange} onFocus={handleAddressChange} />
        </Form.Item>
      </Form>
    </Card>
  );
});

OrganizationDetailsCard.displayName = "OrganizationDetailsCard";
export default OrganizationDetailsCard;
