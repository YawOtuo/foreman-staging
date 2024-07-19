import React, { useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";

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
  } = useFormContext();
  const [coordinates, setCoordinates] = useState<string>("");

  useEffect(() => {
    const loadGoogleMaps = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&libraries=places,marker&v=beta`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      script.onerror = () => console.error("Failed to load Google Maps API");
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    };

    const cleanup = loadGoogleMaps();
    return cleanup;
  }, []);

  const initMap = () => {
    if (!mapRef.current || !window.google) return;

    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 5.6037, lng: -0.187 },
      zoom: 17,
      mapId: process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
    });

    const newMarker = new window.google.maps.marker.AdvancedMarkerElement({
      map,
      position: map.getCenter(),
    });

    setMapInstance(map);
    setMarker(newMarker);

    if (searchInputRef.current) {
      initSearchBox(map, newMarker);
    }

    map.addListener("click", (e: google.maps.MapMouseEvent) => {
      if (e.latLng) {
        newMarker.position = e.latLng;
        updateCoordinatesAndAddress(e.latLng);
      }
    });
  };

  const initSearchBox = (
    map: google.maps.Map,
    marker: google.maps.marker.AdvancedMarkerElement
  ) => {
    if (!searchInputRef.current) return;

    const searchBox = new window.google.maps.places.SearchBox(
      searchInputRef.current
    );
    map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(
      searchInputRef.current
    );

    map.addListener("bounds_changed", () => {
      searchBox.setBounds(map.getBounds() as google.maps.LatLngBounds);
    });

    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();
      if (places?.length === 0) return;

      const bounds = new window.google.maps.LatLngBounds();
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
  };

  const updateCoordinatesAndAddress = (location: google.maps.LatLng) => {
    setCoordinates(`${location.lat()}, ${location.lng()}`);
    const geocoder = new window.google.maps.Geocoder();
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
      {/* {errors.address?.location && (
        <p style={{ color: "red" }}>{errors.address.location.message}</p>
      )} */}
    </div>
  );
};

export default Map;
