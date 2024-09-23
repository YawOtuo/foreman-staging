export type AddressProps = {
  city: string;
  suburb: string;
  name: string;
  phone: string;
  location: string;
  deliveryDate:Date | null;
};

export interface FormFields {
  payment: string;
  address: AddressProps;
  agreement: boolean;
  nearestLandmark?: string;
}
