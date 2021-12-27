
# SCREEN=$1

TEMPLATES_PATH=./scripts/templates/screen

     
# echo $SCREEN
# VAR1="import { TranslationKeys as "
# VAR2='TranslationKey } from "screens/'
# VAR3='/translations"'
# DATA=$VAR1$SCREEN$VAR2$SCREEN$VAR3
# echo $DATA


#      sed -e '1i\
# new line' ./app/utils/i18n/resources.ts > ./app/utils/i18n/resources2.ts


for SCREEN in AboutUs Address Calendar Feedback Imprint Language Notification NotificationModal Privacy ROI Settings NotFound; do
# for SCREEN in  IntroCity IntroPlace IntroROI AboutUs Address Calendar Feedback Imprint Intro Language Notification NotificationModal Privacy ROI Settings NotFound; do
SUPPER=${SCREEN^^}

DESTINATION_PATH=./app/screens/$SCREEN
echo $SCREEN $SUPPER
rm -rf $DESTINATION_PATH
mkdir $DESTINATION_PATH
mkdir $DESTINATION_PATH/translations

sed -e 's/SUPPER/'$SUPPER'/g' -e 's/SCREEN/'$SCREEN'/g' \
     $TEMPLATES_PATH/index > $DESTINATION_PATH/index.ts
sed -e 's/SUPPER/'$SUPPER'/g' -e 's/SCREEN/'$SCREEN'/g' \
     $TEMPLATES_PATH/SCREEN> $DESTINATION_PATH/$SCREEN.tsx
sed -e 's/SUPPER/'$SUPPER'/g' -e 's/SCREEN/'$SCREEN'/g' \
     $TEMPLATES_PATH/SCREEN.styles > $DESTINATION_PATH/$SCREEN.styles.ts
sed -e 's/SUPPER/'$SUPPER'/g' -e 's/SCREEN/'$SCREEN'/g' \
     $TEMPLATES_PATH/SCREEN.navigationOptions > $DESTINATION_PATH/$SCREEN.navigationOptions.tsx
sed -e 's/SUPPER/'$SUPPER'/g' -e 's/SCREEN/'$SCREEN'/g' \
     $TEMPLATES_PATH/translations/index.ts > $DESTINATION_PATH/translations/index.ts
sed -e 's/SUPPER/'$SUPPER'/g' -e 's/SCREEN/'$SCREEN'/g' \
     $TEMPLATES_PATH/translations/en.json > $DESTINATION_PATH/translations/en.json
sed -e 's/SUPPER/'$SUPPER'/g' -e 's/SCREEN/'$SCREEN'/g' \
     $TEMPLATES_PATH/translations/de.json > $DESTINATION_PATH/translations/de.json 
# sed -e 's/SUPPER/'$SUPPER'/g' -e 's/SCREEN/'$SCREEN'/g' \
#      $TEMPLATES_PATH/translations/de.json > $DESTINATION_PATH/translations/de.json 
done 