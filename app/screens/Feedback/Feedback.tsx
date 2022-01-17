import { Button, Input, View } from "components";
import { NavStatelessComponent } from "interfaces";
import { navigate } from "navigation";
import React from "react";
import { AirbnbRating } from "react-native-ratings";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "style";
import { t } from "utils";
import navigationOptions from "./Feedback.navigationOptions";
import styles from "./Feedback.styles";

const FeedbackScreen: NavStatelessComponent = (props: any) => {
  const navigator = navigate(props.navigation);
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
      <View.Background style={styles.main}>
        <View.Background>
          <AirbnbRating
            count={5}
            reviews={["Bad", "Meh", "Good", "Very Good", "Unbelievable"]}
            defaultRating={5}
          />
          <Input.Text multiline numberOfLines={9} placeholder={t("rateUs")} style={styles.input} />
          <Button.Default
            onPress={() => {
              // TODO send Data
              navigator.openSetting();
            }}
          >
            {" "}
            {t("send")}{" "}
          </Button.Default>
        </View.Background>
      </View.Background>
      {/* <WebView source={{ uri: "https://www.arianagermany.com/impresum" }} /> */}
    </View.Background>
  );
};
FeedbackScreen.navigationOptions = navigationOptions();

export default FeedbackScreen;
