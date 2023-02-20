import React, { useEffect, useState } from 'react';
import { useProudcts } from '../../contexts/ProductProvider/ProductProvider';
import Products from '../Products/Products';

const FilterSection = () => {
  const data = useProudcts();
  const [isSearched, setIsSearched] = useState(false);
  const [state, setState] = useState('Arizona');
  const [city, setCity] = useState('Bisbee');
  const [price, setPrice] = useState(2000);
  const [type, setType] = useState('Public Property');
  const [filteredData, setFilteredData] = useState(data);

  const handelFilter = () => {
    let lowPrice;
    let highPrice;

    if (price === '00$ - 5000$') {
      lowPrice = 0;
      highPrice = 5000;
    } else {
      lowPrice = 5001;
      highPrice = 10000;
    }
    const newdata = data.filter(
      (d) =>
        d.state === state &&
        // d.price > lowPrice &&
        // d.price < highPrice &&
        d.type === type &&
        d.city === city
    );

    setFilteredData(newdata);
  };

  useEffect(() => {
    handelFilter();
  }, [isSearched]);

  const filterDuplicates = (array) => {
    return array.filter((a, b) => array.indexOf(a) === b);
  };

  return (
    <section className="space-y-14">
      <div className="grid grid-cols-5 rounded-xl bg-white shadow-md p-7 gap-6">
        <div className="form-control w-full bg-white">
          <label className="label">
            <span className="label-text">State</span>
          </label>
          <select
            name="state"
            onChange={(e) => setState(e.target.value)}
            className="select select-bordered bg-white text-[#05061a]"
          >
            {filterDuplicates(data.map((a) => a.state)).map((state, i) => (
              <option key={i + 1} className="text-[#05061a]">
                {state}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control w-full bg-white">
          <label className="label">
            <span className="label-text">Ciry</span>
          </label>
          <select
            name="city"
            onChange={(e) => setCity(e.target.value)}
            className="select select-bordered bg-white text-[#05061a]"
          >
            {filterDuplicates(
              data.filter((a) => a.state === state).map((c) => c.city)
            ).map((city, i) => (
              <option key={i + 1} className="text-[#05061a]">
                {city}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control w-full bg-white">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <select
            name="price"
            onChange={(e) => setPrice(e.target.value)}
            className="select select-bordered bg-white text-[#05061a]"
          >
            <option>00$ - 5000$</option>
            <option>5001$ - 10000$</option>
          </select>
        </div>{' '}
        <div className="form-control w-full bg-white">
          <label className="label">
            <span className="label-text">Property Type</span>
          </label>
          <select
            name="type"
            onChange={(e) => setType(e.target.value)}
            className="select select-bordered bg-white text-[#05061a]"
          >
            {filterDuplicates(data.map((a) => a.type)).map((type) => (
              <option className="text-[#05061a]">{type}</option>
            ))}
          </select>
        </div>
        <div className="grid place-content-center w-full">
          <button
            onClick={() => setIsSearched(!isSearched)}
            className="btn btn-accent w-full"
          >
            Search
          </button>
        </div>
      </div>
      {/* Products */}

      <Products filteredData={filteredData} />
    </section>
  );
};

export default FilterSection;
