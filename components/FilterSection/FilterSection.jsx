import React from 'react';
import { useProudcts } from '../../contexts/ProductProvider/ProductProvider';
import Products from '../Products/Products';

const FilterSection = () => {
  const data = useProudcts();

  const filterDuplicates = (array) => {
    return array.filter((a, b) => array.indexOf(a) === b);
  };

  const handleSubmit = (e) => {
    e.target.prventDefault;

    console.log(e.state.value);
  };

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
            className="select select-bordered bg-white text-[#05061a]"
          >
            {filterDuplicates(data.map((a) => a.state)).map((state) => (
              <option className="text-[#05061a]">{state}</option>
            ))}
          </select>
        </div>
        <div className="form-control w-full bg-white">
          <label className="label">
            <span className="label-text">Ciry</span>
          </label>
          <select className="select select-bordered bg-white text-[#05061a]">
            {filterDuplicates(data.map((a) => a.city)).map((city) => (
              <option className="text-[#05061a]">{city}</option>
            ))}
          </select>
        </div>
        <div className="form-control w-full bg-white">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <select className="select select-bordered bg-white text-[#05061a]">
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
          <select className="select select-bordered bg-white text-[#05061a]">
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

      <Products />
    </section>
  );
};

export default FilterSection;
