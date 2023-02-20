import React, { useState } from 'react';
import { useProudcts } from '../../contexts/ProductProvider/ProductProvider';
import Products from '../Products/Products';

const FilterSection = () => {
  const data = useProudcts();
  const [state, setState] = useState('Arizona');
  const [filteredData, setFilteredData] = useState(data);

  const filterDuplicates = (array) => {
    return array.filter((a, b) => array.indexOf(a) === b);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const state = form.state.value;
    const city = form.city.value;
    const type = form.type.value;
    let price = form.price.value;

    let lowPrice;
    let highPrice;

    if (price === '00$ - 5000$') {
      lowPrice = 0;
      highPrice = 5000;
    } else if (price === '5001$ - 10000$') {
      lowPrice = 0;
      highPrice = 5000;
    } else if (price === '10001$ - 12000$') {
      lowPrice = 0;
      highPrice = 5000;
    } else {
      lowPrice = 12001;
      highPrice = 15000;
    }

    const filteredData = data.filter(
      (d) =>
        d.state === state &&
        d.price > lowPrice &&
        d.price < highPrice &&
        d.type === type &&
        d.city === city
    );

    setFilteredData(filteredData);
  };

  console.log(filteredData);
  return (
    <section className="space-y-14">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-5 rounded-xl bg-white shadow-md p-7 gap-6"
      >
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
            className="select select-bordered bg-white text-[#05061a]"
          >
            {filterDuplicates(data.filter((a) => a.state === state)).map(
              (p) => (
                <option key={p.id} className="text-[#05061a]">
                  {p.city}
                </option>
              )
            )}
          </select>
        </div>
        <div className="form-control w-full bg-white">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <select
            name="price"
            className="select select-bordered bg-white text-[#05061a]"
          >
            <option>00$ - 5000$</option>
            <option>5001$ - 10000$</option>
            <option>10001$ - 12000$</option>
            <option>12001$ - 15000$</option>
          </select>
        </div>{' '}
        <div className="form-control w-full bg-white">
          <label className="label">
            <span className="label-text">Property Type</span>
          </label>
          <select
            name="type"
            className="select select-bordered bg-white text-[#05061a]"
          >
            {filterDuplicates(data.map((a) => a.type)).map((type) => (
              <option className="text-[#05061a]">{type}</option>
            ))}
          </select>
        </div>
        <div className="grid place-content-center w-full">
          <button className="btn btn-accent w-full">Search</button>
        </div>
      </form>
      {/* Products */}

      <Products filteredData={filteredData} />
    </section>
  );
};

export default FilterSection;
