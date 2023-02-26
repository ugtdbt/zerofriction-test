import React, { memo, useState, useEffect } from "react";
import { Alert, Button, Space } from "antd";
import { actionCreators } from "../../../state";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import type { State } from "../../../state";

const TopSection: React.FC = memo(() => {
  const [saveButtonDisabled, setSaveButtonDisabled] = useState(true);
  const [displayValidetionError, setDisplayValidetionError] = useState(false);
  const {
    formtouched,
    valideAddressForm,
    valideContactDetailsForm,
    valideOrganizationDetailsForm,
  } = useSelector((state: State) => state.organisationConfiguration);
  const dispatch = useDispatch();
  const { resetOrganisationConfiguration, clickSaveButton } =
    bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    if (
      formtouched &&
      valideAddressForm &&
      valideContactDetailsForm &&
      valideOrganizationDetailsForm
    ) {
      setSaveButtonDisabled(false);
    } else {
      setSaveButtonDisabled(true);
    }
    if (
      formtouched &&
      (!valideAddressForm ||
        !valideContactDetailsForm ||
        !valideOrganizationDetailsForm)
    ) {
      setDisplayValidetionError(true);
    } else {
      setDisplayValidetionError(false);
    }
  }, [
    formtouched,
    valideAddressForm,
    valideContactDetailsForm,
    valideOrganizationDetailsForm,
  ]);

  const handleCancel = (e: any) => {
    if (formtouched) {
      resetOrganisationConfiguration();
    }
  };
  const handleSave = (e: any) => {
    if (
      formtouched &&
      valideAddressForm &&
      valideContactDetailsForm &&
      valideOrganizationDetailsForm
    ) {
      clickSaveButton();
    }
  };

  return (
    <Space direction="horizontal">
      <Space direction="vertical" style={{ width: "100%" }}>
        {displayValidetionError && (
          <Alert message="Form invalid" type="error" />
        )}
      </Space>
      <div>
        <Button type="text" onClick={handleCancel}>
          Cancel
        </Button>
        <Button
          type="primary"
          disabled={saveButtonDisabled}
          onClick={handleSave}
        >
          Save
        </Button>
      </div>
    </Space>
  );
});

TopSection.displayName = "TopSection";
export default TopSection;
