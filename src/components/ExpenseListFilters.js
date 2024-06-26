import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "../actions/filters";

const ExpenseListFilters = () => {
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  const [dates, setDates] = useState([
    filters.startDate ? new Date(filters.startDate) : null,
    filters.endDate ? new Date(filters.endDate) : null,
  ]);
  const [startDate, endDate] = dates;

  const handleDateChange = (update) => {
    setDates(update);
    dispatch(setStartDate(update[0] ? update[0].getTime() : null));
    dispatch(setEndDate(update[1] ? update[1].getTime() : null));
  };

  return (
    <div className="content-container">
      <div className="input-group">
        <div className="input-group__item">
          <input
          className="text-input"
            type="text"
            placeholder="Search expenses"
            value={filters.text}
            onChange={(e) => {
              dispatch(setTextFilter(e.target.value));
            }}
          />
        </div>
        <div className="input-group__item">
          <select
          className="select"
            value={filters.sortBy}
            onChange={(e) => {
              if (e.target.value === "date") {
                dispatch(sortByDate());
              } else if (e.target.value === "amount") {
                dispatch(sortByAmount());
              }
            }}
          >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
        </div>
        <div className="input-group__item">
          <ReactDatePicker
            selected={startDate}
            onChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            dateFormat="dd/MM/yyyy"
            isClearable={true}
            placeholderText="Select date range"
          />
        </div>
      </div>
    </div>
  );
};

export default ExpenseListFilters;
