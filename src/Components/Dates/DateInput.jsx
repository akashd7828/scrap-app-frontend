import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FormControl, FormLabel, Box } from '@chakra-ui/react';
import "./Dates.css"
const DateInput = ({ name, value, onChange }) => {
  const handleChange = (date) => {
    onChange(name, date);
  };

  return (
    <FormControl>
      <FormLabel
        htmlFor={name}
        fontSize="sm"
        fontWeight="md"
        color="gray.700"
        _dark={{ color: 'gray.50' }}
        mt="2%">
        {name}
      </FormLabel>
      <Box>
        <DatePicker
          id={name}
          name={name}
          selected={value}
          onChange={handleChange}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
          timeCaption="time"
          className="react-datepicker__input-container" // Ensure the custom CSS is applied
        />
      </Box>
    </FormControl>
  );
};

export default DateInput;
