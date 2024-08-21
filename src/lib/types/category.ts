import { UnitOfMeasurement } from "./unit_of_measurement";

export interface Category {
  id: number;
  name: string;
  image: string;
  units_of_measurement: UnitOfMeasurement[];
}
