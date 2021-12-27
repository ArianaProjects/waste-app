
# TEXT=$1

TEMPLATES_PATH=./scripts/templates/components/view





for VIEW in Background Paper; do
echo $VIEW
DESTINATION_PATH=./app/components/View/$VIEW
rm -rf $DESTINATION_PATH
mkdir $DESTINATION_PATH
sed -e 's/VIEW/'$VIEW'/g' \
     $TEMPLATES_PATH/index.ts > $DESTINATION_PATH/index.ts
sed -e 's/VIEW/'$VIEW'/g' \
     $TEMPLATES_PATH/Body.tsx > $DESTINATION_PATH/$VIEW.tsx
sed -e 's/VIEW/'$VIEW'/g' \
     $TEMPLATES_PATH/Body.styles.ts > $DESTINATION_PATH/$VIEW.styles.ts
done 