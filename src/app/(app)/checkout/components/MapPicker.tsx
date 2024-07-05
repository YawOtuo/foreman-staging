import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useFormContext } from "react-hook-form";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 5.6037,
  lng: -0.187,
};

// Define libraries outside the component to avoid reloading
const libraries: "places"[] = ["places"];

const MapPicker: React.FC = () => {
  const { setValue } = useFormContext();
  const [markerPosition, setMarkerPosition] = useState(center);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [geocoder, setGeocoder] = useState<google.maps.Geocoder | null>(null);
  const [marker, setMarker] = useState<any>(null); // Use any type for flexibility

  useEffect(() => {
    if (window.google) {
      setGeocoder(new window.google.maps.Geocoder());
    }
  }, []);

  const updateLocationValue = (position: google.maps.LatLngLiteral) => {
    if (geocoder) {
      geocoder.geocode({ location: position }, (results, status) => {
        if (status === "OK" && results && results[0]) {
          setValue("address.location", results[0].formatted_address);
        } else {
          setValue("address.location", `${position.lat},${position.lng}`);
        }
      });
    }
  };

  const onMapClick = (e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      const newPosition = { lat: e.latLng.lat(), lng: e.latLng.lng() };
      setMarkerPosition(newPosition);
      updateLocationValue(newPosition);
    }
  };

  const onMapLoad = (map: google.maps.Map) => {
    setMap(map);
    if (
      window.google &&
      google.maps.marker &&
      google.maps.marker.AdvancedMarkerElement
    ) {
      const newMarker = new google.maps.marker.AdvancedMarkerElement({
        map,
        position: markerPosition,
      });
      setMarker(newMarker);
    } else {
      console.error(
        "AdvancedMarkerElement is not available in google.maps.marker."
      );
    }
  };

  useEffect(() => {
    if (marker) {
      marker.position = markerPosition;
      marker.map = map;
    }
  }, [markerPosition, marker, map]);

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBVujVNppIhzZptI8sSig-8GDH2CrQcAbY"
      libraries={libraries}
      loadingElement={<div>Loading...</div>}
    >
      <div className="relative">
        <div className="absolute top-2 left-2 right-2 z-10">
          <SearchBar
            setMarkerPosition={setMarkerPosition}
            map={map}
            updateLocationValue={updateLocationValue}
          />
        </div>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
          onClick={onMapClick}
          onLoad={onMapLoad}
        >
          {/* Marker is now managed via useEffect */}
        </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default MapPicker;

interface SearchBarProps {
  setMarkerPosition: (position: google.maps.LatLngLiteral) => void;
  map: google.maps.Map | null;
  updateLocationValue: (position: google.maps.LatLngLiteral) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  setMarkerPosition,
  map,
  updateLocationValue,
}) => {
  const { setValue } = useFormContext();
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue: setSearchValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: { country: "gh" },
    },
    debounce: 300,
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSelect = async (address: string) => {
    setSearchValue(address, false);
    clearSuggestions();
    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      const newPosition = { lat, lng };
      setMarkerPosition({ lat, lng });
      updateLocationValue(newPosition);
      setValue("address.location", `${lat}, ${lng}`);
      map?.panTo({ lat, lng });
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Search for a location"
        className="w-full p-2 border rounded"
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};
