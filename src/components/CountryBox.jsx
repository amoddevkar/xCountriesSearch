import React from "react";
import "../App.css";
export default function CountryBox({ name, img }) {
  return (
    <div className="country-box">
      <img src={img} alt={`flag of ${name}`} />
      <p>{name}</p>
    </div>
  );
}
