import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GarmentsSidebar from './GarmentsSidebar';
import GarmentCard from './GarmentCard';

const Garments = () => {
  const [garmentName, setGarmentName] = useState('');
  const [garmentType, setGarmentType] = useState('');
  const [moods, setMoods] = useState([]);
  const [garment, setGarment] = useState({});
  const [garmentsList, setGarmentsList] = useState([]);

  const listNewGarments = () => {
    console.log('listing new garments');
    listGarments().then((data) => setGarmentsList(data));
  };

  const listGarments = async () => {
    return axios
      .get('http://localhost:5000/garment/list', { params: { id: 1 } })
      .then((data) => data.data.body.garments);
  };

  useEffect(() => {
    listGarments().then((data) => {
      console.log(data);
      setGarmentsList(data);
    });
  }, []);

  const onChangeGarmentName = (e) => {
    setGarmentName(e.target.value);
    setGarment({ ...garment, name: garmentName });
  };

  const onChangeGarmentType = (e) => {
    setGarmentType(e.target.value);
    setGarment({ ...garment, type: garmentType });
  };

  const createGarment = async () => {
    const config = {
      'Content-Type': 'application/json',
    };

    const body = {
      id: 1,
      name: garmentName,
      type: garmentType,
      moods: [],
    };

    axios
      .post('http://localhost:5000/garment/create', body, config)
      .then(() => listNewGarments());
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createGarment();
  };

  return (
    <div className="md:flex flex-col md:flex-row md:min-h-screen w-full">
      {/* Sidebar */}
      <GarmentsSidebar />
      {/* Content */}
      <div className="p-4 w-full">
        {/* Title */}
        <div className="flex items-center max-w justify-between">
          <div className="max-w-md">
            <h1 className="font-medium text-6xl">Garments</h1>
          </div>

          <form action="" onSubmit={onSubmit}>
            <input
              type="text"
              name="garmentName"
              value={garmentName}
              onChange={onChangeGarmentName}
              placeholder="Garment name"
              className="outline-none p-2 border  focus:border-red-400 mr-10"
            />
            <select
              name="garmentType"
              id="garmentType"
              value={garmentType}
              onChange={onChangeGarmentType}
            >
              <option value="hat">Hat</option>
              <option value="top">Top</option>
              <option value="bottom">Bottom</option>
              <option value="shoe">Shoe</option>
            </select>
            <button className="p-2 border-none rounded-md bg-red-400 text-white">
              New Garment
            </button>
          </form>
        </div>
        {/* GarmentCard */}
        <div className="grid grid-cols-3 m-10 justify-evenly gap-10">
          {garmentsList
            ? garmentsList.map((garment) => (
                <GarmentCard
                  key={garment.id_garment}
                  garmentName={garment.garment_name}
                  garmentType={garment.garment_type}
                  moods={garment.moods}
                  idGarment={garment.id_garment}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Garments;
