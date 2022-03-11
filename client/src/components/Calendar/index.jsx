import React, { useState } from 'react';
import { SectionDates } from "./calendarElements";
import { Button } from "@material-ui/core";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import PeopleIcon from "@material-ui/icons/People";

const SearchDates = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <SectionDates>

      <Button
        className="btn"
        onClick={() => setShowSearch(!showSearch)}
        variant="outlined"
      >
        { showSearch ? "Hide" : "Search Dates"  }
      </Button>
      { showSearch &&
      <div className="search">
        <DateRangePicker
          ranges={[selectionRange]}
          onChange={handleSelect}
        />
        <h2
          className="search__title"
        >
          Number of guests
          <PeopleIcon />
        </h2>
        <input
          className="search__input"
          min={0}
          defaultValue={2}
          type="number"
        />
        <Button
          className="search__button"
        >
          Search Airbnb
        </Button>
      </div>
      }
    </SectionDates>
  );
};

export default SearchDates;