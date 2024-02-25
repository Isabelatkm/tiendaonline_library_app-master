// CheckboxWithTextbox.js

import React, { useState } from 'react';

const CheckboxWithTextbox = ({ id, lblnombre, onTextboxChange }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [textBoxValue, setTextBoxValue] = useState('');

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setTextBoxValue('');
  };

  const handleTextboxChange = (event) => {
    setTextBoxValue(event.target.value);
    onTextboxChange(id, event.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        {lblnombre}
      </label>

      {isChecked && (
        <div>
          <label>
            <input
              type="text"
              value={textBoxValue}
              onChange={handleTextboxChange}
            />
          </label>
        </div>
      )}
    </div>
  );
};

export default CheckboxWithTextbox;
