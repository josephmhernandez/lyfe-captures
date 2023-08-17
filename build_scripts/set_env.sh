# Don't run this locally - it's for CI/CD only. It will override your local .env file. 
# Write Secrets (as env vars)
ENV_PATH=../.env
echo "BUILD_ENV=$BUILD_ENV" >> $ENV_PATH
echo "Building for " $BUILD_ENV "....."
echo "CHEC_PK=$CHEC_PK" >> $ENV_PATH
echo "STRIPE_PK=$STRIPE_PK" >> $ENV_PATH
echo "MAPTILER_API_KEY=$MAPTILER_API_KEY" >> $ENV_PATH
echo "SENDGRID_API_KEY=$SENDGRID_API_KEY" >> $ENV_PATH
echo "GOOGLE_API_KEY=$GOOGLE_API_KEY" >> $ENV_PATH
echo "AWS_ACCESS_KEY_ID=$DYNAMO_ACCESS_KEY_ID" >> $ENV_PATH
echo "AWS_SECRET_ACCESS_KEY=$DYNAMO_SECRET_ACCESS_KEY" >> $ENV_PATH
echo "AWS_REGION=$REGION" >> $ENV_PATH
echo "GTM_ID=$GTM_ID" >> $ENV_PATH
echo "GA_MEASUREMENT_ID=$GA_MEASUREMENT_ID" >> $ENV_PATH

# Wrtie Constants (as env vars)
echo "MAX_CHARS_PRIMARY=20" >> $ENV_PATH
echo "MAX_CHARS_SECONDARY=65" >> $ENV_PATH
echo "MAX_PINS=10" >> $ENV_PATH
echo "MAP_ZOOM=10" >> $ENV_PATH
echo "MAP_LOCATION_LAT=40.730610" >> $ENV_PATH
echo "MAP_LOCATION_LNG=-73.935242" >> $ENV_PATH
echo "INITIAL_PIN_SIZE=50" >> $ENV_PATH
echo "MAP_LOCATION=" >> $ENV_PATH
echo "MAX_MAP_ZOOM=18" >> $ENV_PATH
echo "MIN_MAP_ZOOM=4" >> $ENV_PATH
echo "TILE_ZOOM_OFFSET=2" >> $ENV_PATH
echo "CART_ITEM_MAX_QUANTITY=50" >> $ENV_PATH
echo "EMAIL_SUPPORT=help@mapyourmemory.com" >> $ENV_PATH
echo "EMAIL_SPECIAL_REQUESTS=special_requests@mapyourmemory.com" >> $ENV_PATH
