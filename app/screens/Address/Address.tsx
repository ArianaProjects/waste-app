import React, { useEffect, useLayoutEffect, useState } from "react";
import { Image, SafeAreaView } from "react-native";
import { Button, Input, Text, View } from "components";
import { t } from "utils";
import styles from "./Address.styles";
import navigationOptions from "./Address.navigationOptions";
import { NavStatelessComponent } from "interfaces";
import navigation, { navigate } from "navigation";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { getAllCities } from "network";
import {
  cityInterface,
  placeStateInterface,
} from "states/ducks/userPreferences/userPreferences.slice";
import { getAllPlaces } from "network/place";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "states";
import { userPreferences } from "states/ducks";

const AddressScreen: NavStatelessComponent = ({ navigation }: any) => {
  const defaultData = useSelector((state: RootState) => state.userPreferences);
  const dispatch = useDispatch();
  const navigator = navigate(navigation);

  const [city, setCity] = useState<cityInterface | null>(defaultData.city);
  const [cities, setCities] = useState<cityInterface[]>();
  const [citiesList, setCitiesList] = useState<{ value: string; label: string }[]>([]);

  const [place, setPlace] = useState<placeStateInterface | null>(defaultData.place);
  const [places, setPlaces] = useState<placeStateInterface[]>();
  const [placesList, setPlacesList] = useState<{ value: string; label: string }[]>([]);

  useLayoutEffect(() => {
    getAllCities().then((x) => setCities(x));
  }, []);
  useLayoutEffect(() => {
    city && getAllPlaces(city.id).then((x: any) => setPlaces(x));
  }, [city]);

  useLayoutEffect(() => {
    places && setPlacesList(transferPlaceKeyList(places));
    cities && setCitiesList(transferCityKeyList(cities));
  }, [cities, places]);

  const handelChangeCity = (value: string) => {
    if (!cities) return;
    const h = cities.find((y) => y.id == value);
    h && setCity(h);
  };
  const handelChangePlace = (value: string) => {
    if (!places) return;
    const h = places.find((y) => y.id == Number(value));
    h && setPlace(h);
  };
  const handelSave = () => {
    dispatch(userPreferences.actions.changeCity(city));
    dispatch(userPreferences.actions.changePlace(place));
    navigator.openSetting();
  };
  // console.log(defaultData.place);

  return (
    <View.Background style={styles.container}>
      <Button.TextButton
        style={{ marginTop: 8, marginLeft: 4 }}
        onPress={() => navigator.openSetting()}
      >
        <Icon
          name="ios-arrow-back-outline"
          style={{ marginRight: 5 }}
          size={16}
          color={Colors.primary.main}
        />
        {t("back")}
      </Button.TextButton>
      <View.Background style={styles.mainComponent}>
        <View.Background style={styles.imageContainer}>
          <Image source={require("assets/images/editPlace.png")} />
        </View.Background>
        <View.Background>
          <Input.TextPicker
            textStyles={styles.inputs}
            value={city?.id}
            label={t("changeCity")}
            onValueChange={handelChangeCity}
            items={citiesList}
          />
          <Input.TextPicker
            textStyles={styles.inputs}
            value={String(place?.id)}
            label={t("changePlace")}
            onValueChange={handelChangePlace}
            items={placesList}
          />
        </View.Background>
      </View.Background>
      <Button.Default style={styles.button} onPress={handelSave}>
        {t("save")}
      </Button.Default>
    </View.Background>
  );
};
AddressScreen.navigationOptions = navigationOptions();

export default AddressScreen;
const transferPlaceKey = (c: placeStateInterface | null) => {
  let ss = c!.street;
  if (c) {
    if (c.fromNumber) ss = ss + " " + c.fromNumber;
    if (c.toNumber) ss = ss + "-" + c.toNumber;
  }
  return { label: ss, value: String(c!.id) };
};
const transferPlaceKeyList = (cs: placeStateInterface[]) => {
  let d: { label: string; value: string }[] = [];
  cs.map((c) => d.push(transferPlaceKey(c)));
  return d;
};
const transferCityKey = (c: cityInterface | null) => {
  return { label: c?.name || "", value: c?.id || "" };
};
const transferCityKeyList = (cs: cityInterface[]) => {
  let d: { label: string; value: string }[] = [];
  cs.map((c) => d.push(transferCityKey(c)));
  return d;
};
