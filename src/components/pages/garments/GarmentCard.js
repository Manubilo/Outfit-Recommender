import React, { useState, useContext } from 'react';
import GarmentsContext from '../../../context/garments/garmentsContext';
import MoodsContext from '../../../context/moods/moodsContext';

const GarmentCard = ({ garmentName, garmentType, moods, idGarment }) => {
  const garmentsContext = useContext(GarmentsContext);
  const { deleteGarment } = garmentsContext;

  const moodsContext = useContext(MoodsContext);
  const { moodsList } = moodsContext;

  const [mood, setMood] = useState('');
  const [moodsCreateGarment, setMoodsCreateGarment] = useState([]);

  const onChange = (e) => {
    const newMood = e.target.value;
    setMood(newMood);
  };

  return (
    <div className="w-full p-4 border-2 max-w-sm justify-around">
      {/* Description */}
      <div>
        <div>
          {' '}
          <span className="font-semibold">Name:</span> {garmentName}
        </div>
        <div>
          <span className="font-semibold">Type:</span> {garmentType}
        </div>
      </div>

      <div className="w-full">
        <span className="font-semibold">Moods: </span>
        {moods ? moods.map((mood) => <span>{mood}</span>) : null}
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-end">
        <button className="p-1 mx-2 border-none rounded-md  bg-green-500 text-white ">
          Edit
        </button>
        <button
          onClick={() => deleteGarment(idGarment)}
          className="p-1 border-none rounded-md  bg-red-500 text-white "
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default GarmentCard;
