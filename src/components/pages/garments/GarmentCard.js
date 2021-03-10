import React, { useContext } from 'react';
import GarmentsContext from '../../../context/garments/garmentsContext';

const GarmentCard = ({ garmentName, garmentType, moods, idGarment }) => {
  const garmentsContext = useContext(GarmentsContext);
  const { deleteGarment } = garmentsContext;

  return (
    <div className="w-full p-4 border-2 max-w-sm flex items-center justify-around">
      {/* Description */}
      <div className="w-full">
        <div>
          {' '}
          <span className="font-semibold">Name:</span> {garmentName}
        </div>
        <div>
          <span className="font-semibold">Type:</span> {garmentType}
        </div>

        <div>
          <span className="font-semibold">Moods: </span>
          {moods ? moods.map((mood) => mood.mood_name) : <span>h1</span>}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center">
        {' '}
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
