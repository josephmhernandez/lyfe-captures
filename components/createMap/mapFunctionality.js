// Random Map functionality

/**
 * Converts map object to description string for customer to identify map in cart
 * Order of getting descritpion:
 * 1. textPrimary
 * 2. textSecondary
 * 3. center coordinate to nearest city
 *
 * @param mapObj the map object in cart
 * @param {string} mapObj.textPrimary the primary text on the map
 * @param {string} mapObj.textSecondary the secondary text on the map
 * @param {[lng, lat]} mapObj.center the coordinates of center of map
 * @return description string
 */
export async function getMapDescriptionText(
  primaryText,
  secondaryText,
  center
) {
  const beginText = "Map near ";
  if (primaryText.length > 0) {
    return "Map of " + primaryText;
  }

  if (secondaryText.length > 0) {
    return "Map of " + secondaryText;
  }

  // Look up coordinates
  var geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(center[0], center[1]);

  let rtnText = await geocoder.geocode({ location: latlng }).then((result) => {
    const { results } = result;
    let rtnText = beginText + center[0] + ", " + center[1];
    if (results[0]) {
      console.log(results[0].formatted_address);
      rtnText = beginText + results[0].formatted_address;
      return rtnText;
    } else {
      console.log("No results found Geocoder");
    }
    return rtnText;
  });

  return rtnText;
}
