import React from "react";
import "../App.css";
export default function CountryBox({ name, img }) {
  return (
    <div className="countryCard">
      <img src={img} alt={`flag of ${name}`} />
      <p>{name}</p>
    </div>
  );
}
