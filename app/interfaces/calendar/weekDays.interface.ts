import { WasteType } from "states/ducks/userPreferences/userPreferences.slice";

enum WeekDays {
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
}

interface AppointmentInterface {
  id: string;
  date: Date;
  type: WasteType;
}

export { WeekDays, AppointmentInterface };
