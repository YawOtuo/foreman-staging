export interface ShippingAddress {
  nearest_landmark?: string | null;
  recipient_name: string;
  recipient_phone: string;
  area: string;
  constituency: string;
  // address: AddressProps;
  location?: string | null;
}
