import { Button, Input, View } from "components";
import { t } from "i18n-js";
import { getAllCities } from "network";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { cityInterface } from "states/ducks/userPreferences/userPreferences.slice";
import IntroStyles from "../Intro.styles";

interface cityProps {
  setSelectedCity: (c: cityInterface | undefined) => void;
  selectedCity?: cityInterface;
  next: (a: number) => void;
}
const transferKey = (c: cityInterface | null) => {
  return { label: c?.name || "", value: c?.id || "" };
};
const transferKeyList = (cs: cityInterface[]) => {
  let d: { label: string; value: string }[] = [];
  cs.map((c) => d.push(transferKey(c)));
  return d;
};
const City = (props: cityProps) => {
  const [cities, setCities] = useState<cityInterface[]>([]);
  const [active, setActive] = useState<boolean>();
  const [items, setItems] = useState<{ label: string; value: string }[]>([]);

  useEffect(() => {
    getAllCities().then((x) => setCities(x));
    // console.log(cities);
  }, []);
  useEffect(() => {
    let d: { label: string; value: string }[] = [];
    cities.map((c) => d.push({ label: c.name, value: c.id }));
    setItems(transferKeyList(cities));
  }, [cities]);
  const onValueChange = (value: any, index: number) => {
    const h = cities.find((y) => y.id == value);
    // console.log("ac", h, h != undefined);

    props.setSelectedCity(h);
    setActive(h != undefined);
  };
  return (
    <View.Background>
      <View.Background style={IntroStyles.imageContainer}>
        <Image source={require("assets/images/city.png")} />
      </View.Background>
      <Input.TextPicker label={t("city")} onValueChange={onValueChange} items={items} />
      <Button.Default
        disabled={!!!props.selectedCity}
        style={{ marginVertical: 40 }}
        onPress={() => props.next(1)}
      >
        {t("next")}
      </Button.Default>
    </View.Background>
  );
};

export default City;
