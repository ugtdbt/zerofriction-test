export type AddressType = {
  streetName: string;
  streetNumber: number | null;
  postalCode: number | null;
  city: string;
  country: string;
};

export type ContactDetailType = {
  emailAddress: string;
  telephone: string;
  website: string;
};

export type OrganizationConfigType = {
  migrationMode: boolean;
  code: string;
  description: string;
  bankAccount: string;
  vatAccountNumber: string;
  companyAccountNumber: string;
  contactDetails: ContactDetailType;
  address: AddressType;
};
