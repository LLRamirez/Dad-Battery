import React from 'react';
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from "use-places-autocomplete";
  import useOnclickOutside from "react-cool-onclickoutside";
  import Form from 'react-bootstrap/Form';
import { FormControl } from 'react-bootstrap';

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption
} from "@reach/combobox";

  
  const PlacesAutocomplete = () => {
    const {
      ready,
      value,
      suggestions: { status, data },
      setValue
    } = usePlacesAutocomplete();
  
    const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
      setValue(e.target.value);
    };
  
    const handleSelect = (val: string): void => {
      setValue(val, false);
    };
  
    const renderSuggestions = (): JSX.Element => {
      const suggestions = data.map(({ place_id, description }: any) => (
        <ComboboxOption key={place_id} value={description} />
      ));
  
      return (
        <div>
          {suggestions}
          <li className="logo">
            <img
              src="https://developers.google.com/maps/documentation/images/powered_by_google_on_white.png"
              alt="Powered by Google"
            />
          </li>
        </div>
      );
    };
  
    return (
      <div className="App">
        
        <Combobox onSelect={handleSelect} aria-labelledby="demo">
          <ComboboxInput
            style={{ width: 300, maxWidth: "90%" }}
            value={value}
            onChange={handleInput}
            disabled={!ready}
            placeholder="Enter Shipping Address"
          />
          <ComboboxPopover>
            <ComboboxList>{status === "OK" && renderSuggestions()}</ComboboxList>
          </ComboboxPopover>
        </Combobox>
      </div>
    );
  };

export default PlacesAutocomplete;