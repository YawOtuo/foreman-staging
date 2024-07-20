"use client";
import { FormFields } from "@/lib/types/form";
import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";

const ACCRA_BOUNDS = {
  north: 5.7718,
  south: 5.5038,
  east: -0.1104,
  west: -0.3098,
};

const Map: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);
  const [marker, setMarker] =
    useState<google.maps.marker.AdvancedMarkerElement | null>(null);
  const {
    setValue,
    register,
    formState: { errors },
  } = useFormContext<FormFields>();

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
        version: "weekly",
        libraries: ["places", "marker"],
      });

      try {
        const { Map } = await loader.importLibrary("maps");
        const { AdvancedMarkerElement } = await loader.importLibrary("marker");
        const { SearchBox } = await loader.importLibrary("places");

        if (!mapRef.current) return;

        const map = new Map(mapRef.current, {
          center: { lat: 5.6037, lng: -0.187 },
          zoom: 17,
          mapId: process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
        });

        setMapInstance(map);

        const newMarker = new AdvancedMarkerElement({
          map,
          position: map.getCenter(),
        });

        setMarker(newMarker);

        if (searchInputRef.current) {
          const searchBox = new SearchBox(searchInputRef.current);
          map.controls[google.maps.ControlPosition.TOP_CENTER].push(
            searchInputRef.current
          );

          // setting bounds for Accra
          const accraBounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(ACCRA_BOUNDS.south, ACCRA_BOUNDS.west),
            new google.maps.LatLng(ACCRA_BOUNDS.north, ACCRA_BOUNDS.east)
          );

          // setting the bounds and restricting to only Ghana
          searchBox.setBounds(accraBounds);

          const autocomplete = new google.maps.places.Autocomplete(
            searchInputRef.current,
            {
              bounds: accraBounds,
              componentRestrictions: { country: "gh" },
              strictBounds: true,
            }
          );

          autocomplete.addListener("place_changed", () => {
            const place = autocomplete.getPlace();
            if (!place.geometry || !place.geometry.location) return;

            newMarker.position = place.geometry.location;
            updateCoordinatesAndAddress(place.geometry.location);

            if (place.geometry.viewport) {
              map.fitBounds(place.geometry.viewport);
            } else {
              map.setCenter(place.geometry.location);
              map.setZoom(17);
            }
          });

          searchBox.addListener("places_changed", () => {
            const places = searchBox.getPlaces();
            if (places?.length === 0) return;

            const bounds = new google.maps.LatLngBounds();
            places?.forEach((place) => {
              if (!place.geometry || !place.geometry.location) return;

              newMarker.position = place.geometry.location;
              updateCoordinatesAndAddress(place.geometry.location);

              if (place.geometry.viewport) {
                bounds.union(place.geometry.viewport);
              } else {
                bounds.extend(place.geometry.location);
              }
            });

            map.fitBounds(bounds);
          });
        }

        map.addListener("click", (e: google.maps.MapMouseEvent) => {
          if (e.latLng) {
            newMarker.position = e.latLng;
            updateCoordinatesAndAddress(e.latLng);
          }
        });
      } catch (error) {
        console.error("Error initializing Google Maps:", error);
      }
    };

    initMap();
  }, []);

  const updateCoordinatesAndAddress = (location: google.maps.LatLng) => {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location }, (results, status) => {
      if (status === "OK" && results && results[0]) {
        setValue("address.location", results[0].formatted_address, {
          shouldValidate: true,
        });
      } else {
        setValue(
          "address.location",
          status === "OK" ? "No address found" : `Geocoder failed: ${status}`,
          { shouldValidate: true }
        );
      }
    });
  };

  return (
    <div>
      <label htmlFor="map-search" className="sr-only">
        Search for a location
      </label>
      <input
        id="map-search"
        ref={searchInputRef}
        className="controls"
        type="text"
        placeholder="Search for a location"
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
      <div
        ref={mapRef}
        style={{ width: "100%", height: "50vh", minHeight: "400px" }}
      ></div>
      <label htmlFor="address-display" className="sr-only">
        Selected address
      </label>
      <input
        id="address-display"
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
      {errors.address?.location && (
        <p className="text-red-600 mt-2 md:text-center">
          {errors.address.location.message}
        </p>
      )}
    </div>
  );
};

export default Map;
