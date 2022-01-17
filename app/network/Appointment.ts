import { AppointmentInterface } from "interfaces";
import moment from "moment";
import { WasteType } from "states/ducks/userPreferences/userPreferences.slice";
import wait from "utils/wait";

export async function getAllAppointment(collectionId: number): Promise<AppointmentInterface[]> {
  // return (await AxiosInstance.get("city")).data as AppointmentInterface[];

  wait(1000);
  return new Promise(function (resolve, reject) {
    resolve(
      [
        {
          id: "123a2_2323_23123_123333",
          date: moment(new Date()).add(0, "day").toDate(),
          type: WasteType.BIO,
        },
        {
          id: "123a2_2323_23123_123333",
          date: moment(new Date()).add(1, "day").toDate(),

          type: WasteType.GREEN,
        },
        {
          id: "123a2_2323_23123_123333",
          date: moment(new Date()).add(1, "day").toDate(),

          type: WasteType.GREEN,
        },
        {
          id: "123a2_2323_23123_123333",
          date: moment(new Date()).add(1, "day").toDate(),

          type: WasteType.GREEN,
        },
        {
          id: "123a2_2323_23123_123333",
          date: moment(new Date()).add(1, "day").toDate(),

          type: WasteType.GREEN,
        },
        {
          id: "123a2_2323_23123_123333",
          date: moment(new Date()).add(2, "day").toDate(),

          type: WasteType.ELECTRO,
        },
        {
          id: "123a2_2323_23123_123333",
          date: moment(new Date()).add(3, "day").toDate(),

          type: WasteType.PACKAGE,
        },
        {
          id: "123a2_2323_23123_123333",
          date: moment(new Date()).add(4, "day").toDate(),

          type: WasteType.RES,
        },
      ].sort((a, b) => a.date.getTime() - b.date.getTime())
    );
  });
}
