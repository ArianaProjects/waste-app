import { View } from "components";
import { NavStatelessComponent } from "interfaces";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { useDispatch, useSelector } from "react-redux";
import {
  actions,
  cityInterface,
  placeStateInterface,
  WastesInterface,
} from "states/ducks/userPreferences/userPreferences.slice";
import { RootState } from "states/rootReducer";
import navigationOptions from "./Intro.navigationOptions";
import { default as IntroStyles, default as styles } from "./Intro.styles";
import City from "./sections/City";
import Place from "./sections/Place";
import ROI from "./sections/RIO";

const IntroScreen: NavStatelessComponent = () => {
  const dispatch = useDispatch();
  const UP = useSelector((state: RootState) => state.userPreferences);
  const ref = useRef(null);
  const [selectedCity, setSelectedCity] = useState<cityInterface>();
  const [selectedPlace, setSelectedPlace] = useState<placeStateInterface>();
  const [selectedROI, setSelectedROI] = useState<WastesInterface>(UP.ROI);
  const [page, setPage] = useState<number>(0);
  // console.log("UP", UP);
  const next = (a: number) => {
    // console.log(a);
    //@ts-ignore
    ref.current?.goToSlide(a);
    // setPage(a);
  };

  const onDone = () => {
    if (selectedPlace && selectedCity) {
      dispatch(actions.changePlace(selectedPlace));
      dispatch(actions.changeCity(selectedCity));
      dispatch(actions.changeROI(selectedROI));
      dispatch(actions.changeIntroDone(true));
    }
  };
  useEffect(() => {
    setSelectedPlace(undefined);
  }, [selectedCity]);
  const slides = [
    {
      key: 1,
      // title: "Title 1",
      // text: "Description.\nSay something cool",
      // backgroundColor: "green",
      page: (
        <City selectedCity={selectedCity} next={(a) => next(a)} setSelectedCity={setSelectedCity} />
      ),
    },
    {
      key: 2,
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
    return <View.Background>{item.page}</View.Background>;
  };

  return (
    <View.Background style={styles.container}>
      <AppIntroSlider
        ref={ref}
        showNextButton={false}
        showPrevButton={false}
        bottomButton={false}
        dotClickEnabled={false}
        showDoneButton={false}
        scrollEnabled={false}
        renderItem={renderItem}
        data={slides}
        onDone={onDone}
        activeDotStyle={IntroStyles.activeDotStyle}
        dotStyle={IntroStyles.dotStyle}
      />
      {/* {userPrefer ences.city == null ? (
        <City />
      ) : userPreferences.place == null ? (
        <Place />
      ) : userPreferences.ROI == null ? (
        <ROI />
      ) : (
        <Text.Body>{t("INTRO_TEXT")}</Text.Body>
      )} */}
    </View.Background>
  );
};
IntroScreen.navigationOptions = navigationOptions();

export default IntroScreen;
