import type { Action } from "../../utils/Interfaces";
import type {
  OrganizationConfigType,
  AddressType,
  ContactDetailType,
} from "../../utils/types/organisation-config";
import { OrganisationConfigurationActionTypes } from "../actionTypes/organisationConfigurationActionTypes";
import type { Dispatch } from "redux";

export const resetOrganisationConfiguration = () => {
  return (dispatch: Dispatch<Action<OrganizationConfigType>>) => {
    dispatch({
      type: OrganisationConfigurationActionTypes.RESET_FORM,
    });
  };
};

export const isFormTouched = () => {
  return (dispatch: Dispatch<Action<OrganizationConfigType>>) => {
    dispatch({
      type: OrganisationConfigurationActionTypes.FORM_TOUCHED,
    });
  };
};

export const valideAddressForm = (isValide: boolean) => {
  return (dispatch: Dispatch<Action<any>>) => {
    dispatch({
      type: OrganisationConfigurationActionTypes.VALIDE_ADDRESS_FORM,
      payload: isValide,
    });
  };
};

export const valideContactDetails = (isValide: boolean) => {
  return (dispatch: Dispatch<Action<any>>) => {
    dispatch({
      type: OrganisationConfigurationActionTypes.VALIDE_CONTACT_DETAILS_FORM,
      payload: isValide,
    });
  };
};

export const valideOrganizationDetails = (isValide: boolean) => {
  return (dispatch: Dispatch<Action<any>>) => {
    dispatch({
      type: OrganisationConfigurationActionTypes.VALIDE_ORGANIZATIONAL_DETAILS_FORM,
      payload: isValide,
    });
  };
};

export const clickSaveButton = () => {
  return (dispatch: Dispatch<Action<OrganizationConfigType>>) => {
    dispatch({
      type: OrganisationConfigurationActionTypes.CLICK_SAVE_BUTTON,
    });
  };
};

export const clickAddressSaveButton = (formValues: AddressType) => {
  return (dispatch: Dispatch<Action<AddressType>>) => {
    dispatch({
      type: OrganisationConfigurationActionTypes.SAVE_ADDRESS_FORM,
      payload: formValues,
    });
  };
};

export const clickContactDetailsSaveButton = (
  formValues: ContactDetailType
) => {
  return (dispatch: Dispatch<Action<ContactDetailType>>) => {
    dispatch({
      type: OrganisationConfigurationActionTypes.SAVE_CONTACT_DETAILS_FORM,
      payload: formValues,
    });
  };
};

export const clickOrganizationDetailsSaveButton = (
  formValues: OrganizationConfigType
) => {
  return (dispatch: Dispatch<Action<OrganizationConfigType>>) => {
    dispatch({
      type: OrganisationConfigurationActionTypes.SAVE_ORGANIZATION_DETAILS_FORM,
      payload: formValues,
    });
  };
};
