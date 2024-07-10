// // components/GooglePlacesSearch.js
'use client';


// components/GooglePlacesSearch.js
import React, { useState, useEffect, useRef } from 'react';

const GooglePlacesSearch = ({ setPlace }) => {
  const autocompleteRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (window.google) {
      const autocomplete = new window.google.maps.places.Autocomplete(autocompleteRef.current, {
        types: ["geocode"],
      });

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        setInputValue(place.formatted_address);
        setPlace(place.formatted_address);
      });
    }
  }, []);

  return (
    <input
      ref={autocompleteRef}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Enter Place"
      className="form-control control"
    />
  );
};

export default GooglePlacesSearch;
