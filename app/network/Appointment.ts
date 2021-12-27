import { WasteType } from "states/ducks/userPreferences/userPreferences.slice";
import { AppointmentInterface } from "interfaces";
import wait from "utils/wait";
import { AxiosInstance } from "network";

export async function getAllAppointment(collectionId: number): Promise<AppointmentInterface[]> {
  return (await AxiosInstance.get("city")).data as AppointmentInterface[];

  // console.log("start");
  // wait(1000);
  // console.log("done");
  // return new Promise(function (resolve, reject) {
  //   resolve(
  //     [
  //       {
  //         id: "123a2_2323_23123_123333",
  //         date: new Date("2021-12-18T20:44:39+01:00"),
  //         type: WasteType.BIO,
  //       },
  //       {
  //         id: "123a2_2323_23123_123333",
  //         date: new Date("2021-12-18T20:44:39+01:00"),
  //         type: WasteType.GREEN,
  //       },
  //       {
  //         id: "123a2_2323_23123_123333",
  //         date: new Date("2021-12-19T20:44:39+01:00"),
  //         type: WasteType.ELECTRO,
  //       },
  //       {
  //         id: "123a2_2323_23123_123333",
  //         date: new Date("2021-12-20T20:44:39+01:00"),
  //         type: WasteType.ELECTRO,
  //       },
  //       {
  //         id: "123a2_2323_23123_123333",
  //         date: new Date("2021-12-18T20:44:39+01:00"),
  //         type: WasteType.PAPER,
  //       },
  //       {
  //         id: "123a2_2323_23123_123333",
  //         date: new Date("2021-12-18T20:44:39+01:00"),
  //         type: WasteType.SPECIAL,
  //       },
  //       {
  //         id: "123a2_2323_23123_123333",
  //         date: new Date("2021-12-18T20:44:39+01:00"),
  //         type: WasteType.ELECTRO,
  //       },
  //     ].sort((a, b) => a.date.getTime() - b.date.getTime())
  //   );
  // });
}
