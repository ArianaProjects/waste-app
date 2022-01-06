import React, { useEffect, useState } from "react";
import { Button, Input, View } from "components";
import {
  cityInterface,
  placeStateInterface,
} from "states/ducks/userPreferences/userPreferences.slice";
import { getAllCities } from "network";
import { getAllPlaces } from "network/place";
import { t } from "i18n-js";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "style";
import { Image } from "react-native";
import IntroStyles from "../Intro.styles";

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
    props.selectedCity && getAllPlaces(props.selectedCity.id).then((x: any) => setPlaces(x));
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
      <Button.TextButton
        style={{ marginTop: 8 }}
        onPress={() => {
          props.next(0);
        }}
      >
        <Icon
          name="ios-arrow-back-outline"
          style={{ marginRight: 5 }}
          size={16}
          color={Colors.primary.main}
        />
        {t("back")}
      </Button.TextButton>
      <View.Background style={IntroStyles.imageContainer}>
        <Image source={require("assets/images/place.png")} />
      </View.Background>
      <Input.TextPicker label={t("place")} onValueChange={onValueChange} items={items} />
      <Button.Default disabled={!!!props.selectedPlace} onPress={() => props.next(2)}>
        {t("next")}
      </Button.Default>
    </View.Background>
  );
};

export default Place;
