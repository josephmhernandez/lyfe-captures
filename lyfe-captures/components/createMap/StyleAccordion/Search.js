// https://mui.com/material-ui/react-text-field/#inputs

import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import throttle from "lodash/throttle";

import Box from "@mui/material/Box";
import Script from "next/script";

// import LocationOnIcon from '@mui/icons-material/LocationOn';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import parse from "autosuggest-highlight/parse";
import { mapActions } from "../../../store/map-slice";
import { useDispatch } from "react-redux";

const autocompleteService = { current: null };
const geocoderService = { current: null };
const Search = (props) => {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [center, setCenter] = useState(null);
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch();

  const handleSearchClick = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  const handleOnSearch = async (locationObj) => {
    if (locationObj === null) {
      return;
    }
    dispatch(mapActions.changeLocation(locationObj));

    const { place_id } = locationObj;

    fetchLngLat({ placeId: place_id }, (results) => {
      if (results[0]) {
        const location = JSON.stringify(results[0].geometry.location);
        location = JSON.parse(location); 
        dispatch(mapActions.changeMapCenter(location));
      }
    });
  };

  const fetchPlaceList = React.useMemo(
    () =>
      throttle((request, callback) => {
        autocompleteService.current.getPlacePredictions(request, callback);
      }, 200),
    []
  );

  const fetchLngLat = React.useMemo(
    () =>
      throttle((request, callback) => {
        geocoderService.current.geocode(request, callback);
      }, 200),
    []
  );

  React.useEffect(() => {
    let active = true;

    if (!autocompleteService.current && window.google) {
      autocompleteService.current =
        new window.google.maps.places.AutocompleteService();

      geocoderService.current = new window.google.maps.Geocoder();
    }
    if (!autocompleteService.current) {
      return undefined;
    }

    if (inputValue === "") {
      setOptions(value ? [value] : []);
      return undefined;
    }

    fetchPlaceList({ input: inputValue }, (results) => {
      if (active) {
        let newOptions = [];

        if (value) {
          newOptions = [value];
        }

        if (results) {
          newOptions = [...newOptions, ...results];
        }

        setOptions(newOptions);
      }
    });

    return () => {
      active = false;
    };
  }, [value, inputValue, fetchPlaceList]);
  return (
    <div>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}&libraries=places`}
        onLoad={() => {
        }}
      ></Script>
      <Autocomplete
        id="google-map-demo"
        sx={{ width: 300 }}
        getOptionLabel={(option) =>
          typeof option === "string" ? option : option.description
        }
        filterOptions={(x) => x}
        options={options}
        autoComplete
        includeInputInList
        filterSelectedOptions
        value={value}
        onChange={(event, newValue) => {
          setOptions(newValue ? [newValue, ...options] : options);
          setValue(newValue);
          // This is when the user selects something from drop down. This is what we want. to update the map.
          // this.props.onSearch(newValue);

          // Call API here and then we can pass center to props.onSearch() <- name that something like on center change....
          // newValue.place_id <- path
          handleOnSearch(newValue);
        }}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderInput={(params) => (
          <TextField {...params} label="Add a location" fullWidth />
        )}
        renderOption={(props, option) => {
          const matches =
            option.structured_formatting.main_text_matched_substrings;
          const parts = parse(
            option.structured_formatting.main_text,
            matches.map((match) => [match.offset, match.offset + match.length])
          );

          return (
            <li {...props}>
              <Grid container alignItems="center">
                <Grid item>
                  <Box
                    // component={LocationOnIcon}
                    sx={{ color: "text.secondary", mr: 2 }}
                  />
                </Grid>
                <Grid item xs>
                  {parts.map((part, index) => (
                    <span
                      key={index}
                      style={{
                        fontWeight: part.highlight ? 700 : 400,
                      }}
                    >
                      {part.text}
                    </span>
                  ))}

                  <Typography variant="body2" color="text.secondary">
                    {option.structured_formatting.secondary_text}
                  </Typography>
                </Grid>
              </Grid>
            </li>
          );
        }}
      />
    </div>
  );
};

export default Search;
