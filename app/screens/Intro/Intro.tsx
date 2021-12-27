import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native";
import { Text, View } from "components";
import { t } from "utils";
import styles from "./Intro.styles";
import navigationOptions from "./Intro.navigationOptions";
import { NavStatelessComponent } from "interfaces";
import { userPreferences } from "states/ducks";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button } from "components";
import { getAllCities } from "../../network";
import {
  actions,
  cityInterface,
  placeStateInterface,
  WastesInterface,
  WasteType,
} from "states/ducks/userPreferences/userPreferences.slice";
import { getAllPlaces } from "network/place";
import { F } from "ramda";
import { RootState } from "states/rootReducer";
import AppIntroSlider from "react-native-app-intro-slider";
import City from "./sections/City";
import Place from "./sections/Place";
import ROI from "./sections/RIO";
import * as Notifications from "expo-notifications";
import { navigate } from "navigation";

const IntroScreen: NavStatelessComponent = () => {
  const dispatch = useDispatch();
  const UP = useSelector((state: RootState) => state.userPreferences);
  const ref = useRef(null);
  const [selectedCity, setSelectedCity] = useState<cityInterface>();
  const [selectedPlace, setSelectedPlace] = useState<placeStateInterface>();
  const [selectedROI, setSelectedROI] = useState<WastesInterface>(UP.ROI);
  const [page, setPage] = useState<number>(0);
  console.log(UP);
  const next = (a: number) => {
    console.log(a);
    //@ts-ignore
    ref.current?.goToSlide(a);
    setPage(a);
  };
  useEffect(() => {
    setSelectedPlace(undefined);
  }, [selectedCity]);
  const slides = [
    {
      key: 1,
      title: "Title 1",
      text: "Description.\nSay something cool",
      backgroundColor: "#59b2ab",
      page: (
        <City selectedCity={selectedCity} next={(a) => next(a)} setSelectedCity={setSelectedCity} />
      ),
    },
    {
      key: 2,
      title: "Title 2",
      text: "Other cool stuff",
      backgroundColor: "#febe29",
      page: (
        <Place
          next={(a) => next(a)}
          selectedCity={selectedCity}
          selectedPlace={selectedPlace}
          setSelectedPlace={setSelectedPlace}
        />
      ),
    },
    {
      key: 3,
      title: "Rocket guy",
      text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
      backgroundColor: "#22bcb5",
      page: (
        <ROI
          collectionId={Number(selectedPlace?.collection.id)}
          next={(a) => next(a)}
          page={page}
          done={() => onDone()}
          selectedROI={selectedROI}
          setSelectedROI={(a) => setSelectedROI(a)}
          updateSelectedROI={(a, b) =>
            setSelectedROI((x) => {
              x[a] = b;
              return x;
            })
          }
        />
      ),
    },
  ];
  const userPreferences = useSelector((state: RootState) => state.userPreferences);
  const renderItem = ({ item }: any) => {
    return (
      <View.Background>
        <Text.Body>{item.title}</Text.Body>
        <Text.Body>{item.text}</Text.Body>
        {item.page}
      </View.Background>
    );
  };

  const onDone = () => {
    if (selectedPlace && selectedCity) {
      dispatch(actions.setNotifications());

      dispatch(actions.changePlace(selectedPlace));
      dispatch(actions.changeCity(selectedCity));
      dispatch(actions.changeROI(selectedROI));
      dispatch(actions.changeIntroDone(true));
      console.log(UP);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <AppIntroSlider
        ref={ref}
        showNextButton={false}
        showPrevButton={false}
        bottomButton={false}
        dotClickEnabled={false}
        showDoneButton={false}
        renderItem={renderItem}
        scrollEnabled={false}
        data={slides}
        onDone={onDone}
      />
      {/* {userPreferences.city == null ? (
        <City />
      ) : userPreferences.place == null ? (
        <Place />
      ) : userPreferences.ROI == null ? (
        <ROI />
      ) : (
        <Text.Body>{t("INTRO_TEXT")}</Text.Body>
      )} */}
    </SafeAreaView>
  );
};
IntroScreen.navigationOptions = navigationOptions();

export default IntroScreen;
