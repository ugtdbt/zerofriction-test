export interface State<T> {
  data: T;
  valideAddressForm: boolean;
  valideContactDetailsForm: boolean;
  valideOrganizationDetailsForm: boolean;
  success: boolean;
  save: boolean;
  cancel: boolean;
  formtouched: boolean;
  formreset: boolean;
}

export interface Action<T> {
  type: string;
  payload?: T;
}
