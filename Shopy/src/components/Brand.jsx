/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Brand = ({ brand }) => {

  return (
         <Link to={`product/${brand.brandName}`}>
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-5 pt-10">
        <img
          src={brand.image}
          alt="Brand Image"
          className="rounded-xl w-20 h-20"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{brand.brandName}</h2>
      </div>
    </div>
    </Link>
  );
};

export default Brand;
