import React, { useState } from 'react';

const GarmentsSidebarMoodCheckbox = ({ idMood, moodName }) => {
  const [checked, setChecked] = useState(false);

  const comment = () => {
    //Handle moods filter
  };

  return (
    <label className="flex items-center justify-start space-x-3 mb-2">
      <input
        type="checkbox"
        checked={checked}
        name={idMood}
        onChange={() => setChecked(!checked)}
        className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-red-400 checked:border-transparent focus:outline-none"
      />
      <span className="text-gray-900">{moodName}</span>
    </label>
  );
};

export default GarmentsSidebarMoodCheckbox;
