
# TEXT=$1

TEMPLATES_PATH=./scripts/templates/components/text





for TEXT in Caption2 Caption1 Footnote SubheadLine Callout Body HeadLine Title3 Title2 Title1 LargeTitle; do
echo $TEXT
DESTINATION_PATH=./app/components/Text/$TEXT
rm -rf $DESTINATION_PATH
mkdir $DESTINATION_PATH
sed -e 's/TEXT/'$TEXT'/g' \
     $TEMPLATES_PATH/index > $DESTINATION_PATH/index.ts
sed -e 's/TEXT/'$TEXT'/g' \
     $TEMPLATES_PATH/text > $DESTINATION_PATH/$TEXT.tsx
sed -e 's/TEXT/'$TEXT'/g' \
     $TEMPLATES_PATH/text.styles > $DESTINATION_PATH/$TEXT.styles.ts
done 