import React, { useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Loader } from "@googlemaps/js-api-loader";

const Map: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const {
    setValue,
    register,
    formState: { errors },
  } = useFormContext();
  const [coordinates, setCoordinates] = useState<string>("");

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || "",
      version: "weekly",
      libraries: ["places", "marker"],
    });

    loader.load().then(() => {
      if (!mapRef.current) return;

      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 5.6037, lng: -0.187 },
        zoom: 17,
        mapId: "MAP_ID_1234",
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      });

      const marker = new google.maps.marker.AdvancedMarkerElement({
        map,
        position: map.getCenter(),
      });

      if (!searchInputRef.current) return;

      const searchBox = new google.maps.places.SearchBox(
        searchInputRef.current
      );
      map.controls[google.maps.ControlPosition.TOP_CENTER].push(
        searchInputRef.current
      );

      map.addListener("bounds_changed", () => {
        searchBox.setBounds(map.getBounds() as google.maps.LatLngBounds);
      });

      searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();
        if (places?.length === 0) return;

        const bounds = new google.maps.LatLngBounds();
        places?.forEach((place) => {
          if (!place.geometry || !place.geometry.location) return;

          marker.position = place.geometry.location;
          updateCoordinatesAndAddress(place.geometry.location);

          if (place.geometry.viewport) {
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
        });

        map.fitBounds(bounds);
      });

      map.addListener("click", (e: google.maps.MapMouseEvent) => {
        if (e.latLng) {
          marker.position = e.latLng;
          updateCoordinatesAndAddress(e.latLng);
        }
      });

      const geocoder = new google.maps.Geocoder();

      const updateCoordinatesAndAddress = (location: google.maps.LatLng) => {
        setCoordinates(`${location.lat()}, ${location.lng()}`);
        geocoder.geocode({ location }, (results, status) => {
          if (status === "OK" && results && results[0]) {
            setValue("address.location", results[0].formatted_address);
          } else {
            setValue(
              "address.location",
              status === "OK"
                ? "No address found"
                : `Geocoder failed: ${status}`
            );
          }
        });
      };
    });
  }, [setValue]);

  return (
    <div>
      <input
        ref={searchInputRef}
        className="controls"
        type="text"
        placeholder="Search Box"
        style={{
          marginTop: "10px",
          width: "90%",
          padding: "10px",
          borderWidth: 2,
          borderRadius: 10,
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
          fontSize: "14px",
        }}
      />
      <div ref={mapRef} style={{ width: "100%", height: "400px" }}></div>
      {/* <input
        type="text"
        value={coordinates}
        readOnly
        placeholder="Coordinates will appear here"
        style={{
          margin: "10px 0",
          width: "100%",
          padding: "5px",
        }}
      /> */}
      <input
        type="text"
        readOnly
        placeholder="Address will appear here"
        style={{
          margin: "10px 0",
          width: "100%",
          padding: "5px",
        }}
        {...register("address.location", {
          required: "Search for a location on the map",
        })}
      />
    </div>
  );
};

export default Map;
