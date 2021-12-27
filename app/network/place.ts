import { placeStateInterface } from "../states/ducks/userPreferences/userPreferences.slice";
import AxiosInstance from "./AxiosInstance";

export async function getAllPlaces(cityId: string): Promise<placeStateInterface[]> {
  return (await AxiosInstance.get(`city/${cityId}/place`)).data as placeStateInterface[];
  // return new Promise(function (resolve, reject) {
  //   resolve([
  //     {
  //       id: 43,
  //       street: "am Steinberg",
  //       fromNumber: null,
  //       toNumber: null,
  //       collection: {
  //         id: 433,
  //         areaId: "2",
  //       },
  //     },
  //     {
  //       id: 423,
  //       street: "am Steinberg",
  //       fromNumber: "2",
  //       toNumber: null,
  //       collection: {
  //         id: 433,
  //         areaId: "2",
  //       },
  //     },
  //     {
  //       id: 433,
  //       street: "am Steinberg",
  //       fromNumber: "3",
  //       toNumber: "13",
  //       collection: {
  //         id: 433,
  //         areaId: "2",
  //       },
  //     },
  //   ]);
  // });
}
