import React, { useEffect, useState } from "react";
import { Button, Input, View } from "components";
import {
  cityInterface,
  placeStateInterface,
} from "states/ducks/userPreferences/userPreferences.slice";
import { getAllCities } from "network";
import { getAllPlaces } from "network/place";

interface placeProps {
  setSelectedPlace: (c: placeStateInterface) => void;
  selectedCity?: cityInterface;
  selectedPlace?: placeStateInterface;
  next: (a: number) => void;
}
const transferKey = (c: placeStateInterface | null) => {
  let ss = c!.street;
  if (c) {
    if (c.fromNumber) ss = ss + " " + c.fromNumber;
    if (c.toNumber) ss = ss + "-" + c.toNumber;
  }
  return { label: ss, value: String(c!.id) };
};
const transferKeyList = (cs: placeStateInterface[]) => {
  let d: { label: string; value: string }[] = [];
  cs.map((c) => d.push(transferKey(c)));
  return d;
};

const Place = (props: placeProps) => {
  const [places, setPlaces] = useState<placeStateInterface[]>([]);
  const [items, setItems] = useState<{ label: string; value: string }[]>([]);

  useEffect(() => {
    props.selectedCity && getAllPlaces(props.selectedCity.id).then((x) => setPlaces(x));
  }, [props.selectedCity]);
  useEffect(() => {
    setItems(transferKeyList(places));
  }, [places]);
  const onValueChange = (value: any, index: number) => {
    const h = places.find((y) => y.id == value);
    h && props.setSelectedPlace(h);
  };

  return (
    <View.Background>
      <Input.TextPicker onValueChange={onValueChange} items={items} />
      <Button.Default disabled={!!!props.selectedPlace} onPress={() => props.next(2)}>
        Next
      </Button.Default>
      <Button.Default
        onPress={() => {
          props.next(0);
        }}
      >
        Previous
      </Button.Default>
    </View.Background>
  );
};

export default Place;
