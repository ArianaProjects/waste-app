import { WasteType } from "states/ducks/userPreferences/userPreferences.slice";

interface AppointmentInterface {
  id: string;
  date: Date;
  type: WasteType;
}

export { AppointmentInterface };
