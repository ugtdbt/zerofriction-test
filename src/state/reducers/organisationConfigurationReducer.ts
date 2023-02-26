import { Console } from "console";
import type { State, Action } from "../../utils/Interfaces";
import type { OrganizationConfigType } from "../../utils/types/organisation-config";

import { OrganisationConfigurationActionTypes } from "../actionTypes/organisationConfigurationActionTypes";

const initialState: State<{ organizationConfig: OrganizationConfigType }> = {
  data: {
    organizationConfig: {
      migrationMode: true,
      code: "",
      description: "",
      bankAccount: "",
      vatAccountNumber: "",
      companyAccountNumber: "",
      address: {
        streetName: "",
        streetNumber: null,
        postalCode: null,
        city: "",
        country: "",
      },
      contactDetails: {
        emailAddress: "",
        telephone: "",
        website: "",
      },
    },
  },
  valideAddressForm: false,
  valideContactDetailsForm: false,
  valideOrganizationDetailsForm: false,
  save: false,
  cancel: false,
  success: false,
  formtouched: false,
  formreset: false,
};

const OrganisationConfigurationReducer = (
  state = initialState,
  action: Action<OrganizationConfigType>
): any => {
  switch (action.type) {
    case OrganisationConfigurationActionTypes.RESET_FORM:
      return {
        ...initialState,
        formreset: !state.formreset,
      };

    case OrganisationConfigurationActionTypes.FORM_TOUCHED:
      return {
        ...state,
        formtouched: true,
      };

    case OrganisationConfigurationActionTypes.VALIDE_ADDRESS_FORM:
      return {
        ...state,
        valideAddressForm: action.payload,
      };

    case OrganisationConfigurationActionTypes.VALIDE_CONTACT_DETAILS_FORM:
      return {
        ...state,
        valideContactDetailsForm: action.payload,
      };

    case OrganisationConfigurationActionTypes.VALIDE_ORGANIZATIONAL_DETAILS_FORM:
      return {
        ...state,
        valideOrganizationDetailsForm: action.payload,
      };

    case OrganisationConfigurationActionTypes.CLICK_SAVE_BUTTON:
      return {
        ...state,
        save: true,
      };
    case OrganisationConfigurationActionTypes.SAVE_ADDRESS_FORM:
      return {
        ...state,
        data: {
          organizationConfig: {
            ...state.data.organizationConfig,
            address: action.payload,
          },
        },
      };
    case OrganisationConfigurationActionTypes.SAVE_CONTACT_DETAILS_FORM:
      return {
        ...state,
        data: {
          organizationConfig: {
            ...state.data.organizationConfig,
            contactDetails: action.payload,
          },
        },
      };
    case OrganisationConfigurationActionTypes.SAVE_ORGANIZATION_DETAILS_FORM:
      return {
        ...state,
        data: {
          organizationConfig: {
            ...action.payload,
            address: state.data.organizationConfig.address,
            contactDetails: state.data.organizationConfig.contactDetails,
          },
        },
      };
    default:
      return state;
  }
};

export default OrganisationConfigurationReducer;
