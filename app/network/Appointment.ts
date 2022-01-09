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
          date: moment(new Date()).add(10, "second").toDate(),
          type: WasteType.BIO,
        },
        {
          id: "123a2_2323_23123_123333",
          date: moment(new Date()).add(20, "second").toDate(),

          type: WasteType.GREEN,
        },
        {
          id: "123a2_2323_23123_123333",
          date: moment(new Date()).add(30, "second").toDate(),

          type: WasteType.ELECTRO,
        },
        {
          id: "123a2_2323_23123_123333",
          date: moment(new Date()).add(40, "second").toDate(),

          type: WasteType.ELECTRO,
        },
        {
          id: "123a2_2323_23123_123333",
          date: moment(new Date()).add(100, "second").toDate(),

          type: WasteType.ELECTRO,
        },
        {
          id: "123a2_2323_23123_123333",
          date: moment(new Date()).add(100, "second").toDate(),

          type: WasteType.ELECTRO,
        },
        {
          id: "123a2_2323_23123_123333",
          date: moment(new Date()).add(100, "day").toDate(),

          type: WasteType.ELECTRO,
        },
        {
          id: "123a2_2323_23123_123333",
          date: moment(new Date()).add(100, "day").toDate(),

          type: WasteType.PAPER,
        },
        {
          id: "123a2_2323_23123_123333",
          date: moment(new Date()).add(100, "day").toDate(),

          type: WasteType.SPECIAL,
        },
        {
          id: "123a2_2323_23123_123333",
          date: moment(new Date()).add(100, "day").toDate(),

          type: WasteType.ELECTRO,
        },
      ].sort((a, b) => a.date.getTime() - b.date.getTime())
    );
  });
}
