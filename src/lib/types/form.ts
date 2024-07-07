export type AddressProps = {
  city: string;
  suburb: string;
  name: string;
  phone: string;
  location: string;
};

export interface FormFields {
  payment: string;
  address: AddressProps;
  agreement: boolean;
}
