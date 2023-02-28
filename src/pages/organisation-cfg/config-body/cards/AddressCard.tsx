import React, { memo, useState, useEffect } from "react";
import { Card, Form, InputNumber, Input } from "antd";
import type { State } from "../../../../state";
import { useSelector, useDispatch } from "react-redux";
import type { AddressType } from "../../../../utils/types/organisation-config";
import type { FormInstance } from "antd/lib/form";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../../state";

const AddressCard: React.FC = memo(() => {
  const formRef = React.useRef<FormInstance>(null);
  const initialValidationData = {
    streetName: {
      validateStatus: "",
      help: "",
    },
    streetNumber: {
      validateStatus: "",
      help: "",
    },
    postalCode: {
      validateStatus: "",
      help: "",
    },
    city: {
      validateStatus: "",
      help: "",
    },
    country: {
      validateStatus: "",
      help: "",
    },
  };
  const { data, formreset, save } = useSelector(
    (state: State) => state.organisationConfiguration
  );

  const dispatch = useDispatch();
  const { valideAddressForm, clickAddressSaveButton } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    if (save) {
      clickAddressSaveButton(formValues);
      setFormDisabled(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [save]);

  useEffect(() => {
    formRef.current?.resetFields();
    setFormErrors(initialValidationData);
    setFormDisabled(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formreset]);

  const [formValues, setFormValues] = useState<AddressType>(
    data.organizationConfig.address
  );
  const [formErrors, setFormErrors] = useState(initialValidationData);
  const [formDisabled, setFormDisabled] = useState<boolean>(false);

  const handleAddressChange = (e: any) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
    validateField({ ...formValues, [id]: value }, id);
    validateForm({ ...formValues, [id]: value });
  };

  const handleStreetNumberChange = (value: any) => {
    setFormValues({ ...formValues, streetNumber: parseInt(value) });
    validateField(
      { ...formValues, streetNumber: parseInt(value) },
      "streetNumber"
    );
    validateForm({ ...formValues, streetNumber: parseInt(value) });
  };

  const handlePostalCodeChange = (value: any) => {
    setFormValues({ ...formValues, postalCode: parseInt(value) });
    validateField({ ...formValues, postalCode: parseInt(value) }, "postalCode");
    validateForm({ ...formValues, postalCode: parseInt(value) });
  };

  const validateForm = (formValues: AddressType) => {
    let fromValide = true;
    if (formValues["streetName"] === "") {
      fromValide = false;
    }
    if (!formValues["streetNumber"]) {
      fromValide = false;
    }
    if (!formValues["postalCode"]) {
      fromValide = false;
    }
    if (formValues["city"] === "") {
      fromValide = false;
    }
    if (formValues["country"] === "") {
      fromValide = false;
    }
    valideAddressForm(fromValide);
  };

  const validateField = (formValues: AddressType, key: string) => {
    switch (key) {
      case "streetName":
        if (formValues[key] === "") {
          setFormErrors({
            ...formErrors,
            streetName: {
              validateStatus: "error",
              help: "streetName is required!",
            },
          });
        } else {
          setFormErrors({
            ...formErrors,
            streetName: {
              validateStatus: "",
              help: "",
            },
          });
        }
        break;

      case "streetNumber":
        if (!formValues[key]) {
          setFormErrors({
            ...formErrors,
            streetNumber: {
              validateStatus: "error",
              help: "streetNumber is required!",
            },
          });
        } else {
          setFormErrors({
            ...formErrors,
            streetNumber: {
              validateStatus: "",
              help: "",
            },
          });
        }
        break;

      case "postalCode":
        if (!formValues[key]) {
          setFormErrors({
            ...formErrors,
            postalCode: {
              validateStatus: "error",
              help: "postalCode is required!",
            },
          });
        } else {
          setFormErrors({
            ...formErrors,
            postalCode: {
              validateStatus: "",
              help: "",
            },
          });
        }
        break;

      case "city":
        if (!formValues[key]) {
          setFormErrors({
            ...formErrors,
            city: {
              validateStatus: "error",
              help: "City is required!",
            },
          });
        } else {
          setFormErrors({
            ...formErrors,
            city: {
              validateStatus: "",
              help: "",
            },
          });
        }
        break;

      case "country":
        if (!formValues[key]) {
          setFormErrors({
            ...formErrors,
            country: {
              validateStatus: "error",
              help: "Country is required!",
            },
          });
        } else {
          setFormErrors({
            ...formErrors,
            country: {
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
    <Card title="Address" data-testid="address-form">
      <Form
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
        ref={formRef}
        disabled={formDisabled}
      >
        <Form.Item
          label="Street Name"
          name="streetName"
          validateStatus={
            formErrors.streetName.validateStatus === "error"
              ? "error"
              : undefined
          }
          help={
            formErrors.streetName.help !== ""
              ? formErrors.streetName.help
              : undefined
          }
        >
          <Input onChange={handleAddressChange} onFocus={handleAddressChange} />
        </Form.Item>

        <Form.Item
          label="Street Number"
          name="streetNumber"
          validateStatus={
            formErrors.streetNumber.validateStatus === "error"
              ? "error"
              : undefined
          }
          help={
            formErrors.streetNumber.help !== ""
              ? formErrors.streetNumber.help
              : undefined
          }
        >
          <InputNumber
            onChange={handleStreetNumberChange}
            onFocus={handleAddressChange}
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item
          label="Postal Code"
          name="postalCode"
          validateStatus={
            formErrors.postalCode.validateStatus === "error"
              ? "error"
              : undefined
          }
          help={
            formErrors.postalCode.help !== ""
              ? formErrors.postalCode.help
              : undefined
          }
        >
          <InputNumber
            onChange={handlePostalCodeChange}
            onFocus={handleAddressChange}
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item
          label="City"
          name="city"
          validateStatus={
            formErrors.city.validateStatus === "error" ? "error" : undefined
          }
          help={formErrors.city.help !== "" ? formErrors.city.help : undefined}
        >
          <Input onChange={handleAddressChange} onFocus={handleAddressChange} />
        </Form.Item>

        <Form.Item
          label="Country"
          name="country"
          validateStatus={
            formErrors.country.validateStatus === "error" ? "error" : undefined
          }
          help={
            formErrors.country.help !== "" ? formErrors.country.help : undefined
          }
        >
          <Input onChange={handleAddressChange} onFocus={handleAddressChange} />
        </Form.Item>
      </Form>
    </Card>
  );
});

AddressCard.displayName = "AddressCard";
export default AddressCard;
