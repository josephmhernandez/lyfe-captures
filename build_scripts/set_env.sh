# Write Secrets (as env vars)
echo "BUILD_ENV=$BUILD_ENV" >> .env
echo "Building for " $BUILD_ENV "....."
echo "CHEC_PK=$CHEC_PK" >> .env
echo "STRIPE_PK=$STRIPE_PK" >> .env
echo "MAPTILER_API_KEY=$MAPTILER_API_KEY" >> .env
echo "GOOGLE_API_KEY=$GOOGLE_API_KEY" >> .env

# Wrtie Constants (as env vars)
echo "MAX_CHARS_PRIMARY=50" >> .env
echo "MAX_CHARS_SECONDARY=60" >> .env
echo "MAX_PINS=1" >> .env
echo "MAP_ZOOM=13" >> .env
echo "MAP_LOCATION_LAT=40.730610" >> .env
echo "MAP_LOCATION_LNG=-73.935242" >> .env
echo "INITIAL_PIN_SIZE=50" >> .env
echo "MAP_LOCATION=" >> .env
echo "MAX_MAP_ZOOM=18" >> .env
echo "MIN_MAP_ZOOM=4" >> .env
echo "TILE_ZOOM_OFFSET=2" >> .env
echo "CART_ITEM_MAX_QUANTITY=50" >> .env
echo "EMAIL_SUPPORT=help@mapyourmemory.com" >> .env

