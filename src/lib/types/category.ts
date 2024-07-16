export interface Category {
  id: number;
  name: string;
  image: string;
  units_of_measurement: {
    unit: string;
    description: string;
  }[];
}