import { useState, useEffect } from "react";

export default function FavouriteSlipsList(props) {
    return (
      <section className="favourite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {props.favourites.map((advice, index) => (
            <li key={index}>{advice}</li>
          ))}
        </ul>
      </section>
    );
  }