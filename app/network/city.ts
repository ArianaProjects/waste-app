import { cityInterface } from "states/ducks/userPreferences/userPreferences.slice";
import AxiosInstance from "./AxiosInstance";

export async function getAllCities(): Promise<cityInterface[]> {
  return (await AxiosInstance.get("city")).data as cityInterface[];
  // return new Promise(function (resolve, reject) {
  //   resolve([
  //     {
  //       id: "ger_63128",
  //       country: "GER",
  //       name: "Dietzenbach",
  //       zipcode: "63128",
  //     },
  //   ]);
  // });
}
