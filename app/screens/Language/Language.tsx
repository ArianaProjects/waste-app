import { Button, Text, View } from "components";
import { locale } from "expo-localization";
import I18n, { currentLocale } from "i18n-js";
import { NavStatelessComponent } from "interfaces";
import { navigate } from "navigation";
import React, { useState } from "react";
import { Animated, SafeAreaView, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "states";
import { userPreferences } from "states/ducks";
import { currentLanguage, t } from "utils";
import navigationOptions from "./Language.navigationOptions";
import styles from "./Language.styles";

const LanguageScreen: NavStatelessComponent = (props: any) => {
  const navigator = navigate(props.navigation);
  const defaultData = useSelector((state: RootState) => state.userPreferences.language);
  const dispatch = useDispatch();
  const [active, setActive] = useState<string>(defaultData);
  // console.log(defaultData, I18n.locale, currentLanguage, locale);

  return (
    <View.Background style={styles.container}>
      <Button.TextButton
        style={{ marginTop: 8 }}
        onPress={() => {
          navigator.openSetting();
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

      <View.Background style={styles.mainContainer}>
        <Text.Title3>{t("changeLanguage")}</Text.Title3>

        <Animated.ScrollView style={styles.trashCardsContainer}>
          {AvailableLanguages.map((item) => (
            <TouchableWithoutFeedback
              onPress={() => {
                setActive(item.value);
              }}
              key={item.value}
            >
              <View.Paper
                style={[styles.trashCard, active === item.value ? styles.activeTrashCard : {}]}
              >
                <Text.Callout>{item.name}</Text.Callout>
              </View.Paper>
            </TouchableWithoutFeedback>
          ))}
        </Animated.ScrollView>
      </View.Background>
      <Button.Default
        style={styles.button}
        onPress={() => {
          dispatch(userPreferences.actions.changeLanguage(active));
          I18n.locale = active;
          navigator.openSetting();
        }}
      >
        {t("save")}
      </Button.Default>
    </View.Background>
  );
};
LanguageScreen.navigationOptions = navigationOptions();

export default LanguageScreen;

const AvailableLanguages: { name: string; value: string }[] = [
  { name: "English", value: "en" },
  { name: "Deutsche", value: "de" },
];
