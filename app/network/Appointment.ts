import { WasteType } from "states/ducks/userPreferences/userPreferences.slice";
import { AppointmentInterface } from "interfaces";
import wait from "utils/wait";
import { AxiosInstance } from "network";
import moment from "moment";

export async function getAllAppointment(collectionId: number): Promise<AppointmentInterface[]> {
  // return (await AxiosInstance.get("city")).data as AppointmentInterface[];

  // console.log("start");
  wait(1000);
  // console.log("done");
  return new Promise(function (resolve, reject) {
    const now = new Date();
    const later = new Date(now);
    const d = later.setDate(now.getSeconds() + 10);

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
