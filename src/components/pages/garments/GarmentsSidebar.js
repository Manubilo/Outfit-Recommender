import React, { useState } from 'react';

const GarmentsSidebar = () => {
  const [camisasChecked, setCamisasChecked] = useState(false);
  return (
    <div className="flex flex-col w-full md:w-64 text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0">
      <div className="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between">
        <a
          href="#"
          className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
        >
          Filtros
        </a>
        <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline">
          <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <nav className="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto">
        <div>
          <a
            className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            href="#"
          >
            Tipo de Prenda
          </a>
          {/* Checkboxes */}
          <div className="grid grid-cols-2 pt-4">
            <label className="flex items-center justify-start space-x-3 mb-2">
              <input
                type="checkbox"
                checked={camisasChecked}
                onChange={() => setCamisasChecked(!camisasChecked)}
                className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-red-400 checked:border-transparent focus:outline-none"
              />
              <span className="text-gray-900">Camisa</span>
            </label>
            <label className="flex items-center justify-start space-x-3 mb-2">
              <input
                type="checkbox"
                checked={camisasChecked}
                onChange={() => setCamisasChecked(!camisasChecked)}
                className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-red-400 checked:border-transparent focus:outline-none"
              />
              <span className="text-gray-900 ">Pantalón</span>
            </label>
            <label className="flex items-center justify-start space-x-3 mb-2">
              <input
                type="checkbox"
                checked={camisasChecked}
                onChange={() => setCamisasChecked(!camisasChecked)}
                className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-red-400 checked:border-transparent focus:outline-none"
              />
              <span className="text-gray-900 ">Calzado</span>
            </label>
            <label className="flex items-center justify-start space-x-3 mb-2">
              <input
                type="checkbox"
                checked={camisasChecked}
                onChange={() => setCamisasChecked(!camisasChecked)}
                className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-red-400 checked:border-transparent focus:outline-none"
              />
              <span className="text-gray-900 ">Polo</span>
            </label>
          </div>
        </div>
        <div>
          <a
            className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            href="#"
          >
            Moods
          </a>
          {/* Checkboxes */}
          <div className="grid grid-cols-2 pt-4">
            <label className="flex items-center justify-start space-x-3 mb-2">
              <input
                type="checkbox"
                checked={camisasChecked}
                onChange={() => setCamisasChecked(!camisasChecked)}
                className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-red-400 checked:border-transparent focus:outline-none"
              />
              <span className="text-gray-900">Feliz</span>
            </label>
            <label className="flex items-center justify-start space-x-3 mb-2">
              <input
                type="checkbox"
                checked={camisasChecked}
                onChange={() => setCamisasChecked(!camisasChecked)}
                className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-red-400 checked:border-transparent focus:outline-none"
              />
              <span className="text-gray-900 ">Animado</span>
            </label>
            <label className="flex items-center justify-start space-x-3 mb-2">
              <input
                type="checkbox"
                checked={camisasChecked}
                onChange={() => setCamisasChecked(!camisasChecked)}
                className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-red-400 checked:border-transparent focus:outline-none"
              />
              <span className="text-gray-900 ">Cansado</span>
            </label>
            <label className="flex items-center justify-start space-x-3 mb-2">
              <input
                type="checkbox"
                checked={camisasChecked}
                onChange={() => setCamisasChecked(!camisasChecked)}
                className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-red-400 checked:border-transparent focus:outline-none"
              />
              <span className="text-gray-900 ">Triste</span>
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default GarmentsSidebar;
